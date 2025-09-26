import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className='error404'>
        <img src="/error404.jpg" alt="error 404" height={250}/>
      <h1>¡Ups! no pudimos encontrar la página que buscas</h1>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  )
}

export default Error
