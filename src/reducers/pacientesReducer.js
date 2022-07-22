import { types } from "../types/types";

const initialState = {
    pacientes: {
        data: [],
        current_page:1,
        per_page:6,
        total:0
    },
    active: {},
   
}

export const pacientesReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setPacientes:
          
            return {
                ...state,
                pacientes: action.payload
            }

            case types.pacienteSelected:
          
                return {
                    ...state,
                    active: action.payload
                }

        default:
            return state;
    }



}

