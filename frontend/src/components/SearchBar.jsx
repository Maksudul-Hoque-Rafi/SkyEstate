import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

const types = ["buy", "rent"];

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleForm = (formData) => {
    const city = formData.get("city");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");
    navigate(
      `/list?type=${query.type}&city=${city}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };
  return (
    <div>
      <div className="border-1 border-b-0 rounded-t-sm w-fit">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`cursor-pointer px-6 py-3 ${
              query.type === type ? "bg-black text-white" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <form action={handleForm} className="border-1 flex justify-between">
        <input
          type="text"
          name="city"
          placeholder="City Location"
          className="flex-1 px-3 py-5"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
          className="flex-1 px-3 py-5"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
          className="flex-1 px-3 py-5"
        />

        <button type="submit" className="bg-[#fece51] px-4 py-5 cursor-pointer">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
