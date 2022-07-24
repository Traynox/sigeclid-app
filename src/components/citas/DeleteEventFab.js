import React from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore';

export const DeleteEventFab = () => {

const {activeDelete, destruir ,hasEventSelected} = useCalendarStore();

const handleDelete=()=>{
  // 
  destruir()

}


  return (
    <button
        className='btn btn-danger fab-danger' 
        onClick={handleDelete}   
        style={{
          display: hasEventSelected ? '' : 'none'
        }}
    >
        <i className='fas fa-trash'></i>
        <span> Borrar evento</span>
    </button>
  )
}
