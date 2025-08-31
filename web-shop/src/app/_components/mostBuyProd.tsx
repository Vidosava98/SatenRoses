import React from "react";
import Product from "./product";

function MostBuyProd() {
  const product1: { src: string; desc: string; price: string } = {
    src: "./data/1.png",
    desc: "Red roses",
    price: "$22.00",
  };
  const product2: { src: string; desc: string; price: string } = {
    src: "./data/2.png",
    desc: "Pink roses",
    price: "$27.90",
  };
    const product3: { src: string; desc: string; price: string } = {
    src: "./data/3.png",
    desc: "Red roses",
    price: "$22.00",
  };
  const product4: { src: string; desc: string; price: string } = {
    src: "./data/4.png",
    desc: "Pink roses",
    price: "$27.90",
  };
    const product5: { src: string; desc: string; price: string } = {
    src: "./data/6.png",
    desc: "Pink roses",
    price: "$27.90",
  };
  //Create an API for data, MongoDB
  const products = [product1, product2, product3, product4, product5];
  return (
    <div className="lg:mt-32 justify-center" id="themost">
      <p className="text-black text-2xl md:text-4xl lg:text-4xl font-semibold text-center mt-16 mb-8 lg:mt-32">
        The Most Popular Products
      </p>
      <div className="flex flex-wrap justify-center text-center rounded-xl p-4 lg:p-8 lg:gap-16 gap-8 ">
        {products.map((el, index) => (
          <Product {...el} key={index} />
        ))}
      </div>
    </div>
  );
}
export default MostBuyProd;
