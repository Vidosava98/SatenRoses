import React from "react";
type Props = {
  items: string[];
};
const Navbar = ({ items }: Props) => {
  return (
    <div>
      <div className="display flex flex-row-reverse flex-wrap bg-(--foreground) shadow-xl w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-4 md:p-8 lg:p-8 font-bold text-white text-[20px]"
          >
            {item}
          </div>
        ))}
      </div>
      <img
        className="absolute lg:top-6 md:top-6 top-12 left-6 w-24 h-24 bg-transparent"
        src={"./data/rose.png"}
        alt="Rose"
      />
    </div>
  );
};

export default Navbar;
