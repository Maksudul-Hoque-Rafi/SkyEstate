import Card from "../components/Card";
import apiRequest from "../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLoaderData } from "react-router";

const ProfilePage = () => {
  const { userPosts, savedPosts } = useLoaderData();
  const { currentUser, updateUser } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  // const data = listData;
  return (
    <div className="flex justify-between gap-7 py-5">
      <div className="w-3/5">
        {/* User Info */}
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-light">User Information</h1>
            <Link to={"/profile/update"}>
              <button className="px-4 py-2 bg-yellow-300 rounded-lg cursor-pointer">
                Update Profile
              </button>
            </Link>
          </div>
          <div className="mt-14 flex flex-col gap-5">
            <div className="flex gap-4 items-center">
              <p>Avatar:</p>
              <img
                src={currentUser.avatar || "/noavatar.jpg"}
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div className="flex gap-4">
              <p>Username:</p>
              <p className="font-semibold">{currentUser.username}</p>
            </div>
            <div className="flex gap-4">
              <p>Email:</p>
              <p className="font-semibold">{currentUser.email}</p>
            </div>
            <div>
              <button
                className="px-4 py-2 bg-yellow-300 rounded-lg cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        {/*My List */}
        <div className="mt-14">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-light">My List</h1>
            <Link to={"/add"}>
              <button className="px-4 py-2 bg-yellow-300 rounded-lg cursor-pointer">
                Create New Post
              </button>
            </Link>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            {userPosts.post.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* Saved List */}
        <div className="mt-14">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-light">Saved List</h1>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            {savedPosts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
