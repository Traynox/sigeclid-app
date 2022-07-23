import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCalendarStore } from '../../hooks/useCalendarStore';

const GestionPaciente = () => {
    const { id_paciente, cedula, nombre, apellido_uno, apellido_dos, sexo, telefono, edad, correo, direccion } = useSelector((state) => state.allPacientes.active);
    const events = useSelector((state) => state.calendar.events);

    const {startLoadingEvents} = useCalendarStore()

    useEffect(() => {
        startLoadingEvents()
      }, [])

      console.log(events);
    return (
        <div className="paciente__new">
            <div className="row">
              
                <div className="col-md-12 d-flex justify-content-end">
                    <Link
                        type="button"
                        className="paciente__boton campo__10 btn-sm"
                        data-dismiss="modal"
                        to="/pacientes"
                    >
                        Volver
                    </Link>
                </div>
                {/* </div> */}
            </div>
            <div className="paciente__header">
                <h2>
                    Gestion Paciente:
                </h2>
            </div>
            <div className="paciente__form">
                <div className="paciente__campo campo__1">
                    <label>Cedula</label>
                    <input
                        type="text"
                        className="input__paciente cedula"
                        name="cedula"
                        value={cedula || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__2">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="input__paciente nombre"
                        name="nombre"
                        value={nombre || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__3">
                    <label>Primer Apellido</label>
                    <input
                        type="text"
                        className="input__paciente apellido_uno"
                        name="apellido_uno"
                        value={apellido_uno || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__4">
                    <label>Segundo Apellido</label>
                    <input
                        type="text"
                        className="input__paciente apellido_dos"
                        name="apellido_dos"
                        value={apellido_dos || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__5">
                    <label>Sexo</label>
                    <input
                        type="text"
                        className="input__paciente sexo"
                        name="sexo"
                        value={sexo === 1 ? 'Masculino' : 'Femenino' || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__6">
                    <label>Telefono</label>
                    <input
                        type="text"
                        className="input__paciente telefono"
                        name="telefono"
                        value={telefono || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__7">
                    <label>Edad</label>
                    <input
                        type="text"
                        className="input__paciente edad"
                        name="edad"
                        value={edad || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__8">
                    <label>Email</label>
                    <input
                        type="text"
                        className="input__paciente correo"
                        name="correo"
                        value={correo || ''}
                        autoComplete="off"
                        disabled
                    />
                </div>
                <div className="paciente__campo campo__9">
                    <label>Direccion</label>
                    <input
                        type="text"
                        className="input__paciente direcion"
                        name="direccion"
                        value={direccion || ''}
                        autoComplete="off"
                        disabled
                    />

                </div>




                {/* <button type="button" className='paciente__boton campo__10'>Limpiar</button>
                <button type="submit" className='paciente__boton campo__11'>Guardar</button> */}
            </div>
            <div className="paciente__header">
                <h2>
                    Expediente:
                </h2>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Tratamientos Realizados
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {/* {events.length === 0 ? 'No hay registro de citas' :

                                    events.map(cita => {
                                        const { start, end, paciente } = cita;
                                        if (paciente.id_paciente === id_paciente) {
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Dia {start}
                                                <span className="badge badge-primary badge-pill">Finalizado</span>
                                            </li>
                                        }
                                    })

                                } */}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            Historial de Citas
                        </div>
                        <div className="card-body">
                            <ul className="list-group">

                                {
                                
                                events.length === 0 ? 'No hay registro de citas' :

                                    events.map(cita => {
                                        const { start, end, paciente } = cita;
                                        if (paciente.id_paciente === id_paciente) {
                                            console.log("Redux:", paciente.id_paciente);
                                            console.log("objeto", id_paciente);

                                            

                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Dia {start}
                                                <span className="badge badge-primary badge-pill">Finalizado</span>
                                            </li>
                                        }
                                    })

                                }
                                {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Periodoncia
                                    <span className="badge badge-primary badge-pill">Finalizado</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Odontopediatria
                                    <span className="badge badge-primary badge-pill">Finalizado</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GestionPaciente