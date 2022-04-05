import React from 'react'
import Agenda from '../components/agenda/Agenda'
import Cover from '../components/cover/Cover'
import Dispositivos from '../components/dispositivos/Dispositivos'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Servicios from '../components/servicios/Servicios'
import Slider from '../components/slider/Slider'
import SoporteTecnico from '../components/soporteTecnico/SoporteTecnico'

const Pagina = () => {
  return (
    <>
      <Header/>
      <Cover/>
      <Agenda/>
      <SoporteTecnico/>
      <Servicios/>
      <Dispositivos/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default Pagina