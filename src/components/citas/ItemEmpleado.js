import React from 'react'
import { useDispatch } from 'react-redux';
import { destroy } from '../../actions/empleados';
import { setModal } from "../../actions/ui";
import { setEmpleado } from '../../actions/empleados';
import { cambiaIdEmpleado } from '../../actions/events';
export const ItemEmpleado = React.memo((empleado) => {


  // const deleteEmpleado = () => {
  //     dispatch(destroy(empleado.id_empleado));
  // }

  const dispatch = useDispatch();

    const getId = () => {
    dispatch(cambiaIdEmpleado(empleado))
   
  };
  return (
    <>
        <tr className='pointer-event' onClick={getId}>
        <td>{empleado.nombre}</td>
        <td>{empleado.cedula}</td>
      </tr>
    </>
  )
})
