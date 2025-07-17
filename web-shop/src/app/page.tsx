"use client";
import Navbar from "./_components/navbar";
import MostBuyProd from "./_components/mostBuyProd";
import Start from "./_components/start";
import AboutUs from "./_components/aboutUs";
import Gallery from "./_components/gallery";
export default function Home() {
  const navBarList = [
    "Buy",
    "Contact",
    "All Products",
    "About Us",
    "The Most Popular",
    "Home",
  ];
  return (
    <div className="font-serif">
      <center>
        <Navbar items={navBarList} />
        <Start />
        <AboutUs />
        <MostBuyProd />
        <Gallery />
        <div className="my-64"></div>
      </center>
    </div>
  );
}
