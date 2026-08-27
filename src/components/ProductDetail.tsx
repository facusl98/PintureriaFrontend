import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { type Producto } from "../types/Producto";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

function ProductDetail() {
  const { id } = useParams<{ id: string }>(); // Captura el ID de la URL
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
  console.log("ID:", id);
  console.log("API URL:", import.meta.env.VITE_API_URL);
    fetch(`${import.meta.env.VITE_API_URL}/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p className="text-center py-20 text-black">Cargando producto...</p>;
  if (!producto) return <p className="text-center py-20 text-black">Producto no encontrado.</p>;

  const context = useContext(CarritoContext); // 3. CONECTAR AL CONTEXTO GLOBAL
  if (!context) return null;
  const { agregarAlCarrito } = context;

  const manejarAgregarCarrito = () => {
    agregarAlCarrito(producto); // Guarda en el estado global de forma silenciosa
    setMostrarModal(true);      // Abre nuestro cartel estético
  };

  return (
    <div className="bg-white text-black min-h-screen py-12 px-6 md:px-24">
      {/* Botón Volver */}
      <Link to="/productos" className="text-blue-600 font-semibold hover:underline mb-8 block">
        ← Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen del Producto */}
        <div className="bg-gray-50 p-8 rounded-2xl flex justify-center">
          <img 
            className="max-h-96 w-auto object-contain" 
            src={`../${producto.imagenUrl}`} 
            alt={producto.nombre} 
          />
        </div>

        {/* Información y Botones */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {producto.marca.nombre}
          </span>
          <h1 className="text-3xl font-extrabold mt-2 mb-4">{producto.nombre}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-6">${producto.precio}</p>
          
          <div className="border-t border-b py-4 my-6">
            <p className="text-sm text-gray-600">
              Disponibilidad: <span className="font-bold text-green-600">{producto.stock} unidades en stock</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {producto.descripcion}
            </p>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={manejarAgregarCarrito}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-xl transition"
            >
              Agregar al Carrito
            </button>
            <button 
              onClick={() => alert("Procediendo a la compra rápida...")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center border animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-black mb-2">¡Producto agregado!</h3>
            <p className="text-sm text-gray-500 mb-6">
              Agregaste <span className="font-semibold text-gray-800">"{producto.nombre}"</span> a tu carrito de compras con éxito.
            </p>

            {/* BOTONES DE ACCIÓN */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/productos"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-xl transition"
              >
                Seguir explorando
              </Link>
              <Link
                to="/carrito" // Redirige a la pantalla del carrito que creamos antes
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition text-center block"
              >
                Ir al carrito
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
