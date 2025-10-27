import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("carrito");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalQuantity, setTotalQuantity] = useState(() => {
    const savedCart = localStorage.getItem("carrito");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      return parsed.reduce((acc, item) => acc + item.cantidad, 0);
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
    const total = cart.reduce((acc, item) => acc + item.cantidad, 0);
    setTotalQuantity(total);
  }, [cart]);

  const agregarAlCarrito = (producto) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === producto.id);
      if (existing) {
        toast.info(`Se agregó otra unidad de ${producto.nombre}`, { position: "top-right" });
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        toast.success(`${producto.nombre} agregado al carrito`, { position: "top-right" });
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const reducirDelCarrito = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarDelCarrito = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item) toast.error(`${item.nombre} eliminado del carrito`, { position: "top-right" });
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        agregarAlCarrito,
        reducirDelCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
