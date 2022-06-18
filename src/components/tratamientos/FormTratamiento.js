import React from "react";
import { useSelector } from "react-redux";

export const FormTratamiento = () => {
  const { modal } = useSelector((state) => state.ui);

  return (
    <>
      <div className="container ">
        <form className="form-group p-4">
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="descripcion"
                value="descripcion"
                required
                autoComplete="off"
              />
              <div className="underline"></div>
              <label>Descripcion</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="number"
                name="monto"
                value="1"
                required
                autoComplete="off"
              />
              <div className="underline"></div>
              <label>Monto</label>
            </div>
          </div>



            <div className="row">

            
          <div className="d-flex justify-content-center ">
            <div className="col-md-6 d-flex justify-content-center ">
            {modal.tipo === "Agregar" ? (
                    <button type="submit" className="btn btn-modal btn-success">
                Guardar
                  </button>
               
                
            ) : (
                 
              <button
                type="submit"
                className="btn btn-modal btn-success"
                data-bs-dismiss="modal"
              >
                Actualizar
                </button>
            )}
            </div>
            <div className="col-md-6 d-flex justify-content-center">

            <button
              type="button"
              className="btn btn-modal btn-danger "
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
