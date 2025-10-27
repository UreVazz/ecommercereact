import { useContext } from "react";
import { CartContext } from "./Cartcontext";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

function Carrito() {
  const {
    cart,
    agregarAlCarrito,
    reducirDelCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (cart.length === 0) {
    return <div className="emptycarrito" style={{ textAlign: "center" }}>
      <h2>Tu carrito está vacío 🛒</h2>
      <Link to="/productos">
        <button style={{ marginBottom: "3rem" }}>Ver productos</button>
      </Link>
    </div>
  }

  const finalizarCompra = () => {
    Swal.fire({
      title: "Compra finalizada",
      text: "¡Gracias por tu pedido! 🎉",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    vaciarCarrito();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div className="wraptotal">
        <h3>Total: ${total}</h3>
        <div className="btncompra">
          <button onClick={vaciarCarrito} style={{ marginRight: "1rem" }}>
            Vaciar carrito
          </button>
          <button onClick={finalizarCompra}>
            Finalizar compra
          </button>
        </div>
      </div>
      <hr />
      {cart.map((item) => (
        <div key={item.id}>
        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <img src={item.imagen} alt={item.nombre} width={100} />
          <div style={{ flex: 1 }}>
            <h3>{item.nombre}</h3>
            <p>Precio unitario: ${item.precio}</p>
            <div className="agregar-reducir">
            <button onClick={() => reducirDelCarrito(item.id)}>-</button>
            <p>{item.cantidad}</p>
            <button onClick={() => agregarAlCarrito(item)}>+</button>
            </div>
          </div>
          <div>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        </div>
        <hr />
        </div>
      ))}
    </div>
  );

}

export default Carrito;
