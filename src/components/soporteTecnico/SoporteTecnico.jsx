import React from 'react'
import './SoporteTecnico.css'
const SoporteTecnico = () => {
    return (
        <section className='container_soporte text-center'>
            <div className='mt-5'>
                <h2>¿Ya disfritas de nuestros beneficios?</h2>
                <h3>RASTREA TU SERVICIO</h3>
                <span><i className="fa-solid fa-location-dot"></i></span>
            </div>
            <div className='container_soporte-form mt-4'>
                <form>
                    <input type='text' placeholder='Ingresa aqui tu numero de serie' />
                    <button>Encuentra tu pedido</button>
                </form>
            </div>
            <div className='mt-5'>
                <h2>¿Presentas problemas con tu pedido?</h2>
                <p>Nuestros agentes están disponibles para solucinar tu requerimiento</p>
                <a href='#' className=' btn btn-warning'><i className="fa-solid fa-triangle-exclamation"></i> Soporte Tecnico </a>
            </div>
        </section>
    )
}

export default SoporteTecnico