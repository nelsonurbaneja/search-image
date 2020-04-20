import React, {useState} from 'react'
import Buscador from './Buscardor'
import fondo from './fondo.webp'

const Banner = (props) => {
  const [palabra, setPalabra] = useState('')

  // Recibo la palabra del componente <Buscador />
  const obtenerPalabra = (palabra) => {
    setPalabra(palabra)
  }
  // Le paso la la palabra al componente principal <App/>
  props.pasarPalabraAPrincipal(palabra)

  return (
    <>
    <div className="main-banner">
      <img src={fondo} alt="imagen de fondo" className="img-banner-fondo"/>
      <div className="main-banner--content">
        <h2 className="main-banner--title">Increíbles imágenes gratis para descargar</h2>
        <p className="description">Nuestro banco de imágenes tiene más de 1.7 millones de imágenes y videos compartidos por nuestra talentosa comunidad.</p>
      </div>
      <Buscador obtenerPalabra={obtenerPalabra} />
      <span className="copy">Imágenes populares: coronavirus, familia, oficina, salud, covid, flores, musica, cielo, semana santa, fondo, paisajes, virus</span>
    </div>
    </>
  )
}

export default Banner