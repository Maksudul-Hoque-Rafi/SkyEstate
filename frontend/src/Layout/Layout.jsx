import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

export const Layout = () => {
  return (
    <div className="padding-x">
      <Navbar />
      <Outlet />
    </div>
  );
};

export const RequiredAuth = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  } else {
    return (
      <div className="padding-x">
        <Navbar />
        <Outlet />
      </div>
    );
  }
};
