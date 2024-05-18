import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ApplianceRepair = () => {
  const carouselItems = [
    { id: 1, url: "appliance1.webp", text: "AC Repair & Service" },
    { id: 2, url: "appliance2.webp", text: "Water Purifier Repair" },
    { id: 3, url: "appliance3.webp", text: "Refrigerator Repair" },
    { id: 4, url: "appliance4.webp", text: "Washing Machine Repair" },
    { id: 5, url: "appliance5.webp", text: "Chimney Repair" },
    { id: 6, url: "appliance6.webp", text: "Native Water Purifier Repair" },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h1 className="font-semibold text-3xl mt-20 mb-5">
        AC & appliance repair
      </h1>
      <Carousel className=" rounded-md" responsive={responsive}>
        {carouselItems.map((item) => (
          <div className="mx-3 hover:scale-105 ease-in-out transition-all roounded-lg">
            <h1 className="my-2">{item.text}</h1>
            <img className="h-56 w-56" src={item.url} alt={item.id} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ApplianceRepair;
