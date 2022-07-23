import { addHours } from 'date-fns';
import { types } from '../types/types';


const initialState = {

    cargandoEvents: true,
    id_empleado: {},
    id_paciente: {},
    id_tratamiento: {},

    events:[
        
        // {
        //        data: [],

        // }
          

        //   {
        //     _id: new Date().getTime(),
        //     id_paciente: '2',
        //     id_empleado: '2',
        //     start: new Date(),
        //     end: addHours(new Date(), 1),
        //     id_tratamiento: '1',
        //     comentario: 'x comentario',
        //     id_tenant: '1'
        //     // user : {
        //     //   _id: '123',
        //     //   name: 'Carlos',
        //     // }
        //   },
        //   {
        //     _id: new Date().getTime(),
        //     id_paciente: '2',
        //     id_empleado: '2',
        //     start: new Date(),
        //     end: addHours(new Date(), 1),
        //     id_tratamiento: '1',
        //     comentario: 'x comentario',
        //     id_tenant: '1'
        //     // user : {
        //     //   _id: '123',
        //     //   name: 'Carlos',
        //     // }
        //   },
        //   {
        //     _id: new Date().getTime(),
        //     id_paciente: '2',
        //     id_empleado: '2',
        //     start: new Date(),
        //     end: addHours(new Date(), 1),
        //     id_tratamiento: '1',
        //     comentario: 'x comentario',
        //     id_tenant: '1'
        //     // user : {
        //     //   _id: '123',
        //     //   name: 'Carlos',
        //     // }
        //   },
        
    ],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.setEvents:
            
            return {
                ...state,
                events: action.payload
            }

            case types.cambiaIdEmpleado:
            
            return {
                ...state,
                id_empleado: action.payload
            }

            case types.cambiaIdTratamiento:
            
            return {
                ...state,
                id_tratamiento: action.payload
            }

            case types.cambiaIdPaciente:
            
            return {
                ...state,
                id_paciente: action.payload
            }

            case types.loadEvents:
            
            return {
                ...state,
                cargandoEvents:false,
                events:action.payload

            }

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload 
            }

            case types.eventAddNew:
            return {
                ...state,
                events:[
                    ...state.events,
                    action.payload
                ]
            }

            case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }
            
            case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    event => (event.id === action.payload.id) ? action.payload : event
                    )
            }

            case types.eventDeleted:
                return {
                    ...state,
                    events: state.events.filter(
                        event => (event.id !== state.activeEvent.id) 
                        ),
                        activeEvent: null
                }

        default:
            return state;
    }
}