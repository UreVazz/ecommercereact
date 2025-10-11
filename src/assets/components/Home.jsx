import Carousel from "./Carousel"
import ItemListContainer from "./ItemListContainer"
import { Link } from "react-router-dom"


function Home() {
  return (
    <div>
      <div className="headerhome, imagen-degradado">
      <h1>Cosmovisión en madera</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus, accusamus minima quibusdam nostrum, natus labore quidem dolore, perspiciatis obcaecati odit ex cupiditate nobis quos in? Adipisci obcaecati officia autem.</p>
        <Link to="/nosotros">
        <button>
          Saber más
        </button>
            </Link>
      </div>
      </div>
      <div className="h-s-destacados">
      <h1>Productos destacados</h1>
      <Carousel />
        <Link to="/productos">
      <button>
        Ver todos los productos
      </button>
    </Link>
      </div>
      <section className="compromiso-seccion">
        <h1>Compromiso con Oaxaca</h1>
        <p>
          Parte de nuestras ganancias se destinan a apoyar talleres y
          proyectos comunitarios en Oaxaca, asegurando que esta tradición siga
          viva para las próximas generaciones.
        </p>
      </section>
    </div>
  )
}

export default Home
