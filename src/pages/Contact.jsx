import React, { useState } from 'react'
import "./styles/Contact.css"
import svg from "../assets/contact.svg"
import { useForm } from 'react-hook-form'

function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const enviar = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xlgwlajr', { // Reemplaza {tu_id}
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setMensajeEnviado(true)
        reset()
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
    }
  };
  return (
    <section className='contact'>
      <div className='contact-container'>
        <img src={svg} alt="" />
        <div className='contact-info'>
          <div className='info1'>
            <h2>¡Hola! Hablemos.</h2>
            <p>Estoy lista para escuchar tus ideas <br /> y trabajar juntas/os.</p>
          </div>
          <div className='info2'>
            <a href="https://wa.me/qr/M24BWYWOAIO6E1" target="_blank"><i className="bi bi-whatsapp"></i></a>
            <a href="mailto:mveronicaangela@gmail.com"><i className="bi bi-envelope"></i></a>
            <a href="https://www.behance.net/veronicmamani" target='_blank'><i className="bi bi-behance"></i></a>
            <a href="http://www.linkedin.com/in/veronica-angela-mamani-7993aa345" target="_blank"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>


        {mensajeEnviado ?(
          <div className="contact-form">
            <div className="icono-exito">
              <i className="bi bi-check-circle" style={{ fontSize: '3rem', color: '#ff9100' }}></i>
            </div>
            <h3>¡Mensaje Enviado!</h3>
            <p style={{margin: "5px 0 0 0"}}>Gracias por contactarme. Te responderé lo antes posible.</p>
            <button onClick={() => setMensajeEnviado(false)}>Enviar otro mensaje</button>
          </div>
        ):(
          <form onSubmit={handleSubmit(enviar)} className='contact-form'>
          <input type="text" placeholder='¡Hola! ¡Como te llamas?' required {...register("nombre", { required: true })}/>
          <input type="text" placeholder='Nombre de tu empresa' {...register("empresa")}/>
          <input type="text" placeholder='Tu numero de celular' {...register("celular")}/>
          <input type="text" placeholder='Tu correo electronico' required {...register("email", { required: true })}/>
          <textarea name="" id="" placeholder='¡Como podemos ayudarte?' {...register("mensaje")}></textarea>
          <button>Enviar mensaje</button>
        </form>
        )}
      </div>
    </section>
  )
}

export default Contact