import React from 'react'
import Carousel from '../../components/Carousel'
import useIsMobile from '../../hooks/useIsMobile'
import "../styles/services/Audio_visual.css"


//imagenes
import ruma from "../../assets/Audio_visual/ruma.png"
import ruma2 from "../../assets/Audio_visual/ruma2.png"
import ruma3 from "../../assets/Audio_visual/ruma3.png"
import ruma4 from "../../assets/Audio_visual/ruma4.png"
import ruma5 from "../../assets/Audio_visual/ruma5.png"

import choco from "../../assets/Audio_visual/choco.png"
import choco2 from "../../assets/Audio_visual/choco2.png"
import choco3 from "../../assets/Audio_visual/choco3.png"
import choco4 from "../../assets/Audio_visual/choco4.png"
import choco5 from "../../assets/Audio_visual/choco5.png"
import choco6 from "../../assets/Audio_visual/choco6.png"
import choco7 from "../../assets/Audio_visual/choco7.png"

import truco from "../../assets/Audio_visual/truco.png"
import truco2 from "../../assets/Audio_visual/truco2.png"
import truco3 from "../../assets/Audio_visual/truco3.png"
import truco4 from "../../assets/Audio_visual/truco4.png"



function Audio_visual() {
  const isMobile = useIsMobile(500);
  
  const sectionsDesktop = [
    { id: 1,
      component: (
        <section className='a-hero'>
          <div>
            <h1>AUDIOVISUAL / MOTION DESIGN</h1>
            <p>Movimiento, tiempo y diseño puestos en acción.</p>
          </div>
        </section>
      )
    },
    { id: 2,
      component: (
        <section className='a2'>
          <h1>RUMA KIDS</h1>
          <div className='a2Container'>
            <div className='info'>
              <h2>Ritmo visual</h2>
              <br />
              <p>Edición audiovisual realizada a partir de una secuencia de fotografías que simulan movimiento continuo. El ritmo visual se construye en diálogo con la música, acompañando el despliegue de las imágenes y potenciando el dinamismo de la pieza. <br />
                La propuesta pone el foco en la visualización de las prendas en un entorno digital, reforzando una estética canchera y urbana para niñas, con una paleta no tradicional que incorpora el negro como rasgo identitario. El cierre presenta el logo de la marca manteniendo la misma lógica rítmica y visual.</p>
              <a href="https://drive.google.com/file/d/1D1JpGHbgaoygNpdV89htj0nZpDvi8v_e/view?usp=drive_link" target="_blank">Acceder</a>
            </div>
            <div className='img'>
              <img className='foto1' src={ruma} alt="" />
              <img className='foto2' src={ruma2} alt="" />
              <img className='foto3' src={ruma3} alt="" />
              <img className='foto4' src={ruma4} alt="" />
            </div>
          </div>
        </section>
      )
    },
    { id: 3,
      component: (
        <section className='a3'>
          <h1>Choco-Ritmo</h1>
          <div className='container'>
            <div className='info'>
              <h2>Folioscopio</h2>
              <br />
              <p>A través de una secuencia de 58 ilustraciones, se construye el baile de un capibara que transmite alegría, energía y disfrute al vincularse con el producto. La animación comienza en blanco y negro y, a medida que avanza, el color aparece y se expande desde sus manos, llenando la escena con la paleta característica de las Chocolinas. El ritmo, el movimiento y el color refuerzan la idea de disfrute, sintetizada en el nombre del proyecto: Choco-Ritmo.</p>
              <a href="https://drive.google.com/file/d/1QT6AuLsP9IsIrmLnUi1BJO4-e8eSdctg/view?usp=drive_link" target="_blank">Acceder</a>
            </div>
            <div className='img'>
              <img className='choco' src={choco} alt="" />
              <img className='choco2' src={choco2} alt="" />
              <img className='choco3' src={choco3} alt="" />
              <img className='choco4' src={choco4} alt="" />
              <img className='choco5' src={choco5} alt="" />
              <img className='choco6' src={choco6} alt="" />
            </div>
          </div>
        </section>
      )
    },
    { id: 4,
      component: (
        <section className='a4'>
          <div className='info'>
            <h1>EL GRAN TRUCO</h1>
            <h2>Afiche y animación audiovisual</h2>
            <br />
            <p>Inspirado en El Gran Truco, este afiche y su animación exploran lo que no se ve: el trabajo silencioso detrás de lo aparentemente simple.La paleta fría, las ilustraciones hechas a mano y las texturas envejecidas construyen una atmósfera de misterio, pensada tanto para impresión como para redes.</p>
            <a href="https://drive.google.com/file/d/1qQTtByhe8B4xjE2LrvcD034nk8eEUYHe/view?usp=drive_link" target="_blank">Acceder</a>
          </div>
          <div className='img'>
            <img className='celu' src={truco} alt="" />
            <img className='celu2' src={truco2} alt="" />
            <img className='celu3' src={truco3} alt="" />
            <img className='celu4' src={truco4} alt="" />
          </div>
        </section>
      )
    }
  ]

  const sectionsMobile = [
    { id: 1,
      component: (
        <section className='audiovisualM'>
          <div>
            <h1>AUDIOVISUAL / MOTION DESIGN</h1>
            <p>Movimiento, tiempo y diseño puestos en acción.</p>
          </div>
        </section>
      )
    },
    { id: 2,
      component: (
        <section className='audiovisualM2'>
          <h1>RUMA KIDS</h1>
          <div>
            <h2>Ritmo visual</h2>
            <p>Edición audiovisual realizada a partir de una secuencia de fotografías que simulan movimiento continuo. El ritmo visual se construye en diálogo con la música, acompañando el despliegue de las imágenes y potenciando el dinamismo de la pieza. <br /> La propuesta pone el foco en la visualización de las prendas en un entorno digital, reforzando una estética canchera y urbana para </p>
          </div>
        </section>
      )
    },
    { id: 3,
      component: (
        <section className='audiovisualM3'>
          <div>
            <p>niñas, con una paleta no tradicional que incorpora el negro como rasgo identitario. El cierre presenta el logo de la marca manteniendo la misma lógica rítmica y visual.</p>
            <a href="https://drive.google.com/file/d/1D1JpGHbgaoygNpdV89htj0nZpDvi8v_e/view?usp=drive_link" target="_blank">Acceder</a>
            <img src={ruma5} alt="" />
          </div>
        </section>
      )
    },
    { id: 4,
      component: (
        <section className='audiovisualM4'>
          <img className='img' src={ruma} alt="" />
          <img className='img2' src={ruma2} alt="" />
          <img className='img3' src={ruma3} alt="" />
        </section>
      )
    },
    { id: 5,
      component: (
        <section className='audiovisualM5'>
          <h1>Choco-Ritmo</h1>
          <div>
            <h2>Folioscopio</h2>
            <p>A través de una secuencia de 58 ilustraciones, se construye el baile de un capibara que transmite alegría, energía y disfrute al vincularse con el producto. La animación comienza en blanco y negro y, a medida que avanza, el color aparece y se expande desde sus manos, llenando la escena con la paleta característica de las Chocolinas. El ritmo, el movimiento y el color refuerzan la idea de disfrute, </p>
          </div>
        </section>
      )
    },
    { id: 6,
      component: (
        <section className='audiovisualM6'>
          <div className='caja1'>
            <p>sintetizada en el nombre del proyecto: Choco-Ritmo.</p>
            <a href="https://drive.google.com/file/d/1QT6AuLsP9IsIrmLnUi1BJO4-e8eSdctg/view?usp=drive_link" target="_blank">Acceder</a>
          </div>
          <div className='caja2'>
            <img src={choco} alt="" />
            <img src={choco2} alt="" />
            <img src={choco3} alt="" />
            <img src={choco4} alt="" />
          </div>
        </section>
      )
    },
    { id: 7,
      component: (
        <section className='audiovisualM7'>
          <img src={choco7} alt="" />
          <img src={choco5} alt="" />
        </section>
      )
    },
    { id: 9,
      component: (
        <section className='audiovisualM8'>
          <h1>EL GRAN TRUCO</h1>
          <div>
            <h2>Afiche y animación audiovisual</h2>
            <p>Inspirado en El Gran Truco, este afiche y su animación exploran lo que no se ve: el trabajo silencioso detrás de lo aparentemente simple. La paleta fría, las ilustraciones hechas a mano y las texturas envejecidas construyen una atmósfera de misterio, pensada tanto para impresión como para redes.</p>
            <a href="https://drive.google.com/file/d/1qQTtByhe8B4xjE2LrvcD034nk8eEUYHe/view?usp=drive_link" target="_blank">Acceder</a>
          </div>
        </section>
      )
    },
    { id: 8,
      component: (
        <section className='audiovisualM9'>
          <img className='img' src={truco4} alt="" />
          <div>
            <img className='img2' src={truco} alt="" />
            <img className='img3' src={truco2} alt="" />
            <img className='img4' src={truco3} alt="" />
          </div>
        </section>
      )
    }
  ]
  
  const sections = isMobile
  ? sectionsMobile
  : sectionsDesktop;

  return (
    <section className="Audio_visual">
      <Carousel sections={sections} />
    </section>
  )
}

export default Audio_visual