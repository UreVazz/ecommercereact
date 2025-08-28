import { useState } from 'react'
import './App.css'
import Body from './assets/componets/Body';
import Header from './assets/componets/Header';
import Footer from './assets/componets/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Body />
    <Footer />

    </>
  )
}

export default App
