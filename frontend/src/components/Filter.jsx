import { useSearchParams } from "react-router";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const city = formData.get("city");
    const type = formData.get("type");
    const property = formData.get("property");
    const bedroom = formData.get("bedroom");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");
    setSearchParams({
      city,
      type,
      property,
      bedroom,
      minPrice,
      maxPrice,
    });
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-light text-2xl">
        Search results for <b>London</b>
      </h1>
      <form onSubmit={handleForm}>
        {/* Top Section */}
        <div className="w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-[10px]">
              Location
            </label>
            <input
              type="text"
              name="city"
              defaultValue={searchParams.get("city")}
              placeholder="City Location"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-3 flex flex-wrap justify-between gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="type" className="text-[10px]">
              Type
            </label>
            <select
              name="type"
              defaultValue={searchParams.get("type")}
              className="w-28 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="">any</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="property" className="text-[10px]">
              Property
            </label>
            <select
              name="property"
              defaultValue={searchParams.get("property")}
              className="w-28 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="minPrice" className="text-[10px]">
              Min Price
            </label>
            <input
              type="number"
              name="minPrice"
              defaultValue={searchParams.get("minPrice")}
              placeholder="any"
              className="w-28 p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="maxPrice" className="text-[10px]">
              Max Price
            </label>
            <input
              type="text"
              name="maxPrice"
              defaultValue={searchParams.get("maxPrice")}
              placeholder="any"
              className="w-28 p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="bedroom" className="text-[10px]">
              Bedroom
            </label>
            <input
              type="text"
              name="bedroom"
              defaultValue={searchParams.get("bedroom")}
              placeholder="any"
              className="w-28 p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <button className="w-20 p-1 bg-yellow-400 rounded-md flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer">
            <img src="/search.png" alt="search" className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
