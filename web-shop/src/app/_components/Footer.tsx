import React from "react";

function Footer() {
  const hrefs = ["/#start", "/#aboutus", "/#themost", "/#gallery"];
  const navBarList = [
    "Home",
    "About Us",
    "The Most Popular",
    "All Products"
  ];
  return (
    <div
      className="flex flex-col w-96 lg:w-full lg:flex-row md:flex-row mt-48 p-16 lg:p-8 md:p-8 bg-(--foreground) flex-wrap"
      id="contact"
    >
      <img
        className="absolute left-8 lg:left-24 md:left-24 w-24 h-24 transform translate-y-1/8"
        src={"./data/rose.png"}
        alt="Rose"
      />
      <div className="flex flex-col flex-wrap w-64 lg:ml-64 md:ml-64 text-left pl-32 mt-6">
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
      <div className="flex flex-col w-80 lg:ml-16 md:ml-16 mt-8">
        <p className="text-white">Send us Mail</p>
        <a href="mailto:arsic.vida@gmail.com">
          <img
            src="/icons/gmail.svg"
            alt="gmail"
            className="h-[2.80rem] w:[3.5rem] m-4 bg-white"
          />
        </a>
      </div>
      <div className="flex flex-col w-80 lg:ml-16 md:ml-16 mt-8">
        <p className="text-white">Follow us here</p>
        <a href="https://www.facebook.com/satenske.ruze.616102">
          <img
            src="/icons/face.svg"
            alt="gmail"
            className="h-[2.80rem] w:[3.5rem] m-4 bg-white"
          />
        </a>
        <a href="https://www.instagram.com/satenskeruze__nis/">
          <img
            src="/icons/instagram.svg"
            alt="gmail"
            className="h-[2.80rem] w:[3.5rem] m-4 bg-white"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
