import React, {useState} from 'react'

const Buscador = (props) => {
  const [palabra, setPalabra] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setPalabra(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(palabra === '') {
      setError(true)
      return
    }
    // Le paso la palabra al componente <Banner/>
    props.obtenerPalabra(palabra)
    // Color el error el false
    setError(false)
  }

  return (
    <form className="main-buscador" onSubmit={handleSubmit.bind(this)}>
      <div className="ed-item s-70 m-80 l-70 form__item input-buscar">
      {
        error ?  
        <input 
          className="input-error"
          type="text" 
          placeholder="Debe ingresar una palabra, objeto, cosa, animal..."
          onChange={ handleChange.bind(this) }
        />
        : 
        <input 
          type="text" 
          placeholder="Buscar imagenes"
          onChange={ handleChange.bind(this) }
        />
      }
      </div>
      <div className="form__item btn-buscar">
      <input type="submit" className="button light-color" value="Buscar" />
      </div>
    </form>
  )
}

export default Buscador