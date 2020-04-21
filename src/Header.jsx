import React from 'react'
import fondo from './fondo.webp'

const Header = () => {
  return (
    <header className="main-header">
      <img src={fondo} alt="imagen de fondo" className="img-header-fondo"/>
      <h1 className="main-header--logo">nelson-pixabay</h1>
    </header>
  )
}

export default Header