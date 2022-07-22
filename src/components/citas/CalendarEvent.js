import React from 'react'

export const CalendarEvent = ({event}) => {
  
  const { id_tratamiento, user } = event;
  // console.log(user.name);

  return (
    <>
        <strong> {id_tratamiento} </strong>
        {/* <span>- { user.name}</span> */}
    </>
  )
}
