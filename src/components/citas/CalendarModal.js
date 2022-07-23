import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import "../../styles/components/citas/citas-style.css";
// import styles from  "../../styles/components/citas/citas-style.module.css";


import { addHours, differenceInSeconds } from "date-fns";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import es from "date-fns/locale/es";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import moment from "moment";
import { SearchPaciente } from "./SearchPaciente";
import { SearchEmpleado } from "./SearchEmpleado";
import { SearchTratamiento } from "./SearchTratamiento";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {



  const { citaModal, closeCitaModal } = useUiStore();

  const { activeEvent, startSavingEvent} = useCalendarStore();

  const initEvent = {
    // id_paciente: id_paciente,
    // id_empleado: id_empleado,
    // id_tratamiento: id_tratamiento,
    comentario: "x comentario",

    start: new Date(),
    end: addHours(new Date(), 2),
  };

  const [formValues, setFormValues] = useState(initEvent);

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent });
    }
  }, [activeEvent]);

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const handledInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      console.log("error en las fechas");
      Swal.fire("Fechas incorrectas", "Revisar las fechas ingresadas", "error");
      return;
    }

 


    await startSavingEvent(formValues);
    closeCitaModal();
  };

  const onCloseModal = () => {
    console.log("Cerrando modal");
    closeCitaModal();
  };

  return (
    <Modal
      isOpen={citaModal.isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      // className={styles.modal}
      className="modal"
      overlayClassName="modal_fondo"
      closeTimeoutMS={200}
    >
      <h4 className="d-flex justify-content-center"> Nueva Cita </h4>
      <hr />

      <form className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-2 ">
              <label className="text-primary">Fecha y hora inicio</label>
              <ReactDatePicker
                // showTimeSelect
                dateFormat="MMMM d, yyyy / h:mm aa"

                selected={formValues.start}
                className="form-control"
                onChange={(event) => onDateChanged(event, "start")}
                value={formValues.start}
                timeInputLabel="Hora:"
                showTimeInput
                // isClearable

                // minDate={formValues.start}
                // locale={es}
                // timeCaption="Hora"
              />
            </div>

            <div className="form-group mb-2">
              <label className="text-primary">Fecha y hora fin</label>

              <ReactDatePicker
                // showTimeSelect
                dateFormat="MMMM d, yyyy / h:mm aa"
                selected={formValues.end}
                className="form-control"
                onChange={(event) => onDateChanged(event, "end")}
                value={formValues.end}
                timeInputLabel="Hora:"
                showTimeInput

              
                // locale={es}
                // minDate={formValues.start}
                // timeCaption="Hora"
              />
            </div>

            <hr />
            <div className="form-group mb-2 border">
              <label className="text-primary">Tratamiento y comentario</label>
              {/* <input
                type="text"
                className={`form-control `}
                placeholder="Tratamiento"
                name="id_tratamiento"
                autoComplete="off"
                value={id_tratamiento}
                onChange={handledInputChange}
              /> */}
              <SearchTratamiento />
              {/* <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
              </small> */}
            </div>

            <div className="form-group mb-2 ">
              <textarea
                type="text"
                className="form-control"
                placeholder="Comentario"
                rows="3"
                name="comentario"
                value={formValues.comentario}
                onChange={handledInputChange}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">
                Información adicional
              </small>
            </div>
          </div>
          <div className="col-6">
            {/*
                //* -------------------------------Paciente-------------------------
             */}
            <div className="form-group mb-2 border">
              <label className="text-primary">Paciente</label>
              {/* <input
                type="text"
                className={`form-control`}
                placeholder="Paciente"
                name="id_paciente"
                autoComplete="off"
                value={id_paciente}
                onChange={handledInputChange}
                /> */}
                <SearchPaciente/>
              {/* <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
              </small> */}
            </div>

            {/*
                //* -------------------------------Paciente////-------------------------
             */}

            {/*
                //* -------------------------------Empleado-------------------------
             */}
            <div className="form-group mb-2 border">
              <label className="text-primary">Empleado</label>
              {/* <input
                type="text"
                className={`form-control `}
                placeholder="Empleado"
                name="id_empleado"
                autoComplete="off"
                value={id_empleado}
                onChange={handledInputChange}
              /> */}
              <SearchEmpleado />
              {/* <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
              </small> */}
            </div>

            {/*
                //* -------------------------------Empleado////-------------------------
             */}
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
