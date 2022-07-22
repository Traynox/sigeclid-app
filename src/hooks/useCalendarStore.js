import { useDispatch, useSelector } from "react-redux";
import { eventAddNew, eventDeleted, eventSetActive, eventUpdated, store } from "../actions/events";

export const useCalendarStore = ()=>{


    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector( state => state.calendar );

    const setActiveEvent = (calendarEvent) => {
        dispatch(eventSetActive(calendarEvent))
    }

    const activeDelete = () => {
        dispatch(eventDeleted());
      }

    const startSavingEvent = async(calendarEvent)=>{
        if(calendarEvent._id){
            // Actualizadno
            console.log('Estmos actualizadno');
            dispatch(eventUpdated({...calendarEvent}));
        }else{
            // Creando
            console.log('Estamos creando ');
            // dispatch(eventAddNew({...calendarEvent, _id: new Date().getTime()}));
            dispatch(store({...calendarEvent, _id : new Date().getTime()}));
        }
    }






    return {

        //* propiedades 
        activeEvent,
        events,

        //* Metodos
        setActiveEvent,
        startSavingEvent,
        activeDelete,

    }
}