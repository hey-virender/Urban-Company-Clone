import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MostBooked = () => {
  const mostBooked = [
    {
      id: 1,
      url: "most1.webp",
      text: "Power Saver AC service",
      rating: "4.83 (384.4K)",
      price: 549,
    },
    {
      id: 2,
      url: "most2.webp",
      text: "AC repair (split/window",
      rating: "4.80 (337.6K)",
      price: 299,
    },
    {
      id: 3,
      url: "most3.webp",
      text: "Haircut for men",
      rating: "4.89 (539.6K)",
      price: 259,
    },
    {
      id: 4,
      url: "most4.webp",
      text: "Sofa cleaning",
      rating: "4.86 (142.2K)",
      price: 499,
    },
    {
      id: 5,
      url: "most5.webp",
      text: "Intense bathroom cleaning",
      rating: "4.78 (1.5M)",
      price: 519,
    },
    {
      id: 6,
      url: "most6.webp",
      text: "Elysian British Rose pedicure",
      rating: "4.83 (248.9K)",
      price: 759,
    },
    {
      id: 7,
      url: "most7.webp",
      text: "Intest cleaning - 2 bathroom pack",
      rating: "4.78 (1.5M)",
      price: 938,
    },
    {
      id: 8,
      url: "most8.webp",
      text: "Stress relief swedish massage",
      rating: "4.85 (108K)",
      price: 1299,
    },
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
        Most booked services
      </h1>
      <Carousel
        className="mt-16"
        itemClass="w-fit"
        responsive={responsive}
        partialVisbile={false}
      >
        {mostBooked.map((item) => (
          <div className="h-full">
            <div className="w-full h-56">
              <img className="objectfit h-56 w-56" src={item.url} alt="" />
            </div>
            <div className="my-3 font-semibold">{item.text}</div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[1.4vw] h-[1.4vw] inline"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clipRule="evenodd"
                />
              </svg>
              {item.rating}
            </div>
            <div>₹ {item.price}</div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MostBooked;
