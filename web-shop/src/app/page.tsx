import Navbar from "./_components/navbar";
import MostBuyProd from "./_components/mostBuyProd";
import Start from "./_components/start";
import AboutUs from "./_components/aboutUs";
export default function Home() {
  const navBarList = [
    "Contact",
    "All Products",
    "About Us",
    "The Most Popular",
    "Home",
  ];
  return (
    <div className="font-serif">
      <center>
        <div className="bg-white">Free Shipping On Orders over 50$</div>
        <Navbar items={navBarList} />
        <Start />
        <AboutUs />
        <MostBuyProd />
      </center>
    </div>
  );
}
