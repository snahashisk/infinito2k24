import React from "react";

import slide_image_1 from "../images/fb-image-1.jpg";
import slide_image_2 from "../images/fb-image-2.jpg";
import slide_image_6 from "../images/fb-image-6.jpg";
import slide_image_7 from "../images/fb-image-7.jpg";
import slide_image_8 from "../images/fb-image-8.jpg";
import slide_image_9 from "../images/fb-image-9.jpg";
import slide_image_10 from "../images/fb-image-10.jpg";
import slide_image_11 from "../images/fb-image-11.jpg";
import slide_image_12 from "../images/fb-image-12.jpg";
import slide_image_13 from "../images/fb-image-13.jpg";
import slide_image_14 from "../images/fb-image-14.jpg";
import slide_image_15 from "../images/fb-image-15.jpg";
import slide_image_17 from "../images/fb-image-17.jpg";
import slide_image_18 from "../images/fb-image-18.jpg";
import slide_image_19 from "../images/fb-image-19.jpg";
import slide_image_20 from "../images/fb-image-20.jpg";
import slide_image_36 from "../images/fb-image-36.jpg";
import slide_image_37 from "../images/fb-image-37.jpg";

const images = [
  slide_image_1,
  slide_image_2,
  slide_image_6,
  slide_image_7,
  slide_image_8,
  slide_image_9,
  slide_image_10,
  slide_image_11,
  slide_image_12,
  slide_image_13,
  slide_image_14,
  slide_image_15,
  slide_image_17,
  slide_image_18,
  slide_image_19,
  slide_image_20,
  slide_image_36,
  slide_image_37,
];

// EmblaCarousel component
const Gallery = () => {
  return (
    <div className="min-h-screen bg-black font-sans pb-8">
      <div className="text-center">
        <p className="text-xl py-4 text-fuchsia-400">
          GLIMPSE OF INFINITO 2K23
        </p>
        <p className="text-5xl font-bold tracking-wide pb-4 text-white">
          PHOTO GALLERY
        </p>
      </div>
      <div className="grid lg:grid-cols-6 lg:grid-rows-3 gap-4 p-4 grid-cols-3 grid-rows-6">
        {images.slice(0, 18).map((image, index) => (
          <div
            key={index}
            className="relative hover:scale-150 hover:z-20 duration-100 hover:shadow-xl"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
