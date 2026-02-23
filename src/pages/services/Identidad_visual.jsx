import React from 'react'
import Carousel from '../../components/Carousel'
import useIsMobile from '../../hooks/useIsMobile'
import "../styles/services/Identidad_visual.css"

//imagenes
import hys from "../../assets/Identidad_visual/hys.png"
import hys2 from "../../assets/Identidad_visual/hys2.png"
import hys3 from "../../assets/Identidad_visual/hys3.png"
import hys4 from "../../assets/Identidad_visual/hys4.png"
import hys5 from "../../assets/Identidad_visual/hys5.png"
import hys6 from "../../assets/Identidad_visual/hys6.png"
import hys7 from "../../assets/Identidad_visual/hys7.png"
import hys8 from "../../assets/Identidad_visual/hys8.png"
import hys9 from "../../assets/Identidad_visual/hys9.png"
import hys10 from "../../assets/Identidad_visual/hys10.png"
import hys11 from "../../assets/Identidad_visual/hys11.png"
import hys12 from "../../assets/Identidad_visual/hys12.png"
import hys13 from "../../assets/Identidad_visual/hys13.png"
import hys14 from "../../assets/Identidad_visual/hys14.png"
import hys15 from "../../assets/Identidad_visual/hys15.png"
import hys16 from "../../assets/Identidad_visual/hys16.png"
import hys17 from "../../assets/Identidad_visual/hys17.png"


function Identidad_visual() {
  const isMobile = useIsMobile(500);
  
  const sectionsDesktop = [
    {id:1, 
      component: (
        <section className='identidad'>
          <div>
            <h1>IDENTIDAD VISUAL</h1>
            <p>Identidades pensadas para conectar y perdurar.</p>
          </div>
        </section>
      )
    },
    {id:2, 
      component: (
        <section className='identidad2'>
          <h1>hys reyes</h1>
          <div className='container'>
            <div>
              <h2>Marca final</h2>
              <p>El diseño de la identidad visual de hys reyes surge a partir de la necesidad de comunicar los valores esenciales de la marca dentro del rubro mayorista de indumentaria. La propuesta se centra en transmitir movimiento continuo, reflejando el flujo permanente de reposición y abastecimiento que caracteriza al negocio.</p>
            </div>
            <div className='img'>
              <img src={hys} alt="" />
            </div>
            <div>
              <h2>Variantes cromaticas</h2>
              <img src={hys2} alt="" />
            </div>
          </div>
        </section>
      )
    },
    { id:3, 
      component: (
        <section className='identidad3'>
          <div>
            <h2>Simbolo</h2>
            <img className='img' src={hys3} alt="" />
            <p>Corona minimalista que simboliza calidad y confiabilidad. Su diseño de líneas simples y redondeadas transmite delicadeza, dando lugar a una identidad moderna y actual.</p>
          </div>
          <div>
            <h2>Cromatica</h2>
            <img src={hys16} alt="" />
            <ul>
              <li>Celeste: aporta frescura, calma y cercanía, reforzando el carácter accesible de la marca.</li>
              <li>Negro / gris oscuro: brinda contraste, legibilidad y solidez, transmitiendo profesionalismo y confianza.</li>
              <li>Conjunto cromático: equilibra delicadeza y firmeza, dando como resultado una identidad moderna y actual.</  li>
            </ul>
          </div>
          <div>
            <h2>Tipografia</h2>
            <img className='img2' src={hys4} alt="" />
            <p>La tipografía inclinada suma dinamismo y refuerza la idea de una marca en movimiento. En conjunto, la identidad mantiene una estética actual y accesible, pensada para un público que valora la buena calidad a precios competitivos</p>
          </div>
        </section>
      )
    },
    { id:4, 
      component: (
        <section className='identidad4'>
          <img className='img' src={hys5} alt="" />
          <div>
            <img className='img2' src={hys6} alt="" />
            <img className='img3' src={hys7} alt="" />
          </div>
        </section>
      )
    },
    { id:5, 
      component: (
        <section className='identidad5'>
          <img className='img' src={hys8} alt="" />
          <img className='img2' src={hys9} alt="" />
        </section>
      )
    },
    { id:6, 
      component: (
        <section className='identidad6'>
          <div>
            <img className='img' src={hys10} alt="" />
            <img className='img' src={hys11} alt="" />
            <img className='img' src={hys12} alt="" />
          </div>
          <div>
            <img className='img2' src={hys13} alt="" />
            <img className='img2' src={hys14} alt="" />
          </div>
          <img className='img3' src={hys15} alt="" />
        </section>
      )
    }
  ]

  const sectionsMobile = [
    {id:1, 
      component: (
        <section className='identidadM'>
          <div>
            <h1>IDENTIDAD VISUAL</h1>
            <p>Identidades pensadas para <br /> conectar y perdurar.</p>
          </div>
        </section>
      )
    },
    {id:2, 
      component: (
        <section className='identidadM2'>
          <h1>hys reyes</h1>
          <div>
            <h2>Marca final</h2>
            <span></span>
            <p>El diseño de la identidad visual de hys reyes surge a partir de la necesidad de comunicar los valores esenciales de la marca dentro del rubro mayorista de indumentaria. La propuesta se centra en transmitir movimiento continuo, reflejando el flujo permanente de reposición y abastecimiento que caracteriza al negocio.</p>
          </div>
        </section>
      )
    },
    {id:3, 
      component: (
        <section className='identidadM3'>
          <img className='img' src={hys} alt="" />
          <div>
            <h2>Variantes cromáticas</h2>
            <img className='img2' src={hys2} alt="" />
          </div>
        </section>
      )
    },
    {id:4, 
      component: (
        <section className='identidadM456'>
          <div>
            <h2>Simbolo</h2>
            <span></span>
            <img src={hys3} alt="" />
            <p>Corona minimalista que simboliza calidad y confiabilidad. Su diseño de líneas simples y redondeadas transmite delicadeza, dando lugar a una identidad moderna y actual.</p>
          </div>
        </section>
      )
    },
    {id:5, 
      component: (
        <section className='identidadM456'>
          <div>
            <h2>Cromatica</h2>
            <span></span>
            <img src={hys17} alt="" />
            <ul>
              <li>Celeste: aporta frescura, calma y cercanía, reforzando el carácter accesible de la marca.</li>
              <li>Negro / gris oscuro: brinda contraste, legibilidad y solidez, transmitiendo profesionalismo y confianza.</li>
              <li>Conjunto cromático: equilibra delicadeza y firmeza, dando como resultado una identidad moderna y actual.</li>
            </ul>
          </div>
        </section>
      )
    },
    {id:6, 
      component: (
        <section className='identidadM456'>
          <div>
            <h2>Tipografía</h2>
            <span></span>
            <img src={hys4} alt="" />
            <p>La tipografía inclinada suma dinamismo y refuerza la idea de una marca en movimiento. En conjunto, la identidad mantiene una estética actual y accesible, pensada para un público que valora la buena calidad a precios competitivos</p>
          </div>
        </section>
      )
    },
    {id:7, 
      component: (
        <section className=' identidadM7'>
          <img className='img' src={hys5} alt="" />
          <img className='img2'src={hys6} alt="" />
          <img className='img3' src={hys7} alt="" />
        </section>
      )
    },
    {id:8, 
      component: (
        <section className='identidadM89'>
          <img className='img' src={hys8} alt="" />
          <img className='img2' src={hys9} alt="" />
        </section>
      )
    },
    {id:9, 
      component: (
        <section className='identidadM89'>
          <img className='img' src={hys14} alt="" />
          <img className='img2' src={hys15} alt="" />
        </section>
      )
    }
  ]

  const sections = isMobile
  ? sectionsMobile
  : sectionsDesktop;

  return (
    <section className="Identidad_visual">
      <Carousel sections={sections} />
    </section>
  );
}

export default Identidad_visual