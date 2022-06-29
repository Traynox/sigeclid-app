import React from 'react'
import { useDispatch } from "react-redux";
import { setModal } from "../../actions/ui";
import "../../styles/components/empleados/empleados-style.css";
import { Modal } from "../ui/Modal";
// import { TableTratamientos } from "./TableTratamientos";
import { SearchBar } from "../ui/SearchBar";
import { TableEmpleados } from './TableEmpleados';


export const EmpleadosScreen = () => {
 
    const dispatch = useDispatch();
     const setFormData = () => {
    dispatch(
      setModal({
        tipo: "Agregar",
        nombre: "empleado",
        vista: "Empleados",
      })
    );
  };


  return (
    <>
    <Modal tipo="Agregar" nombre="empleado" />
    <div className="container pt-2">

    
    <div className="card">
      <div className="card-body">
        <div className="row">
          {/* <div className="col-md-12 pb-2 pt-2"> */}
          <div className="col-6 d-flex justify-content-start pb-4">
            <button
              type="button"
              className="btn btn-new btn-sm mx-2"
              onClick={setFormData}
              data-bs-toggle="modal"
              data-bs-target="#modalE"
            >

              <i className="bx bx-plus-circle icon mx-1"></i>
              Nuevo Empleado
            </button>
          </div>
          <div className="col-6 d-flex justify-content-end z-index-1 ">
            <SearchBar />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <TableEmpleados />
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}
