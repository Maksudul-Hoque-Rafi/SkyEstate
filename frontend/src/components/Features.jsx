import Map from "./Map";
import { useState } from "react";
import apiRequest from "../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Features = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const handleClick = async () => {
    if (currentUser) {
      try {
        await apiRequest.post("/posts/save", { postId: post.id });
        setIsSaved(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-col gap-7 bg-[#fcf5f3] px-6 py-4 rounded-xl">
      <div>
        <p className="font-semibold text-lg">General</p>
        <div className="mt-5 px-2 py-3 flex flex-col gap-5 bg-white rounded-xl">
          <div className="flex items-center gap-2">
            <img
              src="/utility.png"
              alt=""
              className="w-6 h-6 bg-yellow-200/50"
            />
            <div>
              <span className="font-semibold">Utilities</span>
              {post.postDetail.utilities === "owner" ? (
                <p className="text-sm">Owner is responsible</p>
              ) : (
                <p className="text-sm">Tenant is responsible</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/pet.png" alt="" className="w-6 h-6 bg-yellow-200/50" />
            <div className="featureText">
              <span className="font-semibold">Pet Policy</span>
              {post.postDetail.pet === "allowed" ? (
                <p className="text-sm">Pets Allowed</p>
              ) : (
                <p className="text-sm">Pets Not Allowed</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/fee.png" alt="" className="w-6 h-6 bg-yellow-200/50" />
            <div className="featureText">
              <span className="font-semibold">Property Fees</span>
              <p className="text-sm">{post.postDetail.income}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">Sizes</p>
        <div className="mt-3.5 flex justify-between">
          <div className="flex gap-2 bg-white p-2 rounded-md">
            <img src="/size.png" alt="" className="w-6 h-6" />
            <span>{post.postDetail.size}</span>
          </div>
          <div className="flex gap-2 bg-white p-2 rounded-md">
            <img src="/bed.png" alt="" className="w-6 h-6" />
            <span>{post.bedroom}</span>
          </div>
          <div className="flex gap-2 bg-white p-2 rounded-md">
            <img src="/bath.png" alt="" className="w-6 h-6" />
            <span>{post.bathroom}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">Nearby Places</p>
        <div className="mt-3.5 flex justify-between bg-white px-3 py-4 rounded-xl">
          <div className="flex items-center gap-2">
            <img
              src="/school.png"
              alt=""
              className="w-6 h-6 bg-yellow-200/50"
            />
            <div>
              <span className="font-semibold">School</span>
              <p className="text-sm">{post.postDetail.school}m away</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/pet.png" alt="" className="w-6 h-6 bg-yellow-200/50" />
            <div>
              <span className="font-semibold">Bus Stop</span>
              <p className="text-sm">{post.postDetail.bus}m away</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/fee.png" alt="" className="w-6 h-6 bg-yellow-200/50" />
            <div>
              <span className="font-semibold">Restaurant</span>
              <p className="text-sm">{post.postDetail.restaurant}m away</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">Location</p>
        <div className="mt-4 h-[230px]">
          <Map items={[post]} />
        </div>
      </div>

      <div>
        <button
          onClick={handleClick}
          className={`${
            isSaved ? "bg-yellow-300" : ""
          } flex items-center gap-3 border-1  border-yellow-500 rounded-lg p-3 cursor-pointer`}
        >
          <img src="/save.png" alt="" className="w-4 h-4" />
          {isSaved ? <p>Place Saved</p> : <p>Save the Place</p>}
        </button>
      </div>
    </div>
  );
};

export default Features;
