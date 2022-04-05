import React, { useState } from 'react'
import './ToggleMenu.css'
const ToggleMenu = () => {
    const [toggle, setToggle] = useState(false)

    const menu = () => {
        setToggle(!toggle)
        console.log('hello')
    }

    return (
        <div className='container_toogle'>
            <section className='section_menu'>
                <div>
                    <i onClick={menu} className="fa-solid fa-align-justify"></i>
                </div>
                {

                    toggle ? <div>
                    <p className='p text-center' >CLIENTE</p>
                    <hr/>
                    <p className='p text-center' >MENSAJEROS</p>
                    <hr/>
                    <p className='p text-center' >NUESTROS SERVICIOS</p>
                    <hr/>
                    <p className='p text-center' >  INICIAR SESIÓN</p>
                </div> : null
                }
            </section>
        </div>
    )
}

export default ToggleMenu