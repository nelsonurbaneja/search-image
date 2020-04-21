import React, {useState} from 'react'
import './style/style.scss'
import Header from './Header'
import Banner from './Banner'
import GridImage from './GridImage'
import Footer from './Footer'

export const BusquedaContext = React.createContext()

const App = () => {
  const [busqueda, setBusqueda] = useState('')

   // Recibo la palabra del componente <Banner /> 
  const pasarPalabraAPrincipal = (palabra) => {
    let p = palabra
    setBusqueda(p)
  }
  return (
    <div className="ed-container">
      <Header />
      <Banner pasarPalabraAPrincipal={pasarPalabraAPrincipal}/>
      <BusquedaContext.Provider value={{busqueda: busqueda}}>
        <GridImage />
      </BusquedaContext.Provider>
      <Footer />
    </div>
  )
}

export default App;
