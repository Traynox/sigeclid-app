import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { setModal } from "../../actions/ui";
import { ItemPaciente } from "./ItemPaciente";

export const SearchPaciente = () => {
  const [pacientes, setPacientes] = useState([]);
  const [tablaPacientes, setTablaPacientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const { id_paciente } = useSelector((state) => state.calendar);
  // const dispatch = useDispatch();

  const peticionGet = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/pacientes")
      .then((response) => {
        // console.log("este es el pacientes",response.data.data);
        setPacientes(response.data.data);
        setTablaPacientes(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };


  // const setFormData = () => {
  //   dispatch(
  //     setModal({
  //       tipo: "Agregar",
  //       nombre: "paciente",
  //       vista: "Pacientes",
  //     })
  //   );
  // };

  const filtrar = (terminoBusqueda) => {
    var resultados = tablaPacientes.filter((elemento) => {
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
    setPacientes(resultados);
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
              {id_paciente.nombre === undefined ? (
                " "
              ) : (
                <div>
                  {" "}
                  {id_paciente.nombre} {id_paciente.apellido_uno}{" "}
                  <i className="fa-solid fa-check text-success"></i>
                </div>
              )}
            </label>
            {/* <input 
                type="text" 
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Busqueda por nombre o cedula"
                /> */}
          
                <div className="search">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar..."
                    //   name="texto"
                    onChange={handleInputChange}
                    value={busqueda}
                  />
                </div>
           
          </div>
        </div>
        <div className="row tama">
          <div className="table-responsive overflow-auto h-75">
            <table
              className="table table-hover tbale-sm table-bordered "
              id="tabla"
            >
              <thead>
                <tr>
                  <th hidden></th>
                  <th hidden></th>
                  <th hidden></th>
                  <th hidden></th>
                </tr>
              </thead>
              <tbody>
                {pacientes.map((paciente) => (
                  <ItemPaciente key={paciente.id_paciente} {...paciente} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
