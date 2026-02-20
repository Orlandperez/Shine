import React from 'react'
import Carousel from '../../components/Carousel'
import useIsMobile from '../../hooks/useIsMobile'
import "../styles/services/Ilustracion.css"

//imagenes
import miau from "../../assets/Ilustracion/miau.png"
import miau2 from "../../assets/Ilustracion/miau2.png"
import bolsa from "../../assets/Ilustracion/bolsa.png"
import bolsa2 from "../../assets/Ilustracion/bolsa2.png"
import caja from "../../assets/Ilustracion/caja.png"

function Ilustracion() {
  const isMobile = useIsMobile(500);

  const sectionsDesktop = [
    {id:1,
      component: (
        <section className='iHero'>
          <div>
            <h1>ILUSTRACIÓN Y GRÁFICA APLICADA</h1>
            <p>Recursos visuales, exploración tipográfica y aplicaciones editoriales</p>
          </div>
        </section>
      )
    },
    {id:2,
      component:(
        <section className='i'>
          <h1>CTRL + MIAU</h1>
          <div className='iContainer'>
            <div className='info'>
              <h2>Ilustración serigrafría</h2>
              <p>Proyecto de ilustración aplicada a serigrafía. Se trabajó con tramas de medio tono y tono continuo, ajustadas para un correcto pasaje de tinta sin empaste. La pieza se resolvió con dos tintas (violeta y amarillo), cuya superposición genera una tercera.</p>
            </div>
            <img className='img' src={miau} alt="" />
            <img className='img2' src={miau2} alt="" />
          </div>
        </section>
      )
    },
    {id:3,
      component:(
        <section className='i2'>
          <div className='caja1'>
            <p>El sistema se adaptó a distintos soportes y escalas, incluyendo afiche, tote bag, sticker y una versión a una tinta, manteniendo coherencia gráfica y legibilidad.</p>
          </div>
          <div className='caja2'>
            <img src={bolsa} alt="" />
          </div>
          <div className='caja3'>
            <img className='bolsa' src={bolsa2} alt="" />
            <img className='bolsa2' src={caja} alt="" />
          </div>
        </section>
      )
    }
  ]

    const sectionsMobile = [
    {id:1, 
      component: (
        <section className='ilustracionM'>
          <div>
            <h1>ILUSTRACIÓN / GRÁFICA APLICADA</h1>
            <p>Recursos visuales, exploración tipográfica y aplicaciones editoriales.</p>
          </div>
        </section>
      )
    },
    {id:2, 
      component: (
        <section className='ilustracionM2'>
         <h1>CTRL + MIAU</h1>
         <div>
          <h2>Ilustración serigrafía</h2>
          <p>Proyecto de ilustración aplicada a serigrafía. Se trabajó con tramas de medio tono y tono continuo, ajustadas para un correcto pasaje de tinta sin empaste. La pieza se resolvió con dos tintas (violeta y amarillo), cuya superposición genera una tercera.</p>
         </div>
        </section>
      )
    },
    {id:3, 
      component: (
        <section className='ilustracionM3'>
          <img className='img' src={miau} alt="" />
          <img className='img2' src={miau2} alt="" />
        </section>
      )
    },
    {id:4, 
      component: (
        <section className='ilustracionM4'>
          <div>
            <p>El sistema se adaptó a distintos soportes y escalas, incluyendo afiche, tote bag, sticker y una versión a una tinta, manteniendo coherencia gráfica y legibilidad.</p>
            <img src={bolsa} alt="" />
          </div>
        </section>
      )
    },
    {id:5, 
      component: (
        <section className='ilustracionM5'>
          <img className='img' src={bolsa2} alt="" />
          <img className='img2' src={caja} alt="" />
        </section>
      )
    }
  ]


  const sections = isMobile
    ? sectionsMobile
    : sectionsDesktop;
  return (
    <section className="Ilustracion">
      <Carousel sections={sections} />
    </section>
  );
}

export default Ilustracion