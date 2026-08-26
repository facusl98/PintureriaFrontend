import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Promociones from "../pages/Promociones";
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";
import { CarritoProvider } from "../context/CarritoContext";
import Carrito from "../pages/Carrito"

function AppRouter() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contacto" element={<Contacto />} />

          <Route path="/promociones" element={<Promociones />} />

          <Route path="/productos" element={<Productos />} />

          <Route path="/productos/:id" element={<DetalleProducto />} />

          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default AppRouter;
