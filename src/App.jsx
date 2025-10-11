import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './assets/components/Layout'
import Home from './assets/components/Home'
import Nosotros from './assets/components/Nosotros' 
import Productos from './assets/components/Productos'
import Detalle from './assets/components/Detalle'
import Error from './assets/components/Error';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
import ThemeContext, {tema} from './assets/components/context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import './App.css'

function App() {
  const [temaActual, setTemaActual] = useState(tema.claro);
  const handleTema = () => {
    temaActual === tema.oscuro?
    setTemaActual(tema.claro):
    setTemaActual(tema.oscuro)
  }

  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const db = getFirestore();

  return ( 
    <>
    <ThemeContext.Provider value={{temaActual, handleTema}}>
      <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="productos" element={<Productos/>}/>
        <Route path="nosotros" element={<Nosotros/>}/>
        <Route path="detalle/:id" element={<Detalle />} />
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
    </ThemeContext.Provider>


    
  </> 
  )
}

export default App
