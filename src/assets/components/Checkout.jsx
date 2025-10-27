import { useContext, useState } from "react";
import { CartContext } from ".assets/components/Cartcontext";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [comprado, setComprado] = useState(false);

  const finalizarCompra = () => {
    clearCart();
    setComprado(true);
  };

  if (comprado)
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>¡Compra realizada con éxito!</h2>
        <p>Gracias por tu compra.</p>
      </div>
    );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Resumen del pedido</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.nombre} x {item.quantity}
          </span>{" "}
          - ${item.precio * item.quantity}
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={finalizarCompra}>Finalizar compra</button>
    </div>
  );
}

export default Checkout;
