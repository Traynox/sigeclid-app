import React from 'react'
import { useDispatch } from 'react-redux';
import { destroy } from '../../actions/empleados';
import { setModal } from "../../actions/ui";
import { cambiaIdTratamiento } from '../../actions/events';
export const ItemTratamiento = React.memo((tratamiento) => {

  const dispatch = useDispatch();


    const getId = () => {
    dispatch(cambiaIdTratamiento(tratamiento))
   
  };
  return (
    <>
        <tr onClick={getId}>
        <td>{tratamiento.descripcion}</td>
        <td>{tratamiento.monto}</td>
      </tr>
    </>
  )
})
