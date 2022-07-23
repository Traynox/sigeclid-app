import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from 'react-redux';
import { updateMiClinica, setMiClinica,setMiActive } from '../../../actions/configuracion';
import { getData } from '../../../helpers/api';
import axios from 'axios'
export const InfoForm = () => {

    const dispatch = useDispatch();

    const { active,miClinica } = useSelector(state => state.configuracion);
    const  { id_tenant } = useSelector(state => state.auth.user);

    const [formValues, handleInputChange, reset] = useForm({ ...active });
    const [formValuesClinica] = useForm({ ...miClinica });
    const { nombre, eslogan, direccion, telefono } = formValues;
    const { nombreC, esloganC, direccionC, telefonoC } = formValuesClinica;
    console.log(formValuesClinica,"form");
    useEffect(() => {

        axios.get(getData('empresas', id_tenant))
            .then(empresa => {
              
                dispatch(setMiClinica(empresa.data.data))
                dispatch(setMiActive(empresa.data.data))
            }).catch(error => {
                console.log(error)
            })
       
    },[]);

    useEffect(() => {

        dispatch(setMiActive({ ...formValues }));

    }, [formValues, dispatch]);


    const update = async (e) => {
        e.preventDefault();
        dispatch(updateMiClinica(active));

    }

    return (
        <>
            <div className="card">

                <div className="card-header">
                    <h4 className="card-title">Información actual</h4>
                    <p className='card-text'>
                        Información de tu clinica dental.
                    </p>
                </div>
                <div className="card-content">
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="form-group ">
                                    <label style={{ "fontSize": "20px" }}>Nombre: {nombreC}</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group ">
                                    <label style={{ "fontSize": "20px" }}>Eslogan: {esloganC}</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group ">
                                    <label style={{ "fontSize": "20px" }}>Dirección: {direccionC}</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                            <div className="form-group ">
                                    <label style={{ "fontSize": "20px" }}>Teléfono: {telefonoC}</label>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className="card">

                <div className="card-header">
                    <h4 className="card-title">Editar Información</h4>
                    <p className='card-text'>
                        La información de tu clinica es importante, dale un toque personal a tu negocio.
                    </p>
                </div>
                <div className="card-content">
                    <div className="card-body">
                        <form className="form" onSubmit={update}>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group has-icon-left">
                                        <label htmlFor="last-name-column">Nombre</label>
                                        <div className="position-relative">
                                            <input type="text" className="form-control"
                                                placeholder="Empresa" value={nombre} name="nombre" 
                                                onChange={handleInputChange} />
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
                                                placeholder="Cual es tu frase!" value={eslogan} name='eslogan'
                                                onChange={handleInputChange} />
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
                                                placeholder="Tu ubicación es importante"  value={direccion} name='direccion'
                                                onChange={handleInputChange} />
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
                                                placeholder="Es importante tu contacto" value={telefono} name='telefono'
                                                onChange={handleInputChange} />
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
        </>
    )
}
