{
  /* Features Section */
}
<div className="flex-[2] h-full overflow-y-scroll bg-[#fcf5f3] md:mb-12 md:h-max md:flex-none">
  <div className="p-5 flex flex-col gap-5 md:p-8">
    {/* General */}
    <p className="font-bold text-lg mb-2">General</p>
    <div className="flex flex-col gap-5 p-5 bg-white rounded-lg">
      <div className="flex items-center gap-3">
        <img src="/utility.png" alt="" className="w-6 h-6 bg-yellow-200/20" />
        <div>
          <span className="font-bold block">Utilities</span>
          <p className="text-sm">Renter is responsible</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src="/pet.png" alt="" className="w-6 h-6 bg-yellow-200/20" />
        <div>
          <span className="font-bold block">Pet Policy</span>
          <p className="text-sm">Pets Allowed</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src="/fee.png" alt="" className="w-6 h-6 bg-yellow-200/20" />
        <div>
          <span className="font-bold block">Property Fees</span>
          <p className="text-sm">
            Must have 3x the rent in total household income
          </p>
        </div>
      </div>
    </div>

    {/* Sizes */}
    <p className="font-bold text-lg mb-2">Sizes</p>
    <div className="flex justify-between">
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded">
        <img src="/size.png" alt="" className="w-6 h-6" />
        <span>80 sqft</span>
      </div>
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded">
        <img src="/bed.png" alt="" className="w-6 h-6" />
        <span>2 beds</span>
      </div>
      <div className="flex items-center gap-3 bg-white px-4 py-2 rounded">
        <img src="/bath.png" alt="" className="w-6 h-6" />
        <span>1 bathroom</span>
      </div>
    </div>

    {/* Nearby Places */}
    <p className="font-bold text-lg mb-2">Nearby Places</p>
    <div className="flex justify-between p-5 bg-white rounded-lg">
      <div className="flex items-center gap-3">
        <img src="/school.png" alt="" className="w-6 h-6 bg-yellow-200/20" />
        <div>
          <span className="font-bold block">School</span>
          <p className="text-sm">250m away</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src="/pet.png" alt="" className="w-6 h-6 bg-yellow-200/20" />
        <div>
          <span className="font-bold block">Bus Stop</span>
          <p className="text-sm">100m away</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src="/fee.png" alt="" className="w-6 h-6 bg-yellow-200/20" />
        <div>
          <span className="font-bold block">Restaurant</span>
          <p className="text-sm">200m away</p>
        </div>
      </div>
    </div>

    {/* Location */}
    <p className="font-bold text-lg mb-2">Location</p>
    <div className="w-full h-52">
      <Map items={[singlePostData]} />
    </div>

    {/* Buttons */}
    <div className="flex justify-between">
      <button className="flex items-center gap-2 px-6 py-3 border border-yellow-400 rounded bg-white cursor-pointer">
        <img src="/chat.png" alt="" className="w-4 h-4" />
        Send a Message
      </button>
      <button className="flex items-center gap-2 px-6 py-3 border border-yellow-400 rounded bg-white cursor-pointer">
        <img src="/save.png" alt="" className="w-4 h-4" />
        Save the Place
      </button>
    </div>
  </div>
</div>;
