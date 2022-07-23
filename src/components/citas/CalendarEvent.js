import React from 'react'

export const CalendarEvent = ({event}) => {
  
  const { tratamiento, empleado } = event;
  // console.log(user.name);

  return (
    <>
        <strong> {tratamiento.descripcion} </strong>
        <span>Doc: { empleado.nombre}</span>
    </>
  )
}
