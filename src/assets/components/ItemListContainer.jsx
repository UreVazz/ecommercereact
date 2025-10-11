import { useEffect, useState } from "react";
import "./style.css";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const refItems = collection(db, "productos");

    getDocs(refItems).then((snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(lista);
    });
  }, []);

  return (
    <div className="mainContainerDeListadoProductos">
      <ItemList items={items} /> 
    </div>
  );
}

export default ItemListContainer;





  //     setTimeout(() => {
  //       resolve(productos)
  //     }, 2000)
  //   })
    
  //   fetchProductos.then((data) => {
  //     setItems(data)
  //   })
  // }, [])

