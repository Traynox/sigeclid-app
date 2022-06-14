import { types } from "../types/types";

const initialState = {
    modal: {
        tipo: '',
        nombre: '',
        vista: '',
    },
    search: {
        texto: ''
    },
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.modalStore:

            return {
                ...state,
                modal: action.payload
            }
        case types.modalUpdate:

            return {
                ...state,
                modal: action.payload
            }
        case types.setSearch:

            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }



}