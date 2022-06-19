import React from 'react'
import '../../styles/components/pacientes/pacientes.css';
import PacientesAddNew from './PacientesAddNew';
const PacientesScreen = () => {
  return (
    <div className='pacientes'>
      <div className="pacientes__header">
        <h3 className="pacientes__titulo text">Pacientes</h3>
      </div>
      <div className="pacientes__body">
        <PacientesAddNew/>
      </div>
    </div>
  )
}

export default PacientesScreen
