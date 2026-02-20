import React, { useState, useRef } from 'react'
import useIsMobile from "../hooks/useIsMobile"
import "./Carousel.css"


function Carousel({ sections }) {
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile(500);
  const startX = useRef(0);

  const next = () =>
    setCurrent(p => (p+1) % sections.length);

  const prev = () =>
    setCurrent(p => (p - 1 + sections.length) % sections.length)

  // swipe mobile
  const onTouchStart = e => {
    startX.current = e.touches[0].clientX
  }
  const onTouchEnd = e => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };



  return (
    <div className='carousel' 
        onTouchStart = {isMobile ? onTouchStart : undefined}
        onTouchEnd = {isMobile ? onTouchEnd : undefined}>
        {sections[current].component}    
        
        {/* Botones del carrusel */}
        {!isMobile && (
            <div className='carousel-controls'>
                {current > 0 &&(
                  <button className='prev' onClick={prev}><i className="fa-solid fa-angle-left"></i></button>
                )}
                {current < sections.length - 1 && (
                  <button className='next' onClick={next}><i className="fa-solid fa-angle-right"></i></button>
                )}
            </div>
        )}

        {/* Puntos para Mobile */}
        {isMobile && (
            <div className='carousel-dots'>
                {sections.map((_, i) =>(
                   <span key={i}  className={`dot ${i === current ? "active" : ""}`}/> 
                ))}
            </div>
        )}
    </div>
  );
}

export default Carousel