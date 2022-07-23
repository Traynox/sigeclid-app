import { types } from "../types/types";

const user = JSON.parse(sessionStorage.getItem('user'));
const initialState = {
    user: {...user,logged:!!user},
    // logged: !!user
    // ,
    login: {
        email: '',
        password: ''
    },

}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setAuth:

            return {
                ...state,
                user: action.payload
            }
        case types.login:

            return {
                ...state,
                login: action.payload
            }
      
        default:
            return state;
    }



}