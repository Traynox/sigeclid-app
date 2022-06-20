import React from "react";
import '../../styles/components/usuarios/usuarios.css';
import Pagination from "react-js-pagination";

export const TableUsuarios = () => {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover table-bordered " id="tabla">
                    <thead className="text-center" >
                        <tr>
                            {/* <th>Item</th> */}
                            <th>Nombre</th>
                            <th>Contraseña</th>
                            <th>Rol usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>pepe</td>
                            <td className="password">123421</td>
                            <td>admin</td>
                            <td>
                                <div className="btn-group dropup acciones">
                                    <a
                                        type="button"
                                        data-toggle="dropdown"
                                        className="btn btn-md  text-decorated-none "
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {/* <i className="fas fa-ellipsis-v text-warning" ></i> */}
                                        <i className="fa-solid fa-bars"></i>

                                    </a>

                                    <ul className="dropdown-menu ">
                                        <li>
                                            <a
                                                // data-toggle="modal"
                                                // data-target="#exampleModalEdit{{ $item->id_articulo }}"
                                                className="btn btn-md  text-decorated-none dropdown-item  "
                                            >
                                                <i
                                                    className="fas fa-edit mx-1"

                                                ></i>
                                                Editar
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                // data-toggle="modal"
                                                // data-target="#exampleModal{{ $item->id_articulo }}"
                                                className="btn btn-md  text-decorated-none dropdown-item "
                                            >
                                                <i
                                                    className="fas fa-eye mx-1"

                                                ></i>
                                                Ver
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button type="submit" class="btn btn-md"><i
                                    className="fas fa-trash-alt text-danger"></i></button>
                            </td>
                        </tr>

                        <tr>
                            <td>juan</td>
                            <td className="password">123421</td>
                            <td>user</td>
                            <td>--</td>
                        </tr>

                    </tbody>
                </table>
                <div className="pagination justify-content-end">
                    <Pagination
                        // activePage={current_page}
                        // itemsCountPerPage={parseInt(per_page)}
                        totalItemsCount={5}
                        // onChange={(pageNumber) => handlePageChange(pageNumber)}
                        itemClass="page-item"
                        linkClass="page-link"
                        firstPageText="inicio"
                        lastPageText="final"
                        pageRangeDisplayed={4}
                    />
                </div>
            </div>
        </>
    );
};
