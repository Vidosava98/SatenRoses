import Navbar from "./_components/navbar";
export default function Home() {
  const navBarList = ["Contact", "Products", "About Us", "Home"];
  return (
    <div>
      <center>
        <Navbar items={navBarList} />
      </center>
    </div>
  );
}
