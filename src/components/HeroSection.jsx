import React from "react";
import Customer from "./Customer";

const HeroSection = () => {
  const homeServices = [
    {
      id: 1,
      url: "womenSalon.webp",
      text: "Women's Salon, Spa & Laser Clinic",
      col: 2,
    },
    { id: 2, url: "menSalon.webp", text: "Men's Salon & Massage", col: 2 },
    { id: 3, url: "acRepair.webp", text: "AC & Appliance Repair", col: 2 },
    { id: 4, url: "cleaning.webp", text: "Cleaning & Pest Control", col: 2 },
    {
      id: 5,
      url: "electrician.webp",
      text: "Electrician, Plumber & Carpenter",
      col: 2,
    },
    { id: 6, url: "waterPurifier.webp", text: "Native Water Purifier", col: 2 },
    { id: 7, url: "painting.webp", text: "Painting & Waterproofing", col: 3 },
    { id: 8, url: "wallDecor.webp", text: "Wall Decor (Panels)", col: 3 },
  ];

  return (
    <div className="flex mt-8 mx-16 gap-8">
      <div className="left w-1/2">
        <h1 className="text-3xl font-semibold w-3/4 mb-8">
          Home services at your doorstep
        </h1>
        <div className=" border-gray-500 border-[0.4px] rounded p-2">
          <h1 className="pb-1 text-gray-500 font-semibold">
            What are you looking for?
          </h1>
          <div className=" grid grid-cols-6 grid-rows-3 gap-2 text-[10px] text-center  ">
            {homeServices.map((item) => (
              <div
                className={`${
                  item.col == 2 ? "col-span-2" : "col-span-3"
                } items-center flex-col`}
              >
                <div className="bg-slate-100 flex place-content-center rounded p-3">
                  {item.col == 3 && (
                    <div className="py-[10%] pr-3">{item.text}</div>
                  )}
                  <img src={item.url} alt={item.text} />
                </div>
                {item.col == 2 && <div>{item.text}</div>}
              </div>
            ))}
          </div>
        </div>

        <Customer />
      </div>
      <div className="right w-1/2">
        <img src="heroimg.webp" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
