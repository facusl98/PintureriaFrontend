import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(CarritoContext);
  if (!context) return null;
  const {
    carrito,
    vaciarCarrito,
    eliminarDelCarrito,
    incrementarCantidad,
    decrementarCantidad,
  } = context;

  // Calculamos el precio total acumulado de la compra
  const precioTotal = carrito.reduce(
    (total, item) => total + item.producto.precio * item.cantidad, // Asegúrate si tu interfaz usa .precio o .price
    0,
  );

  return (
    <div className="bg-[#ebebeb] text-black min-h-screen py-12 px-6 md:px-24">
      <Link
        to="/productos"
        className="text-blue-600 font-semibold hover:underline mb-8 block"
      >
        ← Volver a la pinturería
      </Link>

      <h1 className="text-3xl font-extrabold mb-8">Tu Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
          <p className="text-gray-500 text-lg">Tu carrito está vacío.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LISTA DE PRODUCTOS */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {carrito.map((item) => (
              <div
                key={item.producto.id}
                className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="h-16 w-16 object-contain"
                    src={item.producto.imagenUrl}
                    alt={item.producto.nombre}
                  />
                  <div>
                    <h2 className="font-bold text-sm">
                      {item.producto.nombre}
                    </h2>
                    <p className="text-xs text-gray-500">
                      Cantidad: {item.cantidad}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2 bg-gray-50 border w-fit rounded-lg px-2 py-1">
                  <button
                    onClick={() => decrementarCantidad(item.producto.id)}
                    disabled={item.cantidad === 1}
                    className={`font-bold px-1 transition-colors ${
                      item.cantidad === 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    −
                  </button>
                  <span className="font-semibold text-sm min-w-[16px] text-center">
                    {item.cantidad}
                  </span>
                  <button
                    onClick={() => incrementarCantidad(item.producto.id)}
                    className="text-gray-600 hover:text-black font-bold px-1 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => eliminarDelCarrito(item.producto.id)}
                  className="text-red-500 hover:text-red-700 text-xs font-semibold mt-2 block transition-colors"
                >
                  Eliminar producto 🗑️
                </button>
                <p className="font-bold text-blue-600">
                  ${item.producto.precio * item.cantidad}
                </p>
              </div>
            ))}

            <button
              onClick={vaciarCarrito}
              className="text-red-500 hover:text-red-700 font-semibold text-sm self-start mt-2"
            >
              Vaciar Carrito
            </button>
          </div>
          /* RESUMEN DE COMPRA */
          <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Resumen</h2>
            <div className="flex justify-between border-b pb-4 mb-4">
              <p className="text-gray-600">Total estimado:</p>
              <p className="text-xl font-bold text-green-600">${precioTotal}</p>
            </div>
            <button
              onClick={() => alert("¡Gracias por tu compra simulada!")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
            >
              Iniciar Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
