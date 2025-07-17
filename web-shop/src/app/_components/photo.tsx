import React, { useState } from "react";
type Props = { src: string; desc: string; price: string; color: string };
function Photo({ src, desc, price }: Props) {
  const [buy, setBuy] = useState(1);
  return (
    <div className="flex flex-col lg:flex-row md:flex-row">
      <div className="flex flex-col text-left pr-16 lg:mt-24">
        <p className="text-2xl md:text-4xl lg:text-4xl ">{desc}</p>
        <p className="text-2xl md:text-4xl lg:text-4xl pb-8">{price}</p>
        <div className="flex flex-row">
          <button className="bg-(--accent) hover rounded-3xl mr-8 px-4 py-3 cursor-pointer">
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
        src={src}
        alt="Not found"
        className="shadow-xl p-8 md:p-0 lg:p-0 w-96 h-96 rounded-xl"
      />
    </div>
  );
}

export default Photo;
