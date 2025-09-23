
function Item({imagen, nombre, descripcion, precio}) {
  return (
    <div className='cardItem'>
      <img className="imgproducto" src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  )
}

export default Item
