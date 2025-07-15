import React from "react";

export const MostBuyProd = () => {
  return (
    <div className="my-16 ">
      <div className="flex row justify-center items-center gap-8">
        <img
          src="./data/1.png"
          alt="Most Buying 1"
          className="w-32 md:w-32 lg:w-80 h-32 md:h-32 lg:h-80 my-16"
        />
        <div>
          <p>Red roses</p>
          <p>Price $10</p>
        </div>
      </div>
    </div>
  );
};
