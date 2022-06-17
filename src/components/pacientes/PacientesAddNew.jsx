import React from 'react'

const PacientesAddNew = () => {
    return (
        <div className='paciente__new'>
            <form action="" className='paciente__form'>
                <div className="paciente__campo campo__1">
                    <label >nombre</label>
                    <input type="text" className='input__paciente nombre' />
                </div>
                <div className="paciente__campo campo__2">
                    <label >primer apellido</label>
                    <input type="text" className='input__paciente apellido_uno' />
                </div>
                <div className="paciente__campo campo__3">
                    <label >segundo apellido</label>
                    <input type="text" className='input__paciente apellido_dos' />
                </div>
                <div className="paciente__campo campo__4">
                    <label >sexo</label>
                    <input type="text" className='input__paciente sexo' />
                </div>
                <div className="paciente__campo campo__5">
                    <label >telefono</label>
                    <input type="text" className='input__paciente telefono' />
                </div>
                <div className="paciente__campo campo__6">
                    <label >edad</label>
                    <input type="text" className='input__paciente edad' />
                </div>
                <div className="paciente__campo campo__7">
                    <label >email</label>
                    <input type="text" className='input__paciente correo' />
                </div>
                <div className="paciente__campo campo__8">
                    <label >direccion</label>
                    <input type="text" className='input__paciente direcion' />
                </div>
            </form>
        </div>
    )
}

export default PacientesAddNew