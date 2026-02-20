import React from 'react'
import Carousel from '../../components/Carousel'
import useIsMobile from '../../hooks/useIsMobile'
import "../styles/services/Editorial.css"

// Imagenes
import mundo from "../../assets/Editorial/mundo.png"
import mundo2 from "../../assets/Editorial/mundo2.png"
import mundo3 from "../../assets/Editorial/mundo3.png"
import mundo4 from "../../assets/Editorial/mundo4.png"
import mundo5 from "../../assets/Editorial/mundo5.png"
import libro from "../../assets/Editorial/libro.png"
import libro2 from "../../assets/Editorial/libro2.png"
import libro3 from "../../assets/Editorial/libro3.png"
import libro4 from "../../assets/Editorial/libro4.png"
import libro5 from "../../assets/Editorial/libro5.png"
import libro6 from "../../assets/Editorial/libro6.png"

function Editorial() {
  const isMobile = useIsMobile(500);
  
  const sectionsDesktop = [
    {id:1, 
      component: (
        <section className='editorial'>
          <div>
            <h1>Editorial</h1>
            <p>Revistas, tapas y piezas editoriales.</p>
          </div>
        </section>
      )
    },
    {id:2, 
      component: (
        <section className='editorial2'>
          <h1>MUNDO</h1>
          <div className='container'>
            <img src={mundo} alt="" />
            <div>
              <h2>Revista "Mundo"</h2>
              <p>Diseño editorial · Maquetación · Dirección visual</p>
              <p>Diseño de seis páginas editoriales a partir de textos provistos, aplicando los principales recursos del diseño editorial: jerarquía de información, grilla, tipografía y uso del color. El proyecto trabaja una estructura clara y consistente, con correcta organización de contenidos, buena legibilidad y una selección de imágenes acorde al estilo de la revista, su público y su identidad visual.</p>
            </div>
          </div>
        </section>
      )
    },
    { id:3, 
      component: (
        <section className='editorial3'>
          <div className='caja1'>
            <img src={mundo2} alt="" />
          </div>
          <div className='caja2'>
            <img src={mundo3} alt="" />
          </div>
          <div className='caja3'>
            <h3>Recursos trabajados</h3>
            <p>Volanta, copete, títulos, destacados, recuadros, epígrafes, créditos y foliado.</p>
            <h3>Enfoque</h3>
            <p>Claridad, orden, coherencia visual y pertinencia estética</p>
            <h3>Resultado</h3>
            <p>Propuesta editorial con identidad definida, estructura consistente y una tapa de fuerte presencia tipográfica, acorde al público y al emisor.</p>
          </div>
          <div className='caja4'>
            <img src={mundo4} alt="" />
          </div>
          <div className='caja5'>
            <img src={mundo5} alt="" />
          </div>
        </section>
      )
    },
    { id:4, 
      component: (
        <section className='editorial4'>
          <h1>COLECCIÓN DISTOPÍA</h1>
          <div className='e3Container'>
            <div className='info'>
              <h2>Tapas de libro</h2>
              <p>El trabajo se enfocó en analizar los elementos que conforman la tapa de un libro y su rol comunicacional. Se estudiaron los componentes más habituales, los niveles de recurrencia dentro de distintas colecciones y los sistemas gráficos que las organizan, identificando constantes y variables.</p>
              <br />
              <p>A partir de este análisis, se exploró el carácter persuasivo de la tapa, combinando recursos explícitos y metafóricos, la retórica de la imagen y la técnica del collage. El proyecto se resolvió como un mini sistema editorial compuesto por tres tapas de una misma colección, diseñando frente y lomo, con una identidad visual coherente y consistente.</p>
            </div>
            <div className='img'>
              <img src={libro} alt="" />
              <img src={libro2} alt="" />
              <img src={libro3} alt="" />
            </div>
          </div>
        </section>
      )
    },
    { id:5, 
      component: (
        <section className='editorial5'>
          <div className='info'>
            <h2>Fanzine</h2>
            <p>Fanzine de 6 páginas con tapa y dorso, desarrollado en formato A3 desplegable con póster en el reverso. El proyecto explora la ansiedad en estudiantes durante el proceso académico, utilizando la tipografía como recurso visual principal para expresar tensión, sobrecarga y estados emocionales. Se trabaja la jerarquía, los niveles de lectura y la relación entre texto e imagen tipográfica para lograr una pieza editorial clara y de fuerte impacto.</p>
            <img src={libro4} alt="" />
          </div>
          <div className='img'>
            <img className='img1' src={libro5} alt="" />
            <img className='img2' src={libro6} alt="" />
          </div>
        </section>
      )
    }
  ]

  const sectionsMobile = [
    {id:1, 
      component: (
        <section className='editorialM'>
          <div>
            <h1>Editorial</h1>
            <p>Revistas, tapas y piezas editoriales.</p>
          </div>
        </section>
      )
    },
    {id:2, 
      component: (
        <section className='editorialM2'>
         <div>
          <h2>MUNDO</h2>
          <p>Revista “MUNDO”</p>
          <p>Diseño editorial · Maquetación Dirección visual</p>
          <img src={mundo} alt="" />
         </div>
        </section>
      )
    },
    {id:3, 
      component: (
        <section className='editorialM3'>
          <div>
            <p>Diseño de seis páginas editoriales a partir de textos provistos, aplicando los principales recursos del diseño editorial: jerarquía de información, grilla, tipografía y uso del color. El proyecto trabaja una estructura clara y consistente, con correcta organización de contenidos, buena legibilidad y una selección de imágenes acorde al estilo de la revista, su público y su identidad visual.</p>
          </div>
        </section>
      )
    },
    {id:4, 
      component: (
        <section className='editorialM4'>
          <div>
            <img src={mundo2} alt="" />
            <img src={mundo3} alt="" />
            <img src={mundo4} alt="" />
          </div>
        </section>
      )
    },
    {id:5, 
      component: (
        <section className='editorialM5'>
          <div>
            <h3>Recursos trabajados</h3>
            <p>Volanta, copete, títulos, destacados, recuadros, epígrafes, créditos y foliado.</p>
            <h3>Enfoque</h3>
            <p>Claridad, orden, coherencia visual y pertinencia estética</p>
            <h3>Resultado</h3>
            <p>Propuesta editorial con identidad definida, estructura consistente y una tapa de fuerte presencia tipográfica, acorde al público y al emisor.</p>
          </div>
          <img src={mundo5} alt=""/>
        </section>
      )
    },
    {id:6, 
      component: (
        <section className='editorialM6'>
          <div className='container'>
            <h1>COL. DISTOPÍA</h1>
            <div>
              <h2>Tapas de libro</h2>
              <p>El proyecto analiza los elementos que conforman la tapa de un libro y su función comunicacional, identificando constantes y variables dentro de distintas colecciones. A partir de este estudio, se exploró el carácter persuasivo de la tapa mediante recursos explícitos y metafóricos, la retórica de la imagen y el collage. El resultado es un mini sistema editorial compuesto por tres tapas de una misma colección, con frente y lomo, y una identidad visual coherente.</p>
            </div>
          </div>
        </section>
      )
    },
    {id:7, 
      component: (
        <section className=' editorialM7'>
          <img className='img' src={libro} alt="" />
          <img className='img2' src={libro2} alt="" />
          <img className='img3' src={libro3} alt="" />
        </section>
      )
    },
    {id:8, 
      component: (
        <section className='editorialM8'>
          <h1>¿Y SI ALGO SALE MAL?</h1>
          <div>
            <h2>Fanzine</h2>
            <p>Fanzine de 6 páginas con tapa y dorso, desarrollado en formato A3 desplegable con póster en el reverso. El proyecto explora la ansiedad en estudiantes durante el proceso académico, utilizando la tipografía como recurso visual principal para expresar tensión, sobrecarga y estados emocionales. Se trabaja la jerarquía, los niveles de lectura y la relación entre texto e imagen tipográfica para lograr una pieza editorial clara y de fuerte impacto.</p>
          </div>
        </section>
      )
    },
    {id:9, 
      component: (
        <section className='editorialM9'>
          <div>
            <img src={libro4} alt="" />
            <img src={libro5} alt="" />
            <img src={libro6} alt="" />
          </div>
        </section>
      )
    }
  ]

  const sections = isMobile
    ? sectionsMobile
    : sectionsDesktop;

  return (
    <section className="Editorial">
      <Carousel sections={sections} />
    </section>
  );
}

export default Editorial