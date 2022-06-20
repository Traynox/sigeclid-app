import React from 'react'
import { useSelector } from 'react-redux';

const PacientesAddNew = () => {
    const { modal } = useSelector((state) => state.ui);
    return (
        <div className='paciente__new'>
            <div className="paciente__header">
                <h2>{modal.tipo} {modal.nombre}</h2>
            </div>
            <form action="" className='paciente__form'>
                <div className="paciente__campo campo__1">
                    <label >Cedula</label>
                    <input type="text" className='input__paciente cedula' />
                </div>
                <div className="paciente__campo campo__2">
                    <label >Nombre</label>
                    <input type="text" className='input__paciente nombre' />
                </div>
                <div className="paciente__campo campo__3">
                    <label >Primer Apellido</label>
                    <input type="text" className='input__paciente apellido_uno' />
                </div>
                <div className="paciente__campo campo__4">
                    <label >Segundo Apellido</label>
                    <input type="text" className='input__paciente apellido_dos' />
                </div>
                <div className="paciente__campo campo__5">
                    <label >Sexo</label>
                    <input type="text" className='input__paciente sexo' />
                </div>
                <div className="paciente__campo campo__6">
                    <label >Telefono</label>
                    <input type="text" className='input__paciente telefono' />
                </div>
                <div className="paciente__campo campo__7">
                    <label >Edad</label>
                    <input type="text" className='input__paciente edad' />
                </div>
                <div className="paciente__campo campo__8">
                    <label >Email</label>
                    <input type="text" className='input__paciente correo' />
                </div>
                <div className="paciente__campo campo__9">
                    <label >Direccion</label>
                    <input type="text" className='input__paciente direcion' />
                </div>

                <button type="button" className='paciente__boton campo__10'>Limpiar</button>
                <button type="submit" className='paciente__boton campo__11'>Guardar</button>

            </form>
        </div>
    )
}

export default PacientesAddNew