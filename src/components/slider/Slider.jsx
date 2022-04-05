import React from 'react'
import './Slider.css'
const Slider = () => {
    return (
        <>
        <div className='text-center mt-5'>
            <h2>ENTIDADES Y CONVOCATORIAS</h2>
            <p>Conoce los programas y entidades que nos apoyan</p>
        </div>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.netivery.com/wp-content/uploads/2019/10/mintic.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.netivery.com/wp-content/uploads/2019/10/innova.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.netivery.com/wp-content/uploads/2019/10/fundacion.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
      
    )
}

export default Slider