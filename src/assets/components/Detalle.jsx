import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
import CreateItemBD from "./CreateItemBD";

function Detalle() {
    const { id } = useParams();
    const [data, setData] = useState({});  
    // seteo la base de datos
    const db = getFirestore();

     useEffect(() => {
    const itemRef = doc(db, "productos", id); // 🔹 Usar el id dinámico
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.data());
      } else {
        console.log("No existe el producto");
      }
    });
  }, [id]);

// useEffect(() => {
//     // hago la referencia de búsqueda
//     const itemRef = doc(db, 'producto', 'IfguQuG7s31wElLoPrqE')

//     //traigo el elemento
//     getDoc(itemRef).then(snapshot => {
//         console.log(snapshot);
//         console.log(snapshot.data());
//         setData(snapshot.data())
//     })
// }, [])

  return (
<div className="detalleDeProducto">
    <div>
        <img src={data.img} alt={data.nombre} width={300} />
     </div>
     <div>
        <h2>{data.nombre}</h2>
        <p>{data.descripcion}</p>
        <h3>{data.precio}</h3>
    </div>
</div>
  )
}


export default Detalle
