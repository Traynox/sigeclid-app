import { useDispatch, useSelector } from "react-redux";
import { destroy, eventAddNew, eventClearActiveEvent, eventDeleted, eventSetActive, eventUpdated, onLoadEvents, store } from "../actions/events";
import { getCitas } from "../helpers/api";
import { ConvierteDateEvent } from "./ConvierteDateEvent";

export const useCalendarStore = ()=>{


    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector( state => state.calendar );
    const {id_tenant} = useSelector( state => state.auth.user );
    
    const {id_empleado, id_paciente, id_tratamiento} = useSelector( state => state.calendar );

    // const {data:citas,current_page,per_page,total, activeEvent} = useSelector(state => state.allCitas.citas);


    // const {data:citas,current_page,per_page,total, activeEvent} = useSelector(state => state.allCitas.citas);
    // const events =citas;
    // console.log("Estos son los eventos:",events);


    const setActiveEvent = (calendarEvent) => {
        dispatch(eventSetActive(calendarEvent))
    }

    const destruir = ()=>{
        dispatch(destroy(activeEvent.id_cita))
        dispatch(eventClearActiveEvent());
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
            dispatch(store({...calendarEvent}));
        }
    }

    const startLoadingEvents = async()=>{
        try {

          const {data} = await getCitas(`citas/tenant/${id_tenant}`);
          const events = ConvierteDateEvent({data}.data)      
          dispatch(onLoadEvents(events));
        //   console.log({data}.data);
         

                // .then(citas => {
                //   dispatch(setEvents(citas))
                // }).catch(error => {
                //   console.log(error)
                // })
            
        } catch (error) {
            console.log("Error cargarngo eventos");
            console.log(error);
        }
    }






    return {

        //* propiedades 
        activeEvent,
        // citas,
        id_empleado, 
        id_paciente, 
        id_tratamiento,
        hasEventSelected: !!activeEvent,
        events,

        //* Metodos
        startLoadingEvents,
        setActiveEvent,
        startSavingEvent,
        activeDelete,
        destruir,

    }
}