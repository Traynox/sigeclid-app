import { types } from "../types/types"
import { url, getDataPaginate } from "../helpers/api"
import axios from 'axios'

export const setEmpleados = (empleados) => {

  return {
    type: types.setEmpleados,
    payload: empleados,
    }

}

export const setEmpleado = (empleado) => {

  return {
    type: types.empleadoSelected,
    payload: {
      ...empleado
    },
  }

}

export const store = (empleado) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth;
      const {leyenda}=getState().ui.search;
      const {current_page}=getState().allEmpleados;
      
      const storeEmpleado = { ...empleado }
      delete storeEmpleado.id_empleado;
      // console.log('inserte', storeClient)
      await axios.post(`${url('empleados')}`, storeEmpleado);
                    
      const empleados = await getDataPaginate('empleados',5, leyenda, current_page, 1);
  
      dispatch(setEmpleados(empleados));
    }
  
  }