import { types } from "../types/types";

const initialState = {
    empleados: {
        data: [],
        current_page:1,
        per_page:5,
        total:0
    },
    active: {},
   
}

export const empleadosReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setEmpleados:
          
            return {
                ...state,
                empleados: action.payload
            }

            case types.empleadoSelected:
          
                return {
                    ...state,
                    active: action.payload
                }

        default:
            return state;
    }



}
