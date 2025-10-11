import { useState } from "react";

function renderCondicional() {

    const [mostrar, setMostrar]=useState(false);

    const handleClick =()=>{
        setMostrar(!mostrar)
    }
    const renderConIf = () => {
        if(mostrar){
            return <h2>Este texto de muestra si el estado es true</h2>
        }
        return <h2>
            Este texto se muestra si el estado es false
        </h2>
        }


  return (
    <div>
        <h1>Renderizando Condicionalmente</h1>
        <button onClick={handleClick}>{mostrar?"Ocultar":"Mostrar"}</button>
        {renderConIf()}
    </div>
  )
}

export default renderCondicional
