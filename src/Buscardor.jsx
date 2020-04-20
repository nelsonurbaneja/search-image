import React, {useState} from 'react'

const Buscador = (props) => {
  const [palabra, setPalabra] = useState('')

  const handleChange = (e) => {
    setPalabra(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Le paso la palabra al componente <Banner/>
    props.obtenerPalabra(palabra)
  }

  return (
    <form className="main-buscador" onSubmit={handleSubmit.bind(this)}>
      <div className="ed-item s-70 m-80 l-70 form__item input-buscar">
        <input 
          type="text" 
          placeholder="Buscar imagenes"
          onChange={ handleChange.bind(this) }
        />
      </div>
      <div className="form__item btn-buscar">
      <input type="submit" className="button light-color" value="Buscar" />
      </div>
    </form>
  )
}

export default Buscador