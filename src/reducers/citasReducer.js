
import { types } from "../types/types";

const initialState = {
    citas: {
        data: [],
        current_page:1,
        per_page:5,
        total:0
    },
    activeEvent: null,
   
}

export const citasReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setCitas:
          
            return {
                ...state,
                citas: action.payload
            }

          

        default:
            return state;
    }



}