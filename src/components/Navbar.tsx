import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import logo from "../assets/logo_pintu.jpeg";
import { CarritoContext } from "../context/CarritoContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(CarritoContext);

  // Si el contexto no cargó, mostramos un diseño básico seguro
  if (!context) return null;

  // Extraemos la variable que cuenta todo el carrito en vivo
  const { totalElementos } = context;

  return (
    <nav
      className="
      bg-white
      text-black
      px-2
    "
    >
      <div
        className="
        flex
        items-center
        justify-between
      "
      >
        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="w-20" />
          <h1
            className="
            text-2xl
            font-black
            italic
          "
          >
            PINTURERÍA DEL SUR
          </h1>
        </div>

        {/* MENU DESKTOP */}

        <ul
          className="
          hidden
          md:flex
          flex-1
          justify-evenly
          text-lg
          ml-10
          italic
        "
        >
          <li>
            <Link to="/" className="hover:text-red-700 transition-colors">
              INICIO
            </Link>
          </li>

          <li>
            <Link
              to="/productos"
              className="hover:text-red-700 transition-colors"
            >
              PRODUCTOS
            </Link>
          </li>

          <li>
            <Link
              to="/promociones"
              className="hover:text-red-700 transition-colors"
            >
              PROMOCIONES
            </Link>
          </li>

          <li>
            <Link
              to="/contacto"
              className="hover:text-red-700 transition-colors"
            >
              CONTACTO
            </Link>
          </li>
          <li>
            <Link
              to="/carrito"
              className="hover:text-red-700 transition-colors"
            >
              <div className="relative">
                {/* Tu Ícono de Carrito */}
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                {/* AJUSTADO: El número ahora se posiciona respecto al SVG, no al botón entero */}
                {totalElementos > 0 && (
                  <span
                    className="
                      absolute 
                      -top-1.5 
                      -right-1.5 
                      bg-red-500 
                      text-white 
                      text-[10px] /* Achicamos un pelín el texto para que entre mejor */
                      font-bold 
                      rounded-full 
                      h-4 /* Círculo un poquito más compacto */
                      w-4 
                      flex 
                      items-center 
                      justify-center
                    "
                  >
                    {totalElementos}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>

        {/* BOTON HAMBURGUESA */}

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MENU MOBILE */}

      <ul
        className={`
        flex
        flex-col
        items-center
        text-lg
        font-semibold
        italic
        md:hidden
        overflow-hidden
        transition-all
        duration-400

        ${isOpen ? "max-h-96 opacity-100 py-6 gap-6" : "max-h-0 opacity-0"}
      `}
      >
        <li className="w-full border">
          <Link className="flex justify-center" to="/">
            INICIO
          </Link>
        </li>

        <li className="w-full border">
          <Link className="flex justify-center" to="/productos">
            PRODUCTOS
          </Link>
        </li>

        <li className="w-full border">
          <Link className="flex justify-center" to="/promociones">
            PROMOCIONES
          </Link>
        </li>

        <li className="w-full border">
          <Link className="flex justify-center" to="/contacto">
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
