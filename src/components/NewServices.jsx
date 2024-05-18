import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewServices = () => {
  const newServices = [
    { id: 1, url: "new1.webp", text: "Wall Decor (Panel)" },
    { id: 2, url: "new2.webp", text: "Native Water Purifier" },
    { id: 3, url: "new3.webp", text: "Native Smart Locks" },
    { id: 4, url: "new4.webp", text: "Full Home Painting" },
    { id: 5, url: "new5.webp", text: "Laser Hair Reduction" },
    { id: 6, url: "new6.webp", text: "Spa Ayurveda" },
    { id: 7, url: "new7.webp", text: "Hair Studio for Women" },
    { id: 8, url: "new8.webp", text: "AC Repair & Service" },
  ];
  const responsive = {
    superLargeDesktop: {
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
      <h1 className="text-4xl font-semibold -mb-12 mt-12">
        New and noteworthy
      </h1>
      <Carousel
        className="mt-16"
        itemClass="w-fit"
        responsive={responsive}
        partialVisbile={false}
      >
        {newServices.map((item) => (
          <div className="h-full">
            <div className="w-full h-56">
              <img className="objectfit h-56 w-56" src={item.url} alt="" />
            </div>
            <div className="my-3">{item.text}</div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default NewServices;
