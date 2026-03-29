import React from 'react'
import Carousel from '../../components/Carousel'
import useIsMobile from '../../hooks/useIsMobile'
import "../styles/services/Packaging.css"


//imagenes
import falafe from "../../assets/Packaging/falapel.png"
import falafe2 from "../../assets/Packaging/falapel2.png"
import falafe3 from "../../assets/Packaging/falapel3.svg"
import falafe4 from "../../assets/Packaging/falapel4.svg"

function Packaging() {
    const isMobile = useIsMobile(500);

    const sectionsDesktop = [
    {id:1,
      component: (
        <section className='pHero'>
          <div>
            <h1>PACKAGING</h1>
            <p>Diseño que envuelve, comunica y construye identidad.</p>
          </div>
        </section>
      )
    },
    {id:2,
      component: (
        <section className='p1'>
          <h1>FALAFEL</h1>
          <div className='p1-container'>
            <div className='caja1'>
              <h2>Diseño de packaging / Edición especial</h2>
              <br />
              <p>Rediseño de un envase de producto masivo, originalmente comercializado en bolsa, adaptado a un nuevo formato en caja – edición especial. </p>
              <p style={{ textIndent: "15px" }}>Se mantuvo la identidad original de la marca (logotipo, cromática, estilo gráfico e información), reorganizando los contenidos para su correcta adaptación al nuevo soporte.</p>
            </div>
            <div className='caja2'>
              <img src={falafe} alt="" />
            </div>
            <div className='caja2'>
              <img src={falafe2} alt="" />
            </div>
          </div>
        </section>
      )
    },
    {id:3,
      component: (
        <section className='p2'>
          <ul>
            <li>Reorganización de la información en las distintas caras</li>
            <li>Definición de jerarquías gráficas y tipográficas</li>
            <li>Incorporación de receta y figura de chef invitada</li>
            <li>Enfoque en legibilidad, continuidad estilística y presentación</li>
          </ul>
          <div>
            <img src={falafe4} alt="" />
          </div>
        </section>
      )
    }
  ]
    const sectionsMobile = [
    {id:1, 
      component: (
        <section className='packagingM'>
          <div>
            <h1>PACKAGING</h1>
            <p>Diseño que envuelve, comunica y construye identidad</p>
          </div>
        </section>
      )
    },
    {id:2, 
      component: (
        <section className='packagingM2'>
          <h1>FALAFEL</h1>
          <div>
            <h2>Diseño de packaging / Edición especial</h2>
            <p>Rediseño de un envase de producto masivo, originalmente comercializado en bolsa, adaptado a un nuevo formato en caja – edición especial. <br />     Se mantuvo la identidad original de la marca (logotipo, cromática, estilo gráfico e información), reorganizando los contenidos para su correcta adaptación al nuevo soporte.</p>
          </div>
        </section>
      )
    },
    {id:3, 
      component: (
        <section className='packagingM3'>
          <div>
            <img src={falafe} alt="" />
            <img src={falafe2} alt="" />
          </div>
        </section>
      )
    },
    {id:4, 
      component: (
        <section className='packagingM4'>
          <div>
            <ul>
              <li>Reorganización de la información en las distintas caras</li>
              <li>Definición de jerarquías gráficas y tipográficas</li>
              <li>Incorporación de receta y figura de chef invitada</li>
              <li>Enfoque en legibilidad, continuidad estilística y presentación</li>
            </ul>
          </div>
          <img src={falafe3} alt="" />
        </section>
      )
    }
  ]

    const sections = isMobile
    ? sectionsMobile
    : sectionsDesktop;

  return (
    <section className="Packaging">
      <Carousel sections={sections} />
    </section>
  )
}

export default Packaging