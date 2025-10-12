import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="py-7 flex justify-between items-center">
      <div className="flex-1 flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-8" />
          <span className="font-semibold text-xl">SkyEstate</span>
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Agents</Link>
      </div>
      <div className="flex-1 flex justify-end items-center">
        {currentUser ? (
          <div className="flex justify-between items-center gap-6">
            <Link to={"/profile"}>
              <img
                src={currentUser.avatar || "/noavatar.jpg"}
                className="w-10 h-10 object-cover rounded-full"
              />
            </Link>
            <p className="font-semibold">{currentUser.username}</p>
            <Link to={"/profile"} className="font-semibold">
              <p className="px-5 py-2.5 rounded-md bg-yellow-300">Profile</p>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-7">
            <Link to={"/login"}>Sign In</Link>
            <Link
              to={"/register"}
              className="px-4 py-2.5 rounded-md bg-yellow-300"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
