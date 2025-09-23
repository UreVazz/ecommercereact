import { useState } from 'react';
import Item from './Item';

const categories = {
    Peq: "Pequeño",
    Med: "Mediano",
    Gra: "Grande"
};

function ItemList({ items }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredItems = selectedCategory ?
     items.filter(item => item.categoria === selectedCategory) : items;


  return (
    <div className='containerCategoriesFilter'>
        <div>
            <button onClick={()=> setSelectedCategory("")}> Todos</button>
            <button onClick={()=> setSelectedCategory(categories.Peq)}> Pequeño</button>
            <button onClick={()=> setSelectedCategory(categories.Med)}> Mediano</button>
            <button onClick={()=> setSelectedCategory(categories.Gra)}> Grande</button>
        </div>
        <div className='listadoDeCards'>
        {filteredItems.map(item => (
            <Item 
                key={item.id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                precio={item.precio}
                imagen={item.imagen}
            />
        ))}
      </div>
    </div>
  );
}

export default ItemList
