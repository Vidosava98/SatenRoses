"use client";
import Navbar from "./_components/navbar";
import MostBuyProd from "./_components/mostBuyProd";
import Start from "./_components/start";
import AboutUs from "./_components/aboutUs";
import Gallery from "./_components/gallery";
import Footer from "./_components/Footer";
export default function Home() {
  const navBarList = [
    "Contact",
    "All Products",
    "The Most Popular",
    "About Us",
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
        <Footer />
      </center>
    </div>
  );
}
