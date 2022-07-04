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
      const {texto}=getState().ui.search;
      const {current_page}=getState().allEmpleados;
      
      const storeEmpleado = { ...empleado }
      delete storeEmpleado.id_empleado;
      const store={...storeEmpleado, id_tenant: 1};
      // console.log('inserte', storeClient)
      console.log(store);
      await axios.post(`${url('empleados')}`, store);
                    
      const empleados = await getDataPaginate('empleados',5, texto, current_page, 1);
  
      dispatch(setEmpleados(empleados));
    }
  
  }

  
export const destroy = (id) => {

  return async (dispatch, getState) => {
      const {texto}=getState().ui.search;
      const {current_page}=getState().allEmpleados;
      await axios.delete(`${url('empleados')}/${id}`);
    
      const empleados = await getDataPaginate('empleados',5, texto, current_page, 1);
      dispatch(setEmpleados(empleados));
  }
}
  export const update = (empleado) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth;
      const {texto}=getState().ui.search;
      const {current_page}=getState().allEmpleados;
  
      const updateClient = { ...empleado }
      delete updateClient.id_empleado;
      await axios.put(`${url('empleados')}/${empleado.id_empleado}`, updateClient);
      // const clientes = await getAllData('clientes');
      const empleados = await getDataPaginate('empleados',5, texto, current_page,1);
      dispatch(setEmpleados(empleados));
      
    }
  
  }


