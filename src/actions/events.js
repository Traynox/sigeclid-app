import { getCitas, url } from "../helpers/api";
import { types } from "../types/types";
import axios from 'axios'


export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const store = (cita) => {

    return async (dispatch, getState) => {
      try {
         // const {id}= getState().auth;
    //   const {texto}=getState().ui.search;
    //   const {current_page}=getState().allEmpleados;
      
      const storeCita = { ...cita }
      // delete storeCita.id_empleado;
      const store={...storeCita, id_tenant: 1};
      // console.log('inserte', storeClient)
      console.log(store);
      await axios.post(`${url('citas')}`, store).then(
        response =>{
            console.log(response);
        }
      ).catch(error=>{
        console.log(error.response);
      });
                    
      dispatch(eventAddNew(citas));
      const citas = await getCitas('citas/tenant/1');
        // console.log(cita);
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