"use client";
import React from "react";
import { useState } from "react";

function Gallery() {
  const product1: { src: string; desc: string; price: string; color: string } =
    {
      src: "./data/1.png",
      desc: "Red roses",
      price: "$10",
      color: "red",
    };
  const product2: { src: string; desc: string; price: string; color?: string } =
    {
      src: "./data/1.png",
      desc: "Red roses",
      price: "$10",
      color: "red",
    };
  const [buy, setBuy] = useState(1);
  //Create an API for data, MongoDB
  const products = [product1, product2];
  return (
    <div className="">
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold mb-16 text-center">
        Gallery
      </p>
      <div className="flex flex-col lg:flex-row justify-center m-8">
        <button
          type="button"
          aria-label="Previous slide"
          className="flex items-center mt-32 mr-8 justify-center w-10 h-10 border rounded-full hover hover:bg-gray-100 transition"
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
        <div className="flex flex-col text-left pr-16 lg:mt-24">
          <p className="text-2xl md:text-4xl lg:text-4xl ">{product1.desc}</p>
          <p className="text-2xl md:text-4xl lg:text-4xl pb-8">
            {product1.price}
          </p>
          <div className="flex flex-row">
            <button className="bg-green-500 hover rounded-3xl mr-8 px-4 py-3">
              Add to buy
            </button>
            <input
              type="number"
              className="border-none w-16 text-center shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)]"
              placeholder="More"
              value={buy}
              onChange={(e) => setBuy(Number(e.target.value))}
            />
          </div>
        </div>
        <img
          src={product1.src}
          alt="Not found"
          className="shadow-xl p-8 md:p-0 lg:p-0 w-96 h-96"
        />
      </div>
    </div>
  );
}

export default Gallery;
