import React from "react";
type Props = { src: string; desc: string; price: string };

function Product({ src, desc, price }: Props) {
  return (
    <div className="flex row justify-center items-center gap-8 md:m-16 w-96">
      <img
        src={src}
        alt="Most Buying 1"
        className="w-64 md:w-32 lg:w-80 h-32 md:h-32 lg:h-80 md:my-16 my-4"
      />
      <div>
        <p className="text-black text-2xl md:text-xl text-center">{desc}</p>
        <p className="text-black text-2xl md:text-xl font-semibold text-center">
          {price}
        </p>
      </div>
    </div>
  );
}

export default Product;
