import React from "react";
import Product from "./product";

function MostBuyProd() {
  const product1: { src: string; desc: string; price: string } = {
    src: "./data/1.png",
    desc: "Red roses",
    price: "$10",
  };
  const product2: { src: string; desc: string; price: string } = {
    src: "./data/1.png",
    desc: "Red roses",
    price: "$10",
  };
  //Create an API for data, MongoDB
  const products = [product1, product2];
  return (
    <div className="p-16 md:m-32 m-4">
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold text-center">
        The Most Popular Products
      </p>
      <div className="flex flex-wrap justify-center text-center">
        {products.map((el, index) => (
          <Product {...el} key={index} />
        ))}
      </div>
    </div>
  );
}
export default MostBuyProd;
