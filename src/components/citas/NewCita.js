import { addHours } from "date-fns";
import moment from "moment";
import React from "react";
import { setModal } from "../../actions/ui";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

export const NewCita = () => {
  const { openCitaModal } = useUiStore();
  const { setActiveEvent} = useCalendarStore();
  

  const setFormData = () => {
    setActiveEvent({
      start: new Date(),

      end: addHours(new Date(), 1),
      // user: {
      //   _id: "123",
      //   name: "Juan",
      // },

      id_paciente: "",
      id_empleado: "",
      id_tratamiento: "",
      comentario: "",
    });
    openCitaModal();
  };

  return (
    <>
      <div className="row">
        {/* <div className="col-md-12 pb-2 pt-2"> */}
        <div className="col-6 d-flex justify-content-start pb-4">
          <button
            type="button"
            className="btn btn-new btn-sm mx-2"
            onClick={setFormData}
            data-toggle="modal"
            data-target="#modalE"
          >
            <i className="bx bx-plus-circle icon mx-1"></i>
            Nueva Cita
          </button>
        </div>
        <div className="col-6 d-flex justify-content-end z-index-1 ">
          {/* <SearchBar /> */}
        </div>
      </div>
    </>
  );
};
