import React from 'react'
import './Agenda.css'
const Agenda = () => {
  return (
    <div className='container_agenda text-center'>
      <section className='section_agenda-info'>
        <div className='section_agenda-desc'>
          <h2>
            ¿Quieres disfrutar de nuestro servicios?
          </h2>
          <p>Programa una cita ya mismo o habla con uno de nuestros agentes</p>
        </div>
        <div className='section_agenda-anclas'>
          <a href='#' className='btn btn-success'>
            <i className="fa-solid fa-phone"></i>
            3002061484
          </a>
          <a href='#' className='btn btn-success'>
            <i className="fa-solid fa-comment-dots"></i>
            WHATSAPP
          </a>
        </div>
      </section>
    </div>
  )
}

export default Agenda