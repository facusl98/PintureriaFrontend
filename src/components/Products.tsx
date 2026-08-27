import { useEffect, useState } from "react";
import type { Producto } from "../types/Producto";
import { Link } from "react-router-dom";
//import { obtenerProductos } from "../services/productoService";

function Products() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState(""); // Estado para el texto del input

  useEffect(() => {
    // 1. Creamos el temporizador (Debounce) de 300ms
    const timer = setTimeout(() => {
      
      // Armamos la URL dinámica llamando a tu backend de Spring Boot
      let url = `${import.meta.env.VITE_API_URL}/productos`;
      if (busqueda.trim() !== "") {
        url += `?nombre=${encodeURIComponent(busqueda)}`;
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) => setProductos(data))
        .catch((err) => console.error(err));

    }, 300);
    // 2. FUNCIÓN DE LIMPIEZA (Crucial): Si el usuario escribe otra tecla, 
    // borra el temporizador anterior y arranca el conteo de nuevo.
    return () => clearTimeout(timer);

  }, [busqueda]);

  return (
    <section className="bg-[#ebebeb] text-black py-10 px-8">
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar pinturas, pinceles..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-gray-50"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} // Al escribir, cambia el estado
        />
  
      </div>
      <div
        className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-12
      justify-items-center
    "
      >
        {productos.map((producto) => (
          <Link 
    to={`/productos/${producto.id}`} 
    key={producto.id}
            className="
          flex
          flex-col
          justify-between
          items-center
          text-center
          bg-white
          rounded-lg
          p-4
          cursor-pointer
          w-full
          h-full
          min-h-[280px]
          shadow-sm
          hover:shadow-md
          hover:text-blue-600
          transition-all
          duration-300
        "
        
          >
            {/* Contenedor fijo para la imagen */}
            <div className="h-28 flex items-center justify-center w-full mb-3">
              <img
                className="h-full w-auto object-contain"
                src={producto.imagenUrl}
                alt={producto.nombre}
              />
            </div>

            {/* Título del producto */}
            <h2 className="text-sm text-xl line-clamp-2 mb-2 flex-grow flex items-center justify-center">
              {producto.nombre}
            </h2>

            {/* Precio */}
            <p className="font-bold text-xl text-black">${producto.precio}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
