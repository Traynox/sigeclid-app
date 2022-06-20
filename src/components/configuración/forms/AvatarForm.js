import React from 'react'

export const AvatarForm = () => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-header'> Detalles de empresa </h4>
                <div className=''>
                    <div className="d-flex align-items-center flex-wrap">
                        <div className=" avatar avatar-xl me-5">
                            <img src='../../../../src/styles/CSSTheme/images/faces/3.jpg' alt="Imagen empresa" />
                        </div>
                        <div className="d-flex align-items-start align-items-sm-start flex-column">

                            <button className="btn btn-primary btn-lg mt-2">Actualizar imagen</button>

                            <h6 className='text' style={{padding:'0', margin:'0', marginTop:'15px'}}>Solo se permite JPG, GIF o PNG. Maximo tamaño 800K</h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
