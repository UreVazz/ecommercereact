import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './assets/components/Layout'
import Home from './assets/components/Home'
import Nosotros from './assets/components/Nosotros' 
import Productos from './assets/components/Productos'
import Detalle from './assets/components/Detalle'
import Error from './assets/components/Error';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const db = getFirestore();

  return ( 
    <>
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
  </> 
  )
}

export default App
