import React, {useState,useContext, useEffect} from 'react'
import {BusquedaContext} from './App'
import ImageCard from './ImageCard'

const GridImage = () => {
  const [images, setImages] = useState([]) // Guardo las imagenes
  const [paginaActual, setPaginaActual] = useState(1) // Guardo la pagina actual
  const [TotalPaginas, setTotalPaginas] = useState(1) // Guardo las paginaciones 
  const [totalImagenes, setTotalImagenes] = useState(1) // Guardos el total de mis imaganes la api me da 500
  const resultadoConsulta = useContext(BusquedaContext) // Aqui guardo lo que el usuario paso por el input, esto es pasado por API context

  useEffect( () => {
    const getImage = async () => {
      if(resultadoConsulta.busqueda === '') return // Si la busuqeda es vacia no hagas nada
      const key = '16135895-712e1c843ff49eec9d6a39720'
      let imagenesPorPagina = 30
      let url = `https://pixabay.com/api/?key=${key}&q=${resultadoConsulta.busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`
      
      const response = await fetch(url)
      const data = await response.json()
      setImages(data.hits)
      setTotalPaginas(Math.ceil(data.totalHits / imagenesPorPagina)) // Calculo la paginacion dividiendo el total de imagenes entre las imagenes que muestro por paginas
      setTotalImagenes(data.totalHits)

      // Scrool smooth para cuando aprete prev o next suba al inicio del grid de imagenes
      const gridTitle = document.querySelector('.grid-images--title')
      gridTitle.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
    getImage()
  }, [resultadoConsulta.busqueda, paginaActual])

  const prev = () => {
    let anterior = paginaActual - 1
    if(anterior < 1) anterior = 1
    setPaginaActual(anterior)
  }
  const next = () => {
    let siguiente = paginaActual + 1
    setPaginaActual(siguiente)
  }


  return (
    <>
    {resultadoConsulta.busqueda === '' ? null : <h4 className="grid-images--title">{totalImagenes} Imágenes gratis de {resultadoConsulta.busqueda}</h4>}
    {
      resultadoConsulta.busqueda ?
      images.length === 0 
      ? <h4 className="grid-images--title">No hay resultados</h4> 
      :
      <>
      <div className="ed-grid grid-images">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <div className="botones-container">
        {
          paginaActual === 1 
          ? null 
          : <button onClick={prev.bind(this)} className="button light-color btn-np">prev &laquo; {paginaActual - 1}</button>
        }
        {resultadoConsulta.busqueda === '' ? null : <p className="pagina-actual">{paginaActual}</p>}
        {
          paginaActual === TotalPaginas 
          ? null
          : <button onClick={next.bind(this)} className="button light-color btn-np">next &raquo; {paginaActual + 1} / {TotalPaginas}</button>
        }
      </div>
      </>
      : null
      }  
    </>
  )
}

export default GridImage