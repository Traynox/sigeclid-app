import { types } from "../types/types";

const initialState = {
    miPerfil: {
        id: '',
        name: '',
        email: '',
        password: '',

    },
    miClinica: {
        id_tenant: '',
        nombre: '',
        eslogan: '',
        direccion: '',
        telefono: '',
        imagen: '',

    },
    active: {

    }
}

export const configuracionReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setMiPerfil:

            return {
                ...state,
                miPerfil: action.payload
            }

        case types.setMiClinica:

            return {
                ...state,
                miClinica: action.payload
            }
        case types.setMiActive:

            return {
                ...state,
                active: action.payload
            }
        default:
            return state;
    }



}
