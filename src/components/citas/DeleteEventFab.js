import React from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore';

export const DeleteEventFab = () => {

const {activeDelete} = useCalendarStore();

const handleDelete=()=>{
  activeDelete()
}


  return (
    <button
        className='btn btn-danger fab-danger' 
        onClick={handleDelete}   
    >
        <i className='fas fa-trash'></i>
        <span> Borrar evento</span>
    </button>
  )
}
