import { types } from "../types/types";

const initialState = {
    tratamientos: {
        data: [],
        current_page:1,
        per_page:5,
        total:0
    },
    active: {},
   
}

export const tratamientosReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setTratamiento:
          
            return {
                ...state,
                paciente: action.payload
            }

            case types.tratamientoSelected:
          
                return {
                    ...state,
                    active: action.payload
                }

        default:
            return state;
    }



}

