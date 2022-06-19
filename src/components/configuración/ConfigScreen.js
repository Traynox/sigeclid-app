import React from 'react'
import { InfoForm } from './forms/InfoForm'
export const ConfigScreen = () => {
    return (
        <>
            <div class="d-flex justify-content-between ">
                <h1>Configuración</h1>
               
            </div>
            <div className='container'>
                <InfoForm />
            </div>
        </>
    )
}
