import { createStore,combineReducers,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { empleadosReducer } from '../reducers/empleadosReducer';
import { pacientesReducer } from '../reducers/pacientesReducer'
import { tratamientosReducer } from '../reducers/tratamientosReducer'
import { uiReducer } from '../reducers/uiReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({

    allPacientes: pacientesReducer,
    allEmpleados: empleadosReducer,
    allTratamientos: tratamientosReducer,
    ui: uiReducer,
})


export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
    );

 