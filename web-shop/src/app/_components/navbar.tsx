import React from "react";
type Props = {
  items: string[];
};
const Navbar = ({ items }: Props) => {
  const hrefs = ["", "", "/#gallery", "/#themost", "/#aboutus", "/#start"];
  return (
    <div className="flex flex-col fixed w-full z-50">
      <div className="bg-white">Free Shipping On Orders over 50$</div>
      <div className="display flex flex-row-reverse flex-wrap bg-(--foreground) shadow-xl md:px-16 lg:px-16">
        {items.map((item, i) => (
          <a
            key={i}
            className="px-4 md:p-4 lg:p-4 text-white text-[20px] hover:text-(--accent)"
            href={hrefs[i]}
          >
            {item}
          </a>
        ))}
      </div>
      {/* <img
        className="absolute lg:top-3 md:top-3 top-12 left-6 w-24 h-24 bg-transparent"
        src={"./data/rose.png"}
        alt="Rose"
      /> */}
    </div>
  );
};

export default Navbar;
