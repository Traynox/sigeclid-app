import { types } from "../types/types"
// import { url, getDataPaginate } from "../helpers/api"
import axios from 'axios'

export const setClientes = (pacientes) => {

  return {
    type: types.setPacientes,
    payload: pacientes,
    }

}

export const setCliente = (paciente) => {

  return {
    type: types.pacienteSelected,
    payload: {
      ...paciente
    },
  }

}

export const store = (cliente) => {

//   return async (dispatch, getState) => {

//     // const {id}= getState().auth;
//     const {leyenda}=getState().ui.search;
//     const {current_page}=getState().allClientes;
    
//     const storeClient = { ...cliente }
//     delete storeClient.id_cliente;
//     console.log('inserte', storeClient)
//     await axios.post(`${url('clientes')}`, storeClient);
                  
//     const clientes = await getDataPaginate('clientes',5, leyenda, current_page);

//     dispatch(setClientes(clientes));
//   }

}


export const update = (cliente) => {

//   return async (dispatch, getState) => {

//     // const {id}= getState().auth;
//     const {leyenda}=getState().ui.search;
//     const {current_page}=getState().allClientes;

//     const updateClient = { ...cliente }
//     delete updateClient.id_cliente;
//     await axios.put(`${url('clientes')}/${cliente.id_cliente}`, updateClient);
//     // const clientes = await getAllData('clientes');
//     const clientes = await getDataPaginate('clientes',5, leyenda, current_page);
//     dispatch(setClientes(clientes));
    
//   }

}
export const destroy = (id) => {

//   return async (dispatch, getState) => {

//     const {leyenda}=getState().ui.search;
//     const {current_page}=getState().allClientes;
    
//     await axios.delete(`${url('clientes')}/${id}`);
//     const clientes = await getDataPaginate('clientes',5, leyenda, current_page);
//     // const clientes = await getAllData('clientes');
//     dispatch(setClientes(clientes));
//   }

}