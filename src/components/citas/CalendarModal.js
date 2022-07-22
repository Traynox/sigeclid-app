import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
// import styles from  "../../styles/components/citas/citas-style.css";
import "../../styles/components/citas/citas-style.css";

import { addHours, differenceInSeconds } from "date-fns";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import es from "date-fns/locale/es";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import moment from "moment";

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

  const { activeEvent, startSavingEvent } = useCalendarStore();

  const initEvent = {
    id_paciente: "2",
    id_empleado: "2",
    id_tratamiento: "1",
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
    console.log(moment().format());
    event.preventDefault();
    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      console.log("error en las fechas");
      Swal.fire("Fechas incorrectas", "Revisar las fechas ingresadas", "error");
      return;
    }

    if (
      formValues.id_tratamiento.length <= 0 ||
      formValues.id_paciente.length <= 0 ||
      formValues.id_empleado.length <= 0
    )
      return;

    // console.log(formValues);

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
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h4 className="d-flex justify-content-center"> Nueva Cita </h4>
      <hr />

      <form className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-2">
              <label>Fecha y hora inicio</label>
              <ReactDatePicker
                // showTimeSelect
                dateFormat="MMMM d, yyyy / h:mm aa"

                selected={formValues.start}
                className="form-control"
                onChange={(event) => onDateChanged(event, "start")}
                value={formValues.start}
                timeInputLabel="Hora:"
                showTimeInput
                isClearable

                // minDate={formValues.start}
                // locale={es}
                // timeCaption="Hora"
              />
            </div>

            <div className="form-group mb-2">
              <label>Fecha y hora fin</label>

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
            <div className="form-group mb-2">
              <label>Detalles de citas</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="Tratamiento"
                name="id_tratamiento"
                autoComplete="off"
                value={formValues.id_tratamiento}
                onChange={handledInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
              </small>
            </div>

            <div className="form-group mb-2">
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
            <div className="form-group mb-2">
              <label>Paciente</label>
              <input
                type="text"
                className={`form-control`}
                placeholder="Paciente"
                name="id_paciente"
                autoComplete="off"
                value={formValues.id_paciente}
                onChange={handledInputChange}
              />
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
            <div className="form-group mb-2">
              <label>Empleado</label>
              <input
                type="text"
                className={`form-control `}
                placeholder="Empleado"
                name="id_empleado"
                autoComplete="off"
                value={formValues.id_empleado}
                onChange={handledInputChange}
              />
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
