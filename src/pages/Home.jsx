import React from 'react'
import "./styles/Home.css"

function Home() {
  return (
    <section className='hero'>
      <div className='caja1'>
        <p>Identidad Visual / Ilustración</p>
        <p>Editorial / Packaging</p>
        <p>Audiovisual</p>
      </div>
      <div className='caja2'>
        <p>2026</p>
      </div>
      <div className='caja3'>
        <a href="https://wa.me/qr/M24BWYWOAIO6E1" target="_blank"><i className="bi bi-whatsapp"></i></a>
        <p>Estudiante de Diseño Grafico</p>
      </div>
    </section>
  )
}

export default Home