import React from 'react'
import { useDispatch } from "react-redux";
import { TableUsuarios } from './TableUsuarios'
import { SearchBar } from '../ui/SearchBar'
import { setModal } from "../../actions/ui";
import { Modal } from "../ui/Modal";
export const UsersScreem = () => {

    const dispatch = useDispatch();
    const setFormData = () => {
      dispatch(
        setModal({
          tipo: "Agregar",
          nombre: "Usuario",
          vista: "Usuarios",
        })
      );
    };

    return (
        <>
        <Modal tipo="Agregar" nombre="Usuario" />
        <div className='container'>
            <div className="row match-height jus">
                <div className="col-md-12 col-sm-12">
                    <div className='card'>
                        <div className="card-header">
                            <div className='card-body'>
                                <div className="row">
                                    {/* <div className="col-md-12 pb-2 pt-2"> */}
                                    <div className="col-6 d-flex justify-content-start pb-4">
                                        <button
                                            type="button"
                                            className="btn btn-success btn-sm mx-2"
                                            onClick={setFormData}
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalE"
                                        >

                                            <i className="bx bx-plus-circle icon mx-1"></i>
                                            Nuevo Tratamiento
                                        </button>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end ">
                                        <SearchBar />
                                    </div>
                                </div>
                                <TableUsuarios />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
