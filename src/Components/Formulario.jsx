import React, {useState} from 'react';


const Formulario = ({guardarBusquedaLetra}) => {

    //creacion del state
    const [busqueda, guardarBusqueda] = useState({
        artista : '',
        cancion : ''
    })
    const [error, guardarError] = useState(false)

    const {artista, cancion} = busqueda

    //funcion para leer contenido
    const actualizarState = e => {
        
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
    })
    }
    const buscarInformacion = e => {
        e.preventDefault()

        if(artista.trim() === "" || cancion.trim() === ""){
            guardarError(true)
            return;
        }

        guardarError(false)
        guardarBusquedaLetra(busqueda)
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                     {
                    error ? 
                    <p className="alert alert-danger text-center p-2">
                        Todos los campos son oblogatorios
                    </p>
                    :null
                    }
                <div className="row">
                    
                    <form 
                        action=""
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                        >
                            <fieldset>
                                <legend className="text-center">Bucador letra canciones</legend>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Artista</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="artista"
                                                placeholder="Nombre de Artista"
                                                onChange={actualizarState}
                                                value={artista}
                                                />
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                            <label htmlFor="">Cancion</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre de Cancion"
                                                onChange={actualizarState}
                                                value={cancion}
                                                />
                                        </div>
                                    </div>
                                </div>
                                <button 
                                type="submit"
                                className="btn btn-primary float-right"
                                >Buscar</button>
                            </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;