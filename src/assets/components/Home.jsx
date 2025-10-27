import Carousel from "./Carousel"
import ItemListContainer from "./ItemListContainer"
import { Link } from "react-router-dom"


function Home() {
  return (
    <div>
      <div className="headerhome, imagen-degradado">
      <div>
        <h1>Cosmovisión en madera</h1>
        <p>Descubre la magia de los alebrijes de Oaxaca, donde cada pieza es una ventana a la riqueza cultural y artística de México. Tallados y pintados a mano, nuestros alebrijes cuentan historias de tradición, creatividad y simbolismo, fusionando la naturaleza, los sueños y la imaginación en cada detalle.</p>
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
        <div>
          <h1>Compromiso con Oaxaca</h1>
          <p>
            Parte de nuestras ganancias se destinan a apoyar talleres y
            proyectos comunitarios en Oaxaca, asegurando que esta tradición siga
            viva para las próximas generaciones.
          </p>
        </div>
        <img src="/n3.jpg" alt="Alebrije de Oaxaca" height={300} style={{ borderRadius: "16px"}} />
      </section>
    </div>
  )
}

export default Home
