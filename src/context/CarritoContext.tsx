import { createContext, useState, useEffect, type ReactNode } from "react";
import { type Producto } from "../types/Producto"; // Reemplaza por tu ruta real

// Definimos qué estructura tendrá un producto dentro del carrito
export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

// Definimos qué funciones y estados ofrecerá el carrito a toda la app
interface CarritoContextType {
  carrito: ItemCarrito[];
  agregarAlCarrito: (producto: Producto) => void;
  eliminarDelCarrito: (productoId: number) => void;
  incrementarCantidad: (productoId: number) => void;
  decrementarCantidad: (productoId: number) => void;
  vaciarCarrito: () => void;
  totalElementos: number;
}

export const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<ItemCarrito[]>(() => {
    const carritoGuardado = localStorage.getItem("carrito_pintureria");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });


  useEffect(() => {
    localStorage.setItem("carrito_pintureria", JSON.stringify(carrito));
  }, [carrito]);

  

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((carritoActual) => {
      // Verificamos si el producto ya estaba en el carrito
      const existe = carritoActual.find((item) => item.producto.id === producto.id);

      if (existe) {
        // Si ya existe, le sumamos 1 a la cantidad
        return carritoActual.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      // Si es nuevo, lo agregamos con cantidad 1
      return [...carritoActual, { producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (productoId: number) => {
    setCarrito((carritoActual) => 
      carritoActual.filter((item) => item.producto.id !== productoId)
    );
  };

  const incrementarCantidad = (productoId: number) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.producto.id === productoId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const decrementarCantidad = (productoId: number) => {
    setCarrito((carritoActual) => {
      return carritoActual
        .map((item) => {
          if (item.producto.id === productoId) {
            if(item.cantidad > 1){
            return { ...item, cantidad: item.cantidad - 1 };
            }
          }
          return item;
        })
    });
  };

  const vaciarCarrito = () => setCarrito([]);
  const totalElementos = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
        totalElementos,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}