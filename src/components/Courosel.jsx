import image1 from "./../assets/img.jpg";
import image2 from "./../assets/img1.jpg";
import image3 from "./../assets/img2.jpg";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <div className="w-full max-w-full mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={2000}
        transitionTime={700}
      >
        <div className="w-full h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src={image1}
            alt="Slide 1"
          />
        </div>
        <div className="w-full h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src={image2}
            alt="Slide 2"
          />
        </div>
        <div className="w-full h-[70vh]">
          <img
            className="w-full h-full object-cover"
            src={image3}
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
