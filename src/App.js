import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import Cancion from './Components/Cancion'
import Info from './Components/Info'
import Axios from 'axios';

function App() {

  //definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({})
  const [letra, guardarLetra] = useState('')
  const [info, guardarInfo] = useState('')

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0){
      return
    }
    const consultarApiLetra = async () => {

      const {artista, cancion} = busquedaLetra
      const api = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const api2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [ letra, informacion] = await Promise.all([
         Axios(api),
         Axios(api2)
      ])

      

      guardarLetra(letra.data.lyrics)
      guardarInfo(informacion.data.artists[0])

      
    }
    consultarApiLetra()
  }, [busquedaLetra, info])

  return (
    <Fragment>
        <Formulario guardarBusquedaLetra={guardarBusquedaLetra}/>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Info info={info}/>
            </div>
            <div className="col-md-6">
              <Cancion letra={letra}/>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
