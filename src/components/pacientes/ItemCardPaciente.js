import React from "react";
import { useDispatch } from "react-redux";
import { setPaciente } from "../../actions/pacientes";
import { setModal } from "../../actions/ui";

export const ItemCardPaciente = React.memo((paciente) => {

  const dispatch = useDispatch();

  const prueba = () => {
    console.log(paciente.nombre);



  };

  
  const setFormData = () => {

    dispatch(setPaciente(paciente));
    dispatch(
      setModal({
        tipo: "Editar",
        nombre: "paciente",
        vista: "Pacientes",
      })
    );
  };
  const pacienteVer = () => {

    dispatch(setPaciente(paciente));
    dispatch(
      setModal({
        tipo: "",
        nombre: "pacienteVer",
        vista: "Pacientes",
      })
    );
  };

  

  return (
    <>
      <div className="col-lg-4 col-sm-6 pb-3" onClick={prueba}>
        <div className="card" >
          <div
            className="mx-auto text-center"
            style={{ width: 90, height: 90, marginTop: "-45px" }}
          >
            <i className="fa-solid fa-folder-open fa-3x head-icon"></i>
          </div>
          <div className="card-body d-flex justify-content-center text-center">
            <a
              className=""
              data-toggle="dropdown"
              data-dismiss="dropdown"
              aria-expanded="false"
            >
              <h3 className="card-title pt-1">
                {paciente.nombre} {paciente.apellido_uno}{" "}
                {paciente.apellido_dos} {paciente.cedula}
              </h3>
            </a>

            <ul className="dropdown-menu ">
              <li>
                <a
                  data-toggle="modal"
                  data-target="#modalE"
                   onClick={setFormData}
                  // data-target="#exampleModalEdit{{ $item->id_articulo }}"
                  className="btn btn-md text-decorated-none dropdown-item"
                >
                  <i className="fas fa-edit mx-1"></i>
                  Editar
                </a>
              </li>

              <li>
                <a
                  data-toggle="modal"
                  data-target="#modalE"

                  // data-target="#exampleModal{{ $item->id_articulo }}"
                  className="btn btn-md  text-decorated-none dropdown-item "
                  onClick={pacienteVer}
                >
                  <i className="fas fa-eye mx-1"></i>
                  Ver
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
