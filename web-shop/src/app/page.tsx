import Navbar from "./_components/navbar";
import { MostBuyProd } from "./_components/mostBuyProd";
import Start from "./_components/start";
export default function Home() {
  const navBarList = ["Contact", "Products", "About Us", "Home"];
  return (
    <div className="font-serif">
      <center>
        <div className="bg-white">Free Shipping On Orders over 50$</div>
        <Navbar items={navBarList} />
        <Start />
        <MostBuyProd />
      </center>
    </div>
  );
}
