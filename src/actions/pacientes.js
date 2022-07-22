import { types } from "../types/types"
import { url, getDataPaginate } from "../helpers/api"
import axios from 'axios'

export const setPacientes = (pacientes) => {

  return {
    type: types.setPacientes,
    payload: pacientes,
    }

}

export const setPaciente = (paciente) => {

  return {
    type: types.pacienteSelected,
    payload: {
      ...paciente
    },
  }

}

export const store = (paciente) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth;
      const {texto}=getState().ui.search;
      const {current_page}=getState().allPacientes;
      
      const storePaciente = { ...paciente }
      delete storePaciente.id_paciente;
      const store={...storePaciente, id_tenant: 1, codigo: "EX"};
    //   console.log("Este del store",store);
      await axios.post(`${url('pacientes')}`, store).then(
        response =>{
            console.log(response);
        }
      ).catch(error=>{
        console.log(error.response);
      });
                    
      const pacientes = await getDataPaginate('pacientes',6, texto, current_page, 1);
    //   console.log("Este es de pacientes",pacientes );
  
      dispatch(setPacientes(pacientes));
    }
  
  }

  
export const destroy = (id) => {

  return async (dispatch, getState) => {
      const {texto}=getState().ui.search;
      const {current_page}=getState().allPacientes;
      await axios.delete(`${url('pacientes')}/${id}`);
    
      const pacientes = await getDataPaginate('pacientes',5, texto, current_page, 1);
      dispatch(setPacientes(pacientes));
  }
}
  export const update = (paciente) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth;
      const {texto}=getState().ui.search;
      const {current_page}=getState().allPacientes;
  
      const updateClient = { ...paciente }
      delete updateClient.id_pacientes;
      await axios.put(`${url('pacientes')}/${paciente.id_paciente}`, updateClient);
      // const clientes = await getAllData('clientes');
      const pacientes = await getDataPaginate('pacientes',6, texto, current_page,1);
      dispatch(setPacientes(pacientes));
      
    }
  
  }


