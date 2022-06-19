import React from "react";
import { useSelector } from "react-redux";

export const FormTratamiento = () => {
  const { modal } = useSelector((state) => state.ui);

  return (
    <>
      <div className="container__tratamiento">
        <form className="form-group p-4 tratamiento__form">
          {/* <div className="form-row"> */}
            <div className="input-data tratamiento__campo tratamiento__campo-1">
              <input
              className="input__tratamiento descripcion"
                type="text"
                name="descripcion"
                required
                autoComplete="off"
              />
              <div className="underline"></div>
              <label>Descripcion</label>
            </div>
          {/* </div> */}
          {/* <div className="form-row"> */}
            <div className="input-data tratamiento__campo tratamiento__campo-2">
              <input
                className="input__tratamiento monto"
                type="number"
                name="monto"
                required
                autoComplete="off"
              />
              <div className="underline"></div>
              <label>Monto</label>
            </div>
          {/* </div> */}



            <div className="row">

            
          <div className="d-flex justify-content-center ">
            <div className="col-md-6 d-flex justify-content-center ">
            {modal.tipo === "Agregar" ? (
                    <button type="submit" className="btn btn-modal tratamiento__campo-3 tratamiento__boton"
                    data-bs-dismiss="modal"
                    >
                Guardar
                  </button>
               
                
            ) : (
                 
              <button
                type="submit"
                className="btn btn-modal tratamiento__campo-3 tratamiento__boton"
                
              >
                Actualizar
                </button>
            )}
            </div>
            <div className="col-md-6 d-flex justify-content-center">

            <button
              type="button"
              className="btn btn-modal tratamiento__campo-4 tratamiento__boton"
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
  );
};
