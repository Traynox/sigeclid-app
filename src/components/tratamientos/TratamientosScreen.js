import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../actions/ui";
import { Modal } from "../ui/Modal";
// import "../../../src/styles/components/tratamientos/tratamientos-style.css";
import { TableTratamientos } from "./TableTratamientos";

export const TratamientosScreen = () => {
  const dispatch = useDispatch();
  const setFormData = () => {

    dispatch(
      setModal({
        tipo: "Agregar",
        nombre: "tratamiento",
        vista: "Tratamientos"
      })
    );
  };
  return (
    <>

    <Modal tipo="Agregar" nombre="tratamiento" />

      <div className="container">
        <div className="row">
          <div className="col-md-12 pb-2 pt-2">
            <div className="bottom mx-auto col-4 d-flex justify-content-center">
              <button type="button" className="btn btn-primary btn-sm mx-2" onClick={setFormData}
              data-bs-toggle="modal"
              data-bs-target="#modalE">
                <i className="fa-solid fa-arrows-rotate mx-1"></i>
                Nuevo
              </button>
              <button type="button" className="btn btn-success btn-sm mx-2">
                <i className="fa-solid fa-cart-shopping mx-1"></i>
                Agregar
              </button>
              <button type="button" className="btn btn-secondary btn-sm mx-2">
                <i className="fa-solid fa-floppy-disk mx-1"></i>
                Registrar
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <TableTratamientos />
          </div>
        </div>
      </div>
    </>
    // <div className="text">
    //   <div className="card-cont">
    //     <div className="container">
    //       <div className="col">
    //         <div className="card-container">
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="card">
    //             <h4>Ortodoncia</h4>
    //             <span className="chev">&rsaquo;</span>
    //           </div>
    //         </div>

    //         <div className="card-container">
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="card">
    //             <h4>Exodoncia y Cirugía</h4>
    //             <span className="chev">&rsaquo;</span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card-container">
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="card">
    //             <h4>Limpieza Dental</h4>
    //             <span className="chev">&rsaquo;</span>
    //           </div>
    //         </div>

    //         <div className="card-container">
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="card">
    //             <h4>Unidad de Endodoncia</h4>
    //             <span className="chev">&rsaquo;</span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card-container">
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="card">
    //             <h4>Unidad de Radiologia</h4>
    //             <span className="chev">&rsaquo;</span>
    //           </div>
    //         </div>

    //         <div className="card-container">
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="overlay"></div>
    //           <div className="card">
    //             <h4>Area de Periodoncia </h4>
    //             <span className="chev">&rsaquo;</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
