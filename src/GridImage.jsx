import React, {useState,useContext, useEffect} from 'react'
import {BusquedaContext} from './App'
import ImageCard from './ImageCard'

const GridImage = () => {
  const [images, setImages] = useState([])
  const [paginaActual, setPaginaActual] = useState(1)
  const [TotalPaginas, setTotalPaginas] = useState(1)
  const resultadoConsulta = useContext(BusquedaContext)

  useEffect( () => {
    const getImage = async () => {
      if(resultadoConsulta.busqueda === '') return
      const key = '16135895-712e1c843ff49eec9d6a39720'
      let imagenesPorPagina = 30
      let url = `https://pixabay.com/api/?key=${key}&q=${resultadoConsulta.busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`
      
      const response = await fetch(url)
      const data = await response.json()
      setImages(data.hits)
      setTotalPaginas(Math.ceil(data.totalHits / imagenesPorPagina))

      // Scrool smooth
      const grid = document.querySelector('.grid')
      grid.scrollIntoView({behavior: 'smooth', block: 'start'})
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
    {resultadoConsulta.busqueda === '' ? null : <h4 className="grid-images--title">{TotalPaginas * 30} Imágenes gratis de {resultadoConsulta.busqueda}</h4>}
    <div className="ed-grid grid-images grid">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
    <div className="botones">
      {
        paginaActual === 1 
        ? null 
        : <button onClick={prev.bind(this)} className="button">prev &laquo; {paginaActual - 1}</button>
      }
      {resultadoConsulta.busqueda === '' ? null : <p className="pagina-actual">{paginaActual}</p>}
      {
        paginaActual === TotalPaginas 
        ? null
        : <button onClick={next.bind(this)} className="button">next &raquo; {paginaActual + 1} / {TotalPaginas}</button>
      }
    </div>
    </>
  )
}

export default GridImage