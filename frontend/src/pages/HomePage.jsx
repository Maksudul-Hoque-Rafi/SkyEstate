import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="pt-7 flex gap-10">
      <div className="flex-3 flex flex-col gap-16">
        <h1 className="text-6xl font-semibold leading-18">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quo
          necessitatibus dolores ipsum! Rerum perspiciatis excepturi unde, nobis
          modi velit pariatur possimus quis, sapiente ipsa sit impedit
          consequuntur eveniet reprehenderit!
        </p>
        <SearchBar />
        <div className="flex justify-between">
          <div>
            <p className="text-4xl font-semibold">16+</p>
            <p className="text-xl font-light">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl font-semibold">200</p>
            <p className="text-xl font-light">Award Gained</p>
          </div>
          <div>
            <p className="text-4xl font-semibold">2000+</p>
            <p className="text-xl font-light">Property Ready</p>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <img src="/bg.png" alt="backgroung image" />
      </div>
    </div>
  );
};

export default HomePage;
