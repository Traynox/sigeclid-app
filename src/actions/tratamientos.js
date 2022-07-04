import { types } from "../types/types"
import { url, getDataPaginate } from "../helpers/api"
import axios from 'axios'

export const setTratamientos = (tratamientos) => {

  return {
    type: types.setTratamientos,
    payload: tratamientos,
    }

}

export const setTratamiento = (tratamiento) => {

  return {
    type: types.tratamientoSelected,
    payload: {
      ...tratamiento
    },
  }

}

export const store = (tratamiento) => {

  return async (dispatch, getState) => {

    // const {id}= getState().auth;
    const {texto}=getState().ui.search;
    const {current_page}=getState().allTratamientos;
    
    const storeTratamiento = { ...tratamiento }
    delete storeTratamiento.id_tratamiento;
    const store={...storeTratamiento, id_tenant: 1};
   
    // console.log(store);
    await axios.post(`${url('tratamientos')}`, store);
                  
    const tratamientos = await getDataPaginate('tratamientos',5, texto, current_page,1); //ultimo numero es el numero de tenant

    dispatch(setTratamientos(tratamientos));
  }

}

export const update = (tratamiento) => {

  return async (dispatch, getState) => {

    // const {id}= getState().auth;
    const {texto}=getState().ui.search;
    const {current_page}=getState().allTratamientos;

    const updateTratamiento = { ...tratamiento }
    delete updateTratamiento.id_tratamiento;

    const update={...updateTratamiento, id_tenant: 1};

    // console.log(update);
    await axios.put(`${url('tratamientos')}/${tratamiento.id_tratamiento}`, update);
    // const clientes = await getAllData('clientes');
    const tratamientos = await getDataPaginate('tratamientos',5, texto, current_page,1);
    dispatch(setTratamientos(tratamientos));
    
  }

}

export const destroy = (id) => {

  return async (dispatch, getState) => {

    const {texto}=getState().ui.search;
    const {current_page}=getState().allTratamientos;
    
    await axios.delete(`${url('tratamientos')}/${id}`);
    const tratamientos = await getDataPaginate('tratamientos',5, texto, current_page,1);
    // const clientes = await getAllData('clientes');
    dispatch(setTratamientos(tratamientos));
  }

}