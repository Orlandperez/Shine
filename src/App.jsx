import React from "react"
import {Routes, Route} from "react-router-dom"
import './App.css'

// Importng Pages and componets
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"


// Importar servicios
import AudioVisual from "./pages/services/Audio_visual"
import Editorial from "./pages/services/Editorial"
import IdentidadVisual from "./pages/services/Identidad_visual"
import Ilustracion from "./pages/services/Ilustracion"
import Packaging from "./pages/services/Packaging" 

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>

        {/* Servicios */}
        <Route path="/audioVisual" element= {<AudioVisual/>}/>
        <Route path="/editorial" element= {<Editorial/>}/>
        <Route path="/identidadVisual" element= {<IdentidadVisual/>}/>
        <Route path="/ilustracion" element= {<Ilustracion/>}/>
        <Route path="/packaging" element= {<Packaging/>}/>
      </Routes>
    </>
  )
}

export default App
