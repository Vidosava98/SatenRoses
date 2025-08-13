import React, { useEffect, useState } from "react";
type Props = { src: string; desc: string; price: string; color: string };
function Photo({ src, desc, price, color }: Props) {
  const [buy, setBuy] = useState(1);
  const [colorRose, setColorRose] = useState(color);
  useEffect(() => {
    setColorRose(color);
  }, [color]);
  return (
    <div className="flex flex-col items-center justify-centermin-h-[400px] lg:flex-row md:flex-row">
      <div className="flex flex-col text-left lg:pr-16 md:pr-16 pr-1 lg:mt-20">
        <p className="text-2xl md:text-4xl lg:text-4xl min-w-64 max-w-64 min-h-16 max-h-16 lg:min-h-28 lg:max-h-28">
          {desc}
        </p>
        <p className="text-2xl md:text-4xl lg:text-4xl pb-8">{price}</p>
        <p className="">
          {/* <label>Pick color</label> */}
          <input
            type="color"
            value={colorRose}
            onChange={(e) => setColorRose(e.target.value)}
            className="h-10 w-10 rounded border-none mb-8"
          ></input>
        </p>
        <div className="flex flex-row">
          <button className="bg-(--accent) hover rounded-3xl mr-8 lg:p-4 md:p-4 p-2 cursor-pointer">
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
        className="py-8 px-4 md:p-0 lg:p-0 w-[400px] h-[400px] object-fill rounded-xl"
      />
    </div>
  );
}

export default Photo;
