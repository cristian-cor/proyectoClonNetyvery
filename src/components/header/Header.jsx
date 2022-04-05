
import React from 'react'
import ToggleMenu from '../toggleMenu/ToggleMenu'
//estilos
import './Header.css'

const Header = () => {

 
    return (
        <>
            <div className='container_header'>
                <section className='section_nav'>
                    <nav className='nav'>
                        <figure>
                            <img src='https://www.netivery.com/wp-content/uploads/2021/09/cropped-netivery240x240-2.png' alt='logo netivery' />
                        </figure>
                        <div>
                            <p className='p' >CLIENTE</p>
                            <p className='p' >MENSAJEROS</p>
                            <p className='p' >NUESTROS SERVICIOS</p>
                            <p className='p' >  INICIAR SESIÓN</p>
                        </div>
                    </nav>
                </section>
            </div>
            <ToggleMenu/>
        </>
    )
}

export default Header