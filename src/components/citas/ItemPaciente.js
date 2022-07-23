import React from 'react'
import { useDispatch } from 'react-redux';
import { destroy } from '../../actions/empleados';
import { setModal } from "../../actions/ui";
import { cambiaIdPaciente } from '../../actions/events';
export const ItemPaciente = React.memo((paciente) => {

  const dispatch = useDispatch();


    const getId = () => {
    dispatch(cambiaIdPaciente(paciente))
   
  };
  return (
    <>
        <tr onClick={getId}>
        <td>{paciente.nombre}</td>
        <td>{paciente.apellido_uno}</td>
        <td>{paciente.apellido_dos}</td>
        <td>{paciente.cedula}</td>
      </tr>
    </>
  )
})
