"use client";
import React, { useState } from "react";
import Photo from "./photo";

function Gallery() {
  const products = [
    {
      src: "/data/1.png",
      desc: "Red roses",
      price: "$27.00",
      color: "#d61c1c",
    },
    {
      src: "/data/2.png",
      desc: "Pink roses with teddy bear and botle message",
      price: "$31.00",
      color: "#f5a6b4",
    },
    {
      src: "/data/3.png",
      desc: "Pink roses",
      price: "$15.00",
      color: "#f5a6b4",
    },
    {
      src: "/data/4.png",
      desc: "Pink roses",
      price: "$12.00",
      color: "#f5a6b4",
    },
    {
      src: "/data/5.jpg",
      desc: "Pink and black roses",
      price: "$13.00",
      color: "#ffc0cb",
    },
    {
      src: "/data/6.png",
      desc: "White roses",
      price: "$18.70",
      color: "#FFFFFF",
    },
    {
      src: "/data/7.png",
      desc: "Black roses",
      price: "$22.90",
      color: "#000000",
    },
    {
      src: "/data/8.jpg",
      desc: "Pink roses",
      price: "$27.30",
      color: "#ffc0cb",
    },
    {
      src: "/data/9.jpg",
      desc: "Blue roses",
      price: "$14.50",
      color: "#0000FF",
    },
    {
      src: "/data/10.jpg",
      desc: "Red rose with candy",
      price: "$13.90",
      color: "#a12a2a",
    },
    {
      src: "/data/11.jpg",
      desc: "White roses with teddy bear and CHENET",
      price: "$25.50",
      color: "#FFFFFF",
    },
    {
      src: "/data/14.jpg",
      desc: "White roses with teddy bear",
      price: "$12.00",
      color: "#FFFFFF",
    },
    {
      src: "/data/15.jpg",
      desc: "Pink and white roses",
      price: "$15.50",
      color: "#ffc0cb",
    },
    {
      src: "/data/16.jpg",
      desc: "White rose with candy",
      price: "$13.00",
      color: "#FFFFFF",
    },
    {
      src: "/data/17.jpg",
      desc: "Red roses",
      price: "$15.00",
      color: "#880808",
    },
    {
      src: "/data/18.jpg",
      desc: "Red roses with teddy bear",
      price: "$17.60",
      color: "#880808",
    },
    {
      src: "/data/19.jpg",
      desc: "Red roses",
      price: "$20.55",
      color: "#880808",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="" id="gallery">
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold mb-16 mt-8 lg:mb-32 md:mb-32 lg:mt-0 md:mt-0 text-center">
        Gallery
      </p>
      <div className="flex flex-row justify-center items-center min-h-[500px] mx-8 mb-8 mt-16 relative">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-[-30] top-9 lg:left-45 lg:top-1/4 lg:-translate-y-1/2 flex items-center mt-96 md:mt-32 lg:mt-32 mr-4 lg:mr-12 md:mr-12 justify-center w-10 h-10 border rounded-full hover cursor-pointer hover:bg-[#fecdcd] transition"
        >
          <svg width="14" height="24" viewBox="0 0 14 24">
            <polyline
              fill="none"
              stroke="#000"
              strokeWidth="1.4"
              points="12.775,1 1.225,12 12.775,23"
            />
          </svg>
        </button>
        {products.length > 0 && <Photo {...products[currentIndex]} />}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-[-30] top-9 lg:right-45 lg:top-1/4 lg:-translate-y-1/2 flex items-center mt-96 md:mt-32 lg:mt-32 ml-4 lg:ml-12 md:ml-12 justify-center w-10 h-10 border rounded-full hover:bg-[#fecdcd]  cursor-pointer transition"
        >
          <svg width="14" height="24" viewBox="0 0 14 24">
            <polyline
              fill="none"
              stroke="#000"
              strokeWidth="1.4"
              points="1.225,1 12.775,12 1.225,23"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
