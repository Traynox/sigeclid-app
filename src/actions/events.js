import { getCitas, url } from "../helpers/api";
import { types } from "../types/types";
import axios from 'axios'
import { ConvierteDateEvent } from "../hooks/ConvierteDateEvent";
import { useCalendarStore } from "../hooks/useCalendarStore";

export const setEvents = (events) => {

  return {
    type: types.setEvents,
    payload: events,
    }

}

export const onLoadEvents = (events = []) => {

  return {
    type: types.loadEvents,
    payload: events,
    }

}

export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const store = (cita) => {

  // const {startLoadingEvents} = useCalendarStore();
 


    return async (dispatch, getState) => {
      try {

        const {id_tratamiento: id_t, id_empleado:id_e, id_paciente: id_p} = getState().calendar;
        const tenant = getState().auth.user.id_tenant;
        //  const {id}= getState().auth;
    //   const {texto}=getState().ui.search;
    //   const {current_page}=getState().allEmpleados;
      
      const storeCita = { ...cita }
      const store={...storeCita, id_tenant: tenant, id_tratamiento: id_t.id_tratamiento, id_empleado: id_e.id_empleado, id_paciente: id_p.id_paciente};
       await axios.post(`${url('citas')}`, store).then(
        response =>{
            console.log(response);
        }
      ).catch(error=>{
        console.log(error.response);
      });
                
      
      const {data} = await getCitas(`citas/tenant/${tenant}`);
      const events = ConvierteDateEvent({data}.data)      
      dispatch(onLoadEvents(events));

      } catch (error) {
        console.log(error);
      }
     
    }
  
  }

  export const destroy = (id) => {

    return async (dispatch, getState) => {
        await axios.delete(`${url('citas')}/${id}`);
        const tenant = getState().auth.user.id_tenant;
        const {data} = await getCitas(`citas/tenant/${tenant}`);
        const events = ConvierteDateEvent({data}.data)      
        dispatch(onLoadEvents(events));
    }
  }

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const cambiaIdEmpleado = (id_empleado) => ({
  type: types.cambiaIdEmpleado,
  payload: id_empleado
});

export const cambiaIdPaciente = (id_paciente) => ({
  type: types.cambiaIdPaciente,
  payload: id_paciente
});

export const cambiaIdTratamiento = (id_tratamiento) => ({
  type: types.cambiaIdTratamiento,
  payload: id_tratamiento
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
});

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({
    type: types.eventDeleted
});