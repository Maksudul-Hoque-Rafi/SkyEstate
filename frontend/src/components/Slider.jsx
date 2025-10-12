import React, { useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="flex gap-5">
      {imageIndex !== null && (
        <div className="absolute top-0 left-0 flex gap-5 justify-between items-center w-screen h-screen bg-black">
          <div
            onClick={() => changeSlide("left")}
            className="flex-1 flex justify-center items-center cursor-pointer"
          >
            <img src="/arrow.png" alt="" className="w-10" />
          </div>
          <div className="flex-10">
            <img
              src={images[imageIndex]}
              alt=""
              className="h-screen w-full object-cover"
            />
          </div>
          <div
            onClick={() => changeSlide("right")}
            className="flex-1 flex justify-center items-center cursor-pointer rotate-180"
          >
            <img src="/arrow.png" alt="" className="w-10" />
          </div>
          <div
            className=" text-white text-4xl absolute top-10 right-10 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}
      <div className="flex-3">
        <img
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
          className="w-full h-full object-cover rounded-2xl cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {images.slice(1, 4).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
            className="h-32 rounded-xl cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
