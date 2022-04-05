import React from 'react'
import './Dispositivos.css'
const Dispositivos = () => {
return (
<div className="container mt-5">
    <div className='text-center'>
        <h2>GESTIONA TUS SERVICIOS DESDE TU PC ó CELULAR</h2>
        <p>Disponemos de canales digitales y telefónicos</p>
    </div>
    <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="icon">
                    <i className="fa-solid i faa fa-briefcase"></i>
                </div>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h3>
                    <a className='a' href="#">Netivery</a>
                </h3>
                <p>Usa la logística de netivery si tienes un flujo de envios mensajeria domicilio carga express dentro
                    de tu ciudad y necesitas que lleguen el mismo día.
                </p>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="icon">
                    <i className="fa-solid i faa fa-person"></i>
                </div>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h3>
                    <a className='a' href="#">Mandaos ®</a>
                </h3>
                <p>Una red de mensajeros para realizar una compra, recoger algo, realizar trámites, pagos u otro tipo de
                    servicio de mensajería, domicilio ó carga express dentro de tu ciudad y para el mismo día
                </p>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="icon">
                    <i className="fa-solid i faa fa-download"></i>
                </div>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <h3>
                    <a className='a' href="#">App</a>
                </h3>
                <button className='btnApp'>Play Store</button>
                <button className='btnApp'>App Store</button>
            </div>
        </div>
    </div>
</div>
)
}

export default Dispositivos