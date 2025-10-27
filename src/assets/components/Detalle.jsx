import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "./Cartcontext";

function Detalle() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const db = getFirestore();
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const itemRef = doc(db, "productos", id);
        const snapshot = await getDoc(itemRef);
        if (snapshot.exists()) {
          setData(snapshot.data());
        } else {
          setData(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducto();
  }, [id, db]);

  if (!data) return <p>Producto no encontrado</p>;

  return (
    <div className="detalleDeProducto" style={{ display: "flex", gap: "2rem" }}>
      <div className="detalle-imagen">
        <img src={data.imagen} alt={data.nombre} width={300} />
      </div>
      <div className="detalle-info">
        <h2>{data.nombre}</h2>
        <p>{data.descripcion}</p>
        <h3>${data.precio}</h3>
        <button onClick={() => agregarAlCarrito({ ...data, id })}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Detalle;
