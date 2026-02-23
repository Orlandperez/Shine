import Carousel from "../components/Carousel";
import useIsMobile from "../hooks/useIsMobile";
import "./styles/About.css"

// imagenes o fondos
import kirby from "../assets/aboutKirby.png"
import icons from "../assets/about_icon.png"
import foto from "../assets/aboutFoto.png"
import iconM from "../assets/about-iconM.png"




export default function About() {
  const isMobile = useIsMobile(500);

  const sectionsDesktop = [
    { id: 1, 
      component: (
        <section className="about-pc">
          <div className="info">
            <img src={kirby} alt="" />
            <div>
              <h2>Educacion</h2>
              <p>Formación en Diseño Gráfico (Facultad de Arquitectura, Diseño y Urbanismo - UBA).</p>
            </div>
          </div>

          <div className="info2">
            <div className="titulo">
              <h1>¡Hola! Soy Verito</h1>
            </div>
            <div className="texto">
              <p>Tengo 26 años y estudio Diseño Gráfico en la UBA, Argentina. Amo crear, explorar y meterme en cada idea con curiosidad y buena onda. Me inspiran las cosas distintas, los colores y los desafíos que te hacen pensar un poquito más. Siempre busco aprender para dar lo mejor y hacer trabajos que conecten, emocionen y se sientan auténticos.</p>
            </div>
            <div className="software">
              <h2>Software</h2>
              <img src={icons} alt="" />
            </div>
          </div>

          <div className="info3">
            <img src={foto} alt="" />
            <ul>
              <h2>Habilidades</h2>
              <li>Identidad visual de la marca</li>
              <li>Editorial</li>
              <li>Packaging</li>
              <li>Ilustración</li>
              <li>Audio visual</li>
            </ul>
          </div>
        </section>
      )
    }
  ];

  const sectionsMobile = [
    { id: 1,
      component:(
        <section className="aboutM">
          <div>
            <h1>¡Hola! <br /> Soy Verito</h1>
            <p>Tengo 26 años y estudio Diseño Gráfico en la UBA, Argentina. Amo crear, explorar y meterme en cada idea con curiosidad y buena onda. Me inspiran las cosas distintas, los colores y los desafíos que te hacen pensar un poquito más. Siempre busco aprender para dar lo mejor y hacer trabajos que conecten, emocionen y se sientan auténticos.</p>
          </div>
        </section>
      )},
    { id: 2,
      component:(
        <section className="aboutM2">
          <div>
            <img className="foto" src={foto} alt="" />
            <div className="container">
              <h2>Habilidades</h2>
              <ul>
                <li>Identidad visual de la marca</li>
                <li>Editorial</li>
                <li>Packaging</li>
                <li>Ilustración</li>
                <li>Audiovisual</li>
              </ul>
              <div>
                <h2>Educacion</h2>
                <p>Formación en Diseño Gráfico (Facultad de Arquitectura, Diseño y Urbanismo - UBA).</p>
              </div>
              <div>
                <h2>Software</h2>
                <img src={iconM} alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
  ];

  const sections = isMobile
    ? sectionsMobile
    : sectionsDesktop;

  return (
    <section className="about">
      {isMobile ? (
        <Carousel sections={sections} />
      ) : (
        sections.map(sec => (
          <div key={sec.id}>{sec.component}</div>
        ))
      )}
    </section>
  );
}