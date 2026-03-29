import React from 'react'
import Carousel from "../components/Carousel";
import useIsMobile from "../hooks/useIsMobile";
import logo2 from "../assets/logo2.svg"

import "./styles/services.css"

function Services() {
  const isMobile = useIsMobile(500);

  const sectionDesktop = [
    { id:  1,  
        component:(
            <section className="services-pc">
                <div className='s-container'>
                    <div className= "container1">
                        <div className='caja'>
                            <h2><i className="fa-solid fa-bahai"></i> Identidad visual y Branding</h2>
                            <p>Si sentís que es momento de crear una identidad que realmente represente tu emprendimiento, o renovar la que ya tenés, estoy acá para acompañarte en el proceso. <br />Desarrollo identidades con intención:</p>
                            <ul>  
                                <li>Logotipo y sistema visual</li>
                                <li>Paleta cromática y tipograficas</li>
                                <li>Univer gráfico y aplicaciones</li>
                                <li>Manual básico de marca</li>
                            </ul>
                            <p>Si querés que tu marca transmita una historia, un propósito y una personalidad única, este servicio es para vos. <br />Construyamos una identidad que conecte y perdure.</p>
                        </div>
                        <div className='caja2'>
                            <h2> <i className="fa-solid fa-book"></i> Diseño Editorial</h2>
                            <p>Diseño de piezas pensadas para comunicar con claridad y estética:</p>
                            <ul>
                                <li>Revistas y catálogos.</li>
                                <li>Presentaciones</li>
                                <li>Libros y publicaciones.</li>
                                <li>Dossiers y piezas corporativas.</li>
                            </ul>
                            <p>Cada proyecto editorial esta trabajada desde la composición, la jerarquía visual y el detalle.</p>
                        </div>
                    </div>

                    <div className= "container2">
                        <div className='caja3'>
                            <h2><i className="fa-solid fa-photo-film"></i> Diseño Audiovisual</h2>
                            <p>Desarrollo piezas visuales en movimiento para potenciar comunicación de tu marca:</p>
                            <ul>
                                <li>Animaciones simples. </li>
                                <li>Placas para redes.</li>
                                <li>Presentaciones audiovisuales.</li>
                            </ul>
                        </div>
                        <div className='caja3'>
                            <h2><i className="bi bi-box2-fill"></i> Packaging </h2>
                            <p>Diseño de empaques que no solo contienen un producto sino que transmiten su esencia.</p>
                            <p style={{ textIndent: "15px" }}>Busco que cada packaging tanga coherencia con la identidad de la marca y destaque en el punto de venta.</p>
                        </div>
                        <div className='caja3 especial'>
                            <h2><i className="bi bi-brush-fill"></i> Ilustración</h2>
                            <p>Creo ilustraciones personalizadas que acompañan y enriquecen marcas, productos o piezas graficas. <br />Pueden aplicarse en:</p>
                            <ul>
                                <li>Identidades visuales.</li>
                                <li>Packaging</li>
                                <li>Editorial</li>
                                <li>Redes sociales</li>
                            </ul>
                        </div>
                   </div>

                    <div className= "container3">
                        <div className='info'>
                            <strong>¿Tenés un proyecto en mente?</strong>
                            <p>Me encantaría ayudarte a darle forma a tu marca.</p>
                            <a href="https://wa.me/qr/M24BWYWOAIO6E1" target="_blank">Contactarme</a>
                        </div>
                        <img src={logo2} alt="Logo" />
                    </div>
                </div>
            </section>
        )
    }
  ]
  const sectionsMobile = [
    { id: 1,
        component:(
            <section className='servicioM'>
                <div className='container'>
                    <div>
                        <i className="fa-solid fa-bahai"></i>
                        <h2> Identidad visual y Branding</h2>
                    </div>
                    <p>Si sentís que es momento de crear una identidad que realmente represente tu emprendimiento, o renovar la que ya tenés, estoy acá para acompañarte en el proceso. <br /> Desarrollo identidades con intención:</p>
                    <ul>
                        <li>Logotipo y sistema visual</li>
                        <li>Paleta cromática y tipografías</li>
                        <li>Universo gráfico y aplicaciones</li>
                        <li>Manual básico de marca</li>
                    </ul>
                    <p>Si querés que tu marca transmita una historia, un propósito y una personalidad única, este servicio es para vos. <br /> Construyamos una identidad que conecte y perdure.</p>
                </div>
            </section>
        )
    },
    { id: 2,
        component:(
            <section className='servicioM23'>
                <div>
                    <h2><i className="fa-solid fa-book"></i> Diseño Editorial</h2>
                    <p>Diseño de piezas pensadas para comunicar con claridad y estética:</p>
                    <ul>
                        <li>Revistas y catálogos.</li>
                        <li>Presentaciones</li>
                        <li>Libros y publicaciones.</li>
                        <li>Dossiers y piezas corporativas.</li>
                    </ul>
                    <p>Cada proyecto editorial esta trabajada desde la composición, la jerarquía visual y el detalle.</p>
                </div>
                <div>
                    <h2><i className="fa-solid fa-paint-brush"></i> Ilustración</h2>
                    <p>Diseño de empaques que no solo contienen un producto sino que transmiten su esencia.</p>
                    <p style={{textIndent: "15px"}}>Busco que cada packaging tanga coherencia con la identidad de la marca y destaque en el punto de venta.</p>
                </div>
            </section>
        )
    },
    { id: 3,
        component:(
            <section className='servicioM23'>
                <div>
                    <h2><i className="bi bi-box2-fill"></i> Packaging</h2>
                    <p>Creamos ilustraciones personalizadas que acompañan y enriquecen marcas, productos o piezas graficas. <br /> Pueden aplicarse en:</p>
                    <ul>
                        <li>Identidades visuales.</li>
                        <li>Packaging</li>
                        <li>Editorial</li>
                        <li>Redes sociales</li>
                    </ul>
                </div>
                <div>
                    <h2><i className="fa-solid fa-photo-film"></i> Diseño Audiovisual</h2>
                    <p>Desarrollo piezas visuales en movimiento para potenciar comunicación de tu marca:</p>
                    <ul>
                        <li>Animaciones simples. </li>
                        <li>Placas para redes.</li>
                        <li>Presentaciones audiovisuales.</li>
                    </ul>
                </div>
            </section>
        )
    },
    { id: 4,
        component:(
            <section className='servicioM4'>
                <div>
                    <img src={logo2} alt="logo" />
                    <strong>¿Tenés un proyecto en mente?</strong>
                    <p>Me encantaría ayudarte a darle forma a tu marca.</p>
                    <a href="https://wa.me/qr/M24BWYWOAIO6E1" target="_blank">Contactarme</a>
                </div>
            </section>
        )
    }
  ]

  const sections = isMobile ? sectionsMobile : sectionDesktop;

  return (
    <section className='services'>
        {isMobile ? (
            <Carousel sections={sections} />
        ) : (
            sections.map(sec => (
                <div key={sec.id}>{sec.component}</div>
            ))
        )}
    </section>
  )
}

export default Services