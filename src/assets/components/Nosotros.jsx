

function Nosotros() {
  return (
    <div className="nosotros-container">
       <header className="nosotros-header">
        <div>
          <h1>Sobre Nosotros</h1>
          <p>
            Somos una tienda dedicada a preservar y compartir la tradición de los
            alebrijes, arte emblemático de Oaxaca, México.
          </p>
        </div>
        <img src="/nosotros.jpg" alt="Alebrije de Oaxaca" height={300} style={{ borderRadius: "16px"}} />
      </header>


      <section className="historia-seccion">
        <h1>Nuestra Historia</h1>
        <p>
          Nuestra pasión nació hace más de una década, viajando por los pueblos
          de Oaxaca, aprendiendo de artesanos que han pasado su oficio de
          generación en generación. Los alebrijes son más que figuras de madera:
          son sueños, tradición y cultura. En cada pieza buscamos mantener viva
          esa herencia.
        </p>
      </section>




      <section className="compromiso-seccion">
        <h1>Compromiso con Oaxaca</h1>
        <p>
          Parte de nuestras ganancias se destinan a apoyar talleres y
          proyectos comunitarios en Oaxaca, asegurando que esta tradición siga
          viva para las próximas generaciones.
        </p>
      </section>

      <footer className="nosotros-footer">
        <p>
          Únete a nosotros para celebrar y preservar la riqueza cultural de
          México a través de nuestros alebrijes.
        </p>
      </footer>
    </div>
  )
}

export default Nosotros
