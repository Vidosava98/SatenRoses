import React from "react";
import Product from "./product";

function MostBuyProd() {
  const product1: { src: string; desc: string; price: string } = {
    src: "./data/1.png",
    desc: "Red roses",
    price: "$10",
  };
  const product2: { src: string; desc: string; price: string } = {
    src: "./data/2.png",
    desc: "Red roses",
    price: "$10",
  };
  //Create an API for data, MongoDB
  const products = [product1, product2];
  return (
    <div className="md:m-24 lg:m-24 m-8" id="themost">
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold text-center my-16 lg:my-8 md:my-8">
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
