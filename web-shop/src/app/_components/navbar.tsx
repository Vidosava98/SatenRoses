import React from "react";
type Props = {
  items: string[];
};
const Navbar = ({ items }: Props) => {
  return (
    <div className="display flex flex-row-reverse bg-(--primary) shadow-xl">
      {items.map((item, i) => (
        <div key={i} className="p-8 font-bold text-white text-[20px]">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
