import React from "react";

function Footer() {
  const hrefs = [
    "/#start",
    "/#aboutus",
    "/#themost",
    "/#gallery",
    "/#contact",
    "",
  ];
  const navBarList = [
    "Home",
    "About Us",
    "The Most Popular",
    "All Products",
    "Contact",
    "Buy",
  ];
  return (
    <div
      className="flex lg:flex-row md:flex-row flex-col h-64 mt-48 p-8 bg-(--foreground) flex-wrap"
      id="contact"
    >
      <img
        className="absolute left-24 w-24 h-24 transform translate-y-1/2"
        src={"./data/rose.png"}
        alt="Rose"
      />
      <div className="flex flex-col flex-wrap w-80 lg:ml-64 md:ml-64 text-left pl-32">
        {navBarList.map((item, i) => (
          <a
            key={i}
            className="px-4 md:p-1 lg:p-1 text-white text-[16px] hover:text-(--accent)"
            href={hrefs[i]}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex flex-col w-80 lg:ml-16 md:ml-16">
        <p className="text-white">Send me Mail</p>
        <a href="mailto:arsic.vida@gmail.com">
          <img
            src="/gmail.svg"
            alt="gmail"
            className="h-[2.80rem] w:[3.5rem] m-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
