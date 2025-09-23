import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './assets/components/Layout'
import Home from './assets/components/Home'
import Nosotros from './assets/components/Nosotros' 
import Productos from './assets/components/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="nosotros" element={<Nosotros/>}/>
        <Route path="productos" element={<Productos/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  </> 
  )
}

export default App
