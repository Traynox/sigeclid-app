import { types } from "../types/types"
import { url } from "../helpers/api"
import axios from 'axios'

export const setAuth = (auth) => {

    return {
      type: types.setAuth,
      payload: {
        ...auth
      },
    }
  
  }
  // export const setLogged = (estado) => {

  //   return {
  //     type: types.setLogged,
  //     payload: {
  //       ...estado
  //     },
  //   }
  
  // }
  export const setLogin = (credenciales) => {

    return {
      type: types.login,
      payload: {
        ...credenciales
      },
    }
  
  }

export const endLogin=(auth)=>{
  return async (dispatch, getState) => {

    const token=sessionStorage.getItem('token');

  await axios.post(`${url('auth/logout')}`,{
      headers: {
          'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      }
    }).then(res=>{
      console.log(res,"logout");
    }).catch(err=>{
      console.log(err);
    });
      sessionStorage.clear();
      dispatch(setAuth({...auth,logged:false}));
     
  }
}

export const startLogin = (credenciales) => {

    return async (dispatch, getState) => {
  
      // const {id}= getState().auth
    
   if(sessionStorage.getItem('token')==null){
     const {data}= await axios.post(`${url('auth/login')}`,credenciales);
      
       sessionStorage.setItem('token',JSON.stringify(data.token));
   }

   const token=JSON.parse(sessionStorage.getItem('token'));
  
      const {data:auth} = await axios.post(`${url('auth/user')}`,{},{
        headers: {
            'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      sessionStorage.setItem('user',JSON.stringify(auth.user));
     
      dispatch(setAuth({...getUser(),logged:!!getUser()}))
     
      // dispatch(setAuth({...auth.user,logged:true}));
      dispatch(setLogin({email:'',password:''}));
     
    }
  
  }

  export const getUser=()=>{
   
    const user=JSON.parse(sessionStorage.getItem('user'));
    return user;
  }

 