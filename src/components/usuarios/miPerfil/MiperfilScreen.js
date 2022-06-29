import React from 'react'
import '../../../styles/components/configuracion/configuracion-styles.css';
import { AvatarPerfil } from './AvatarPerfil';
export const MiperfilScreen = () => {
  return (
    <>
      <div className="d-flex justify-content-between ">
        <h1 className='m-4'>Mi perfil</h1>

      </div>
      <div className='container'>

        <AvatarPerfil />
        
      </div>

    </>
  )
}
