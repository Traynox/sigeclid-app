import React from 'react'

export const InfoForm = () => {
    return (
      
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Editar Información</h4>
                        <p className='card-text'>
                            La información de tu clinica es importante, dale un toque personal a tu negocio.
                        </p>
                    </div>
                    <div className="card-content">
                        <div className="card-body">
                            <form className="form">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group has-icon-left">
                                            <label htmlFor="last-name-column">Nombre</label>
                                            <div className="position-relative">
                                                <input type="text" className="form-control"
                                                    placeholder="Empresa" />
                                                <div className="form-control-icon">
                                                    <i className='bx bxs-building-house'></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group has-icon-left">
                                            <label htmlFor="last-name-column">Eslogan</label>
                                            <div className="position-relative">
                                                <input type="text" className="form-control"
                                                    placeholder="Cual es tu frase!" name='eslogan' />
                                                <div className="form-control-icon">
                                                    <i className='bx bx-message-dots' ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group has-icon-left">
                                            <label htmlFor="last-name-column">Dirección</label>
                                            <div className="position-relative">
                                                <input type="text" className="form-control"
                                                    placeholder="Tu ubicación es importante" name='direccion' />
                                                <div className="form-control-icon">
                                                    <i className='bx bxs-map' ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group has-icon-left">
                                            <label htmlFor="last-name-column">Teléfono</label>
                                            <div className="position-relative">
                                                <input type="text" className="form-control"
                                                    placeholder="Es importante tu contacto" name='telefono' />
                                                <div className="form-control-icon">
                                                    <i className='bx bxs-phone-call' ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label for="email-id-column">Foto o imagen</label>
                                            <input type="file" className="form-control"
                                                name="imagen" placeholder="Foto" />
                                        </div>
                                    </div> */}

                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="submit"
                                            className="btn btn-primary me-1 mb-1">Guardar</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           
    )
}
