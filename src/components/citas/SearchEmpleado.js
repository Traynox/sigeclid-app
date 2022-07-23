import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ItemEmpleado } from "./ItemEmpleado";

export const SearchEmpleado = () => {

  const [empleados, setEmpleados] = useState([]);
  const [tablaEmpleados, setTablaEmpleados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const {id_empleado} = useSelector( state => state.calendar );

  



 
  const peticionGet = async () => {

    await axios
      .get("http://127.0.0.1:8000/api/empleados")
      .then((response) => {
        // console.log("Este es el empleado",response.data.data);
        setEmpleados(response.data.data);
        setTablaEmpleados(response.data.data);
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
    // console.log(empleados);
    var resultados = tablaEmpleados.filter(elemento => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.cedula
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setEmpleados(resultados);
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
              {id_empleado.nombre===undefined ? ' ' :   <div> {id_empleado.nombre} <i className="fa-solid fa-check text-success"></i></div> }
             
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
                {empleados.map((empleado) => (
                  <ItemEmpleado key={empleado.id_empleado} {...empleado}  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
