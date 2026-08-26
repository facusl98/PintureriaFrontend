export interface Marca {
  id: number;
  nombre: string;
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  descripcion: string;
  imagenUrl: string;
  marca: Marca; // Relación con la interfaz de arriba
}