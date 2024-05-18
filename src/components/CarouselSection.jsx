import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection = () => {
  const carouselItems = [
    { id: 1, url: "carousel1.webp" },
    { id: 2, url: "carousel2.webp" },
    { id: 3, url: "carousel3.webp" },
    { id: 4, url: "carousel4.webp" },
    { id: 5, url: "carousel5.webp" },
    { id: 6, url: "carousel6.webp" },
    { id: 7, url: "carousel7.webp" },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <Carousel className="mt-20 rounded-md" responsive={responsive}>
      {carouselItems.map((item) => (
        <div className="mx-3 hover:scale-105 ease-in-out transition-all roounded-lg">
          <img src={item.url} alt={item.id} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSection;
