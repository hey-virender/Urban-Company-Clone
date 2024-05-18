import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-[12vh] justify-between">
      <img src="./logo.webp" alt="logo" />
      <div className="flex gap-3 m-2 w-4/6 mr-8">
        <div className="flex justify-center items-center w-1/2 border-gray-500 border-[0.4px] rounded px-3 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <input
            className="w-full block"
            type="text"
            placeholder="Connuaght Place, New Delhi"
          />
        </div>
        <div className="flex justify-center items-center w-1/2  border-gray-500 border-[0.4px] rounded px-3 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            className="w-full block"
            type="text"
            placeholder="Search for 'AC Services'"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
