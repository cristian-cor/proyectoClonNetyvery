import React, { useState } from 'react'
import './Servicios.css'
const Servicios = () => {
    const [diligenciasCompras, setDiligenciasCompras] = useState(false);
    const [mensajeriaDomicilios, setMensajeriaDomicilios] = useState(false);
    const [cargaExpress, setCargaExpress] = useState(false);

    const dc = () => {
        setDiligenciasCompras(!diligenciasCompras)
    }
    const md = () => {
        setMensajeriaDomicilios(!mensajeriaDomicilios)
    }
    const ce = () => {
        setCargaExpress(!cargaExpress)
    }
    return (
        <div>
            <section className='section_servicios'>
            <h2 className='text-center mt-5'>
            CONOCE NUESTRAS SOLUCIONES
            </h2>
            <p className='text-center'>
            Mismo día y dentro de tu ciudad
            </p>
                <div className='mt-5'>
                    <div onClick={dc} className='section_servicios-titulo'>
                        <div className='container_titulo'>
                            <div>
                                {
                                    diligenciasCompras ? <h2  className='cerrar_modal'>-</h2>  : <i className="fa-solid fa-plus"></i>
                                }
                            </div>
                            <div>
                                <h4> Diligencias y Compras</h4>
                            </div>
                        </div>

                    </div>
                    {
                        diligenciasCompras ?
                            (
                                <div className='text-center'>
                                    <h2>Diligencias y Compras</h2>
                                    <p>Usa la logística de netivery si tienes un flujo de envios mensajeria domicilio carga express dentro de tu ciudad y necesitas que lleguen el mismo día.
                                    </p>
                                    <figure>
                                        <img src='https://www.netivery.com/wp-content/uploads/2019/04/domicilios-150x150.png' alt='img diligencias y Compras' />
                                    </figure>
                                </div>
                            ) : null
                    }
                </div>
                <div onClick={md} className='section_servicios-titulo'>
                    <div className='container_titulo'>
                        <div >
                        {
                            mensajeriaDomicilios ? <h2  className='cerrar_modal'>-</h2>  : <i className="fa-solid fa-plus"></i>
                                }                        </div>
                        <div>
                            <h4>Mensajeria y Domicilios</h4>
                        </div>
                    </div>

                    {
                        mensajeriaDomicilios ?
                            (
                                <div className='text-center'>
                                    <h2>Mensajería y Domicilios</h2>
                                    <p>
                                        Usa la logística de netivery si tienes un flujo de envios mensajeria domicilio carga express dentro de tu ciudad y necesitas que lleguen el mismo día.
                                    </p>
                                    <figure>
                                        <img src='https://www.netivery.com/wp-content/uploads/2019/04/personal-150x150.png' alt=' img Mensajería y Domicilios' />
                                    </figure>
                                </div>
                            ) : null
                    }
                </div>
                <div onClick={ce} className='section_servicios-titulo'>
                    <div className='container_titulo'>
                        <div>
                        {
                            cargaExpress ? <h2  className='cerrar_modal'>-</h2>  : <i className="fa-solid fa-plus"></i>
                                }                        </div>
                        <div>
                            <h4>Carga Express</h4>
                        </div>
                    </div>
                    {
                        cargaExpress ?
                            (
                                <div className='text-center'>
                                    <h2>Carga Express</h2>
                                    <p>
                                        Usa la logística de netivery si necesitas mover carga ligera para tus serivicios de mensajeria domicilio carga de forma local, dentro de tu ciudad
                                    </p>
                                    <figure>
                                        <img src='https://www.netivery.com/wp-content/uploads/2019/04/carga-150x150.png' alt='img Carga Express<' />
                                    </figure>
                                </div>
                            ) : null
                    }
                </div>
            </section>
        </div>
    )
}

export default Servicios