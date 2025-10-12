import React, { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="relative">
      <div>
        <h1 className="text-3xl font-light">Messages</h1>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex justify-between items-center bg-white px-4 py-5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>

          <div className="flex justify-between items-center bg-white px-4 py-5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="flex justify-between items-center bg-white px-4 py-5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="flex justify-between items-center bg-white px-4 py-5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="flex justify-between items-center bg-white px-4 py-5 rounded-xl">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>
      {chat && (
        <div className="absolute top-25 left-0 right-0 bottom-5">
          <div className="flex justify-between items-center bg-yellow-300 px-5 py-3">
            <div className="flex items-center gap-3">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="h-8 w-8 object-cover rounded-full"
              />
              <p>John Doe</p>
            </div>
            <span
              className="font-semibold cursor-pointer"
              onClick={() => setChat(false)}
            >
              X
            </span>
          </div>
          <div className="bg-white h-[300px] overflow-y-auto ">
            <div className="px-4 py-2 w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                1 hour ago
              </span>
            </div>
            <div className="flex flex-col items-end px-4 py-2">
              <div className="w-1/2">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                  1 hour ago
                </span>
              </div>
            </div>
            <div className="px-4 py-2 w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                1 hour ago
              </span>
            </div>
            <div className="flex flex-col items-end px-4 py-2">
              <div className="w-1/2">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                  1 hour ago
                </span>
              </div>
            </div>
            <div className="px-4 py-2 w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                1 hour ago
              </span>
            </div>
            <div className="flex flex-col items-end px-4 py-2">
              <div className="w-1/2">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                  1 hour ago
                </span>
              </div>
            </div>
            <div className="px-4 py-2 w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                1 hour ago
              </span>
            </div>
            <div className="flex flex-col items-end px-4 py-2">
              <div className="w-1/2">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                  1 hour ago
                </span>
              </div>
            </div>
            <div className="px-4 py-2 w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                1 hour ago
              </span>
            </div>
            <div className="flex flex-col items-end px-4 py-2">
              <div className="w-1/2">
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-sm bg-yellow-300/20 p-0.5 rounded-sm">
                  1 hour ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <textarea className="flex-3 bg-white border-2 border-b-0 px-4 py-2 border-yellow-200"></textarea>
            <button className="flex-1 bg-yellow-200 cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
