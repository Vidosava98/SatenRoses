"use client";
import React from "react";
import { useState } from "react";
import Photo from "./photo";

function Gallery() {
  const product1: { src: string; desc: string; price: string; color: string } =
    {
      src: "./data/1.png",
      desc: "Red roses",
      price: "$10",
      color: "#880808",
    };
  const product2: { src: string; desc: string; price: string; color?: string } =
    {
      src: "./data/1.png",
      desc: "Red roses",
      price: "$10",
      color: "#880808",
    };
  //Create an API for data, MongoDB
  const products = [product1, product2];
  return (
    <div className="" id="gallery">
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold mb-16 mt-8 lg:mb-32 md:mb-32 lg:mt-0 md:mt-0 text-center">
        Gallery
      </p>
      <div className="flex flex-row justify-center mx-8 mb-8 mt-16">
        <button
          type="button"
          aria-label="Previous slide"
          className="flex items-center mt-96 md:mt-32 lg:mt-32 mr-4 lg:mr-12 md:mr-12 justify-center w-10 h-10 border rounded-full hover cursor-pointer hover:bg-[#fecdcd] transition"
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
        <Photo {...product1} />
        <button
          type="button"
          aria-label="Next slide"
          className="flex items-center mt-96 md:mt-32 lg:mt-32 ml-4 lg:ml-12 md:ml-12 justify-center w-10 h-10 border rounded-full hover:bg-[#fecdcd]  cursor-pointer transition"
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
