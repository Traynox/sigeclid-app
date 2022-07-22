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
         // const {id}= getState().auth;
    //   const {texto}=getState().ui.search;
    //   const {current_page}=getState().allEmpleados;
      
      const storeCita = { ...cita }
      const store={...storeCita, id_tenant: 1};
       await axios.post(`${url('citas')}`, store).then(
        response =>{
            console.log(response);
        }
      ).catch(error=>{
        console.log(error.response);
      });
                
      const {data} = await getCitas(`citas/tenant/1`);
      const events = ConvierteDateEvent({data}.data)      
      dispatch(onLoadEvents(events));

      } catch (error) {
        console.log(error);
      }
     
    }
  
  }

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
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