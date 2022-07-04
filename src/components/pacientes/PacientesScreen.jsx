import React from 'react'
import { useDispatch } from 'react-redux';
import { setModal } from '../../actions/ui';
import '../../styles/components/pacientes/pacientes.css';
import { Modal } from '../ui/Modal';
import { SearchBar } from '../ui/SearchBar';
import { CardsPacientes } from './CardsPacientes';
import TablaPaciente from './TablaPaciente';
const PacientesScreen = () => {
  const dispatch = useDispatch();
  const setFormData = () => {
    dispatch(
      setModal({
        tipo: "Agregar",
        nombre: "paciente",
        vista: "Pacientes",
      })
    );
  };
  return (
    <>
      <Modal tipo="Agregar" nombre="paciente" />
      <div className="container pt-2">
        {/* <div className="pacientes__header">
          <h1 className="pacientes__titulo ">Pacientes</h1>
        </div> */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                {/* <div className="col-md-12 pb-2 pt-2"> */}
                <div className="col-6 d-flex justify-content-start pb-4">
                  <button
                    type="button"
                    className="btn btn-new btn-sm mx-2"
                    onClick={setFormData}
                    data-toggle="modal"
                    data-target="#modalE">
                    <i className="bx bx-plus-circle icon mx-1"></i>
                    Nuevo Paciente
                  </button>
                </div>
                <div className="col-6 d-flex justify-content-end ">
              <SearchBar />
            </div>
              </div>

              <div className="row">
            <div className="col-md-12">
            {/* <TablaPaciente /> */}
            <CardsPacientes />
            </div>
          </div>
            </div>
          </div>
        </div>
    </>

  );
}

export default PacientesScreen
