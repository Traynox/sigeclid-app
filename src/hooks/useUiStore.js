import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../actions/ui";

export const useUiStore = () =>{

    const dispatch = useDispatch();
    
    const {
        citaModal
    } = useSelector( state => state.ui );

    const openCitaModal = () => {
        dispatch(modalAction({
            isDateModalOpen: true
        }))
    }

    const closeCitaModal = () => {
        dispatch(modalAction({
            isDateModalOpen: false
        }))
    }



    return {

        //* Propiedades
        citaModal,

        //* Metodos
        openCitaModal,
        closeCitaModal,
        


    }

}