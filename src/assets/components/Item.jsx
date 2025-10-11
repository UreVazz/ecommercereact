import { Link } from 'react-router-dom'
import ThemeContext, {tema} from './context'
import { useContext } from 'react';

function Item({id, imagen, nombre, descripcion, precio}) {

   const {temaActual} = useContext(ThemeContext);


  return (
    <div className='cardItem' style={{background:temaActual.background, color:temaActual.font, border:temaActual.border}}>
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
