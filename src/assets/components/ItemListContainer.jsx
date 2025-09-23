import { useEffect, useState } from "react";
import "./style.css";
import productos from "./productos.json";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos)
      }, 1000)
    })
    
    fetchProductos.then((data) => {
      setItems(data)
    })
  }, [])

  return (
    <div className="mainContainerDeListadoProductos">
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
