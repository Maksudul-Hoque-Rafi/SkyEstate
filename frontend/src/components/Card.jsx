import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <div className="flex gap-5">
      {/* Image Section */}
      <Link to={`/${item.id}`} className="flex-2 h-52 hidden md:block">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      {/* Text Section */}
      <div className="flex-3 flex flex-col justify-between gap-3">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-700 transition-all duration-300 hover:text-black hover:scale-[1.01]">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        {/* Address */}
        <p className="text-sm flex items-center gap-2 text-gray-500">
          <img src="/pin.png" alt="location" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>

        {/* Price */}
        <p className="text-xl font-light px-2 py-1 rounded bg-yellow-300/40 w-max">
          $ {item.price}
        </p>

        {/* Bottom Section */}
        <div className="flex justify-between gap-3">
          {/* Features */}
          <div className="flex gap-5 text-sm">
            <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
              <img src="/bed.png" alt="bedrooms" className="w-4 h-4" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
              <img src="/bath.png" alt="bathrooms" className="w-4 h-4" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-5">
            <div className="border border-gray-400 px-2 py-1 rounded cursor-pointer flex items-center justify-center hover:bg-gray-200">
              <img src="/save.png" alt="save" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
