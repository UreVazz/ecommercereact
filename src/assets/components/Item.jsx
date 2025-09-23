
function Item({nombre, descripcion, precio}) {
  return (
    <div className='cardItem'>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  )
}

export default Item
