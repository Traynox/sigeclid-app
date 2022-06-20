
import { FormEmpleado } from '../components/empleados/FormEmpleado';
import { FormTratamiento } from '../components/tratamientos/FormTratamiento';

export const devuelveForm = (nombre) => {

    switch (nombre) {
        case 'tratamiento':
            return (<FormTratamiento />)

            case 'empleado':
            return (<FormEmpleado />)
        
        
        default:
            return <h1>necesita un "nombre" para mostrar form</h1>;
    }

}
