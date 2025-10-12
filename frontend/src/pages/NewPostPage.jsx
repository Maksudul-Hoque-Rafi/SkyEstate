import { useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import UploadWidget from "../components/CloudinaryUploadWidget";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      console.log(res);
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const setImagesData = (data) => {
    setImages((prev) => [...prev, data]);
  };

  const cloudName = "ddno8tek9";
  const uploadPreset = "estate";
  const uwConfig = {
    cloudName,
    uploadPreset,
    multiple: true,
    folder: "posts",
  };
  const quillInput = useRef(null);

  return (
    <div className="flex gap-10 my-6">
      {/* Form Container */}

      <div className="flex-3 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Add New Post</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-between gap-6"
        >
          {/* Title */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Description */}
          <div className="mb-10 flex flex-col gap-2 w-full">
            <label htmlFor="desc">Description</label>
            <ReactQuill
              theme="snow"
              onChange={(e) => (quillInput.current = e)}
              onBlur={() => setValue(quillInput.current)}
              className="h-48 text-base"
            />
          </div>

          {/* City */}
          <div className=" flex flex-col gap-2 w-[30%]">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Bedroom */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="bedroom">Bedroom Number</label>
            <input
              id="bedroom"
              name="bedroom"
              type="number"
              min={1}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Bathroom */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="bathroom">Bathroom Number</label>
            <input
              id="bathroom"
              name="bathroom"
              type="number"
              min={1}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Latitude */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="latitude">Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="text"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Longitude */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="text"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Type */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              className="p-4 border border-gray-400 rounded-md"
            >
              <option value="rent" defaultChecked>
                Rent
              </option>
              <option value="buy">Buy</option>
            </select>
          </div>

          {/* Property */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              className="p-4 border border-gray-400 rounded-md"
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          {/* Utilities */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="utilities">Utilities Policy</label>
            <select
              name="utilities"
              className="p-4 border border-gray-400 rounded-md"
            >
              <option value="owner">Owner is responsible</option>
              <option value="tenant">Tenant is responsible</option>
              <option value="shared">Shared</option>
            </select>
          </div>

          {/* Pet */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="pet">Pet Policy</label>
            <select
              name="pet"
              className="p-4 border border-gray-400 rounded-md"
            >
              <option value="allowed">Allowed</option>
              <option value="not-allowed">Not Allowed</option>
            </select>
          </div>

          {/* Income */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="income">Income Policy</label>
            <input
              id="income"
              name="income"
              type="text"
              placeholder="Income Policy"
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Size */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="size">Total Size (sqft)</label>
            <input
              id="size"
              name="size"
              type="number"
              min={0}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* School */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="school">School</label>
            <input
              id="school"
              name="school"
              type="number"
              min={0}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Bus */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="bus">Bus</label>
            <input
              id="bus"
              name="bus"
              type="number"
              min={0}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Restaurant */}
          <div className="flex flex-col gap-2 w-[30%]">
            <label htmlFor="restaurant">Restaurant</label>
            <input
              id="restaurant"
              name="restaurant"
              type="number"
              min={0}
              className="p-4 border border-gray-400 rounded-md"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-[30%] py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition cursor-pointer"
          >
            Add
          </button>
          {error && <span className="text-red-500">{error}</span>}
        </form>
      </div>

      {/* Side Container */}
      <div className="flex-2 bg-[#fcf5f3] flex flex-col items-center justify-center gap-6 p-6 rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="uploaded"
            className="w-1/2 h-44 object-cover rounded-md"
          />
        ))}
        <UploadWidget uwConfig={uwConfig} setState={setImagesData} />
      </div>
    </div>
  );
}

export default NewPostPage;
