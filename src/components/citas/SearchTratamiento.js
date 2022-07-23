import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ItemTratamiento } from "./ItemTratamiento";

export const SearchTratamiento = () => {

  const [tratamientos, setTratamientos] = useState([]);
  const [tablaTratamientos, setTablaTratamientos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const {id_tratamiento} = useSelector( state => state.calendar );

 
  const peticionGet = async () => {

    await axios
      .get("http://127.0.0.1:8000/api/tratamientos")
      .then((response) => {
        // console.log("Este es el tratamiento",response.data.data);
        setTratamientos(response.data.data);
        setTablaTratamientos(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    // console.log(Tratamientos);
    var resultados = tablaTratamientos.filter(elemento => {
      if (
        elemento.descripcion
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setTratamientos(resultados);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row pb-2">
          <div className="containerInput">
          <label className="">
          {id_tratamiento.descripcion===undefined ? ' ' :   <div> {id_tratamiento.descripcion} <i className="fa-solid fa-check text-success"></i></div> }
              </label>
            {/* <input 
                type="text" 
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Busqueda por nombre o cedula"
                /> */}

            <div className="search">
              {/* <form > */}
              <input
                type="text"
                className="search-input"
                placeholder="Buscar..."
                //   name="texto"
                onChange={handleInputChange}
                value={busqueda}
              />
              {/* <button type="submit" className="search-icon">
                {" "}
                <i className="fa fa-search"></i>{" "}
              </button> */}
              {/* </form> */}
            </div>
          </div>
        </div>
        <div className="row tama" >
          <div className="table-responsive overflow-auto h-75">
            <table
              className="table table-hover tbale-sm table-bordered "
              id="tabla"
            >
              <thead>
                <tr>
                  <th hidden></th>
                  <th hidden></th>
                  
                </tr>
              </thead>
              <tbody>
                {tratamientos.map((tratamiento) => (
                  <ItemTratamiento key={tratamiento.id_tratamiento} {...tratamiento}  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
