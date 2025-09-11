import ItemListContainer from "./ItemListContainer";
import Img1 from "/src/assets/bienvenida.png"

function Body() {
  return (
    <div className="main">
        <img src={Img1} alt="Imagen bienvenida" className="bienvenidaimg"/>
      <ItemListContainer />
    </div>
  )
}

export default Body
