import React from "react";
type Props = { src: string; desc: string; price: string };

function Product({ src, desc, price }: Props) {
  return (
    <div className="flex row justify-center items-center gap-8 w-96">
      <img
        src={src}
        alt="Most Buying"
        className="min-w-42 max-h-42 lg:w-64 lg:h-74 lg:max-h-74 rounded-xl "
      />
      <div>
        <p className="text-black text-2xl md:text-xl text-center">{desc}</p>
        <p className="text-black text-2xl md:text-xl font-semibold text-center bg-amber-50">
          {price}
        </p>
      </div>
    </div>
  );
}

export default Product;
