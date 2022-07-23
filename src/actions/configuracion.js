import { types } from "../types/types"
import { url } from "../helpers/api"
import axios from 'axios'

export const setMiClinica = (clinica) => {

    return {
      type: types.setMiClinica,
      payload: {
        ...clinica
      },
    }
  
  }

export const setMiPerfil = (perfil) => {

  return {
    type: types.setMiPerfil,
    payload: {
      ...perfil
    },
  }

}

export const setMiActive = (active) => {

  return {
    type: types.setMiActive,
    payload: {
      ...active
    },
  }

}




  export const updateMiClinica = (clinica) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth;
      const updateClinica = { ...clinica }
      delete updateClinica.id_tenant;
      await axios.put(`${url('empresas')}/${clinica.id_tenant}`, updateClinica);
      // const clientes = await getAllData('clientes');
      const miClinica = await axios.get(`${url('empresas')}/${clinica.id_tenant}`);
      dispatch(setMiClinica(miClinica.data.data));
      
    }
  
  }

export const updateFile=(clinica)=>{

  return async (dispatch, getState) => {
  
    // const {id}= getState().auth;

    const updateImagen = { ...clinica }
    delete updateImagen.id_tenant;
    await axios.put(`${url('empresas')}/update/tenant/${clinica.id_tenant}`, updateImagen);
    // const clientes = await getAllData('clientes');
    const miClinica = await axios.get(`${url('empresas')}/${clinica.id_tenant}`);
    dispatch(setMiClinica(miClinica));
    
  }

}


  export const updateMiPerfil = (perfil) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth;
      const updatePerfil = { ...perfil }
      delete updatePerfil.id;
      await axios.put(`${url('auth')}/update/${perfil.id}`, updatePerfil);
      // const clientes = await getAllData('clientes');
      const miPerfil = await axios.get(`${url('auth')}/user`);
      dispatch(setMiPerfil(miPerfil));
      
    }
  
  }


  