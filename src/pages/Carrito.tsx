import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

function Carrito() {
  return (
    <>
      <Navbar />
      <div className="h-[35px] bg-blue-900">
        <ul
          className="  flex -1
        pt-2
        font-bold
        justify-evenly
        items-center
        text-white
        "
        >
          <li>PINTURERÍA</li>
          <li>DECORACIÓN</li>
        </ul>
      </div>
      <div className="h-[1px] bg-white"></div>
      <div className="h-[35px] bg-red-700"></div>
      <Cart />
      <Footer />
    </>
  );
}

export default Carrito;
