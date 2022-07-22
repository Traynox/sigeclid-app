
import { FormEmpleado } from '../components/empleados/FormEmpleado';
import PacientesAddNew from '../components/pacientes/PacientesAddNew';
import { VerPaciente } from '../components/pacientes/VerPaciente';
import { FormTratamiento } from '../components/tratamientos/FormTratamiento';

export const devuelveForm = (nombre) => {

    switch (nombre) {
        case 'tratamiento':
            return (<FormTratamiento />)
        case 'paciente':
            return (<PacientesAddNew />)

        case 'empleado':
        return (<FormEmpleado />)

        case 'paciente':
        return (<PacientesAddNew />)

        case 'pacienteVer':
        return (<VerPaciente />)

        // case 'cita':
        // return (<NewCitaForm />)
        
        
        default:
            return <h1>necesita un "nombre" para mostrar form</h1>;
    }

}
