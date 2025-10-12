import { useContext, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleForm = async (formData) => {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const response = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar,
      });
      updateUser(response.data);
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const cloudName = "ddno8tek9";
  const uploadPreset = "estate";
  const uwConfig = {
    cloudName,
    uploadPreset,
    multiple: false,
    folder: "avatars",
    maxImageFileSize: 2000000,
  };

  return (
    <div className="flex mt-5">
      <div className="flex-3 flex justify-center items-center">
        <form action={handleForm} className="flex flex-col gap-4 max-w-xs">
          <h1 className="mb-2 text-3xl font-semibold">Update Account</h1>
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="username"
            type="text"
            placeholder="Username"
            defaultValue={currentUser.username}
          />
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={currentUser.email}
          />
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="password"
            type="password"
            placeholder="Password"
          />
          <SubmitButton submitType={"Update"} />
        </form>
      </div>
      <div className="flex-2 flex flex-col justify-center items-center ">
        <img
          src={avatar || "/noavatar.jpg"}
          alt="backgroung image"
          className="max-h-50 mb-5"
        />
        <CloudinaryUploadWidget uwConfig={uwConfig} setState={setAvatar} />
      </div>
    </div>
  );
};

export default ProfileUpdate;
