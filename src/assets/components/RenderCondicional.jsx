import { useState } from "react";

function renderCondicional() {

    const [mostrar, setMostrar]=useState(false);

    const handleClick =()=>{
        setMostrar(!mostrar)
    }
    const renderConIf = () => {
        if(mostrar){
            return <h2>Activar Dark Theme</h2>
        }
        return <h2>Activar Light Theme</h2>
        }


  return (
    <div>
        <button onClick={handleClick}>{mostrar?"Ocultar":"Mostrar"}</button>
        {renderConIf()}
    </div>
  )
}

export default renderCondicional
