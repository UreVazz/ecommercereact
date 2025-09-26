import { Link } from 'react-router-dom'

function Item({id, imagen, nombre, descripcion, precio}) {
  return (
    <div className='cardItem'>
      <Link to={`/detalle/${id}`}>
      <img className="imgproducto" src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      </Link>
    </div>
  )
}

export default Item
