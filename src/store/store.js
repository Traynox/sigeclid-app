import { createStore,combineReducers,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { calendarReducer } from '../reducers/calendarReducer';
import { citasReducer } from '../reducers/citasReducer';
import { empleadosReducer } from '../reducers/empleadosReducer';
import { pacientesReducer } from '../reducers/pacientesReducer'
import { tratamientosReducer } from '../reducers/tratamientosReducer'
import { configuracionReducer } from '../reducers/configuracionReducer'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    allCitas: citasReducer,
    allPacientes: pacientesReducer,
    allEmpleados: empleadosReducer,
    allTratamientos: tratamientosReducer,
    configuracion: configuracionReducer,
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer,
    

})


export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
    );

 