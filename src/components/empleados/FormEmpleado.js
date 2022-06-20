import React from 'react'
import { useSelector } from "react-redux";


export const FormEmpleado = () => {
    const { modal } = useSelector((state) => state.ui);

  return (
    <>
     <div className="container__empleado">
        <form className="form-group p-4 empleado__form">
          {/* <div className="form-row"> */}
            <div className="input-data empleado__campo empleado__campo-1">
              <input
              className="input__empleado nombre"
                type="text"
                name="nombre"
                required
                autoComplete="off"
              />
              <label>Nombre</label>
            </div>

            <div className="input-data empleado__campo empleado__campo-2">
              <input
              className="input__empleado cedula"
                type="text"
                name="cedula"
                required
                autoComplete="off"
              />
              <label>Cedula</label>
            </div>

            <div className="input-data empleado__campo empleado__campo-3">
              <input
              className="input__empleado telefono"
                type="text"
                name="telefono"
                required
                autoComplete="off"
              />
              <label>Telefono</label>
            </div>

            <div className="input-data empleado__campo empleado__campo-4">
              <input
              className="input__empleado direccion"
                type="text"
                name="direccion"
                required
                autoComplete="off"
              />
              <label>Direccion</label>
            </div>

            <div className="input-data empleado__campo empleado__campo-5">
              <input
              className="input__empleado ocupacion"
                type="text"
                name="ocupacion"
                required
                autoComplete="off"
              />
              <label>Ocupacion</label>
            </div>
            
          
            <div className="row">

            
          <div className="d-flex justify-content-center ">
            <div className="col-md-6 d-flex justify-content-center ">
            {modal.tipo === "Agregar" ? (
                    <button type="submit" className=" empleado__campo-7 empleado__boton"
                    data-bs-dismiss="modal"
                    >
                Guardar
                  </button>
               
                
            ) : (
                 
              <button
                type="submit"
                className="empleado__campo-7 empleado__boton"
                
              >
                Actualizar
                </button>
            )}
            </div>
            <div className="col-md-6 d-flex justify-content-center">

            <button
              type="button"
              className="empleado__campo-8 empleado__boton"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
          </div>

          </div>

          {/* <div className="form-row ">
      <div className="input-data textarea">
        <textarea rows="8" cols="80" required></textarea>

        <div className="underline"></div>
        <label for="">Write your message</label>

      </div>
    </div> */}
        </form>
      </div>
    </>
  )
}
