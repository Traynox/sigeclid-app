import React from "react";
import Pagination from "react-js-pagination";

export const TableEmpleados = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover table-bordered " id="tabla">
          <thead>
            <tr>
              {/* <th>Item</th> */}
              <th>NOMBRE</th>
              <th>CEDULA</th>
              <th>TELEFONO</th>
              <th>DIRECCION</th>
              <th>OCUPACION</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carolos Vargas Mendez</td>
              <td>701180987</td>
              <td>6856749</td>
              <td>100 este 50 norte call</td>
              <td>Ginecologo</td>
              <td>
                <div className="btn-group dropstart acciones">
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
                        <i className="fas fa-edit mx-1"></i>
                        Editar
                      </a>
                    </li>

                    <li>
                      <a
                        // data-toggle="modal"
                        // data-target="#exampleModal{{ $item->id_articulo }}"
                        className="btn btn-md  text-decorated-none dropdown-item "
                      >
                        <i className="fas fa-eye mx-1"></i>
                        Ver
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="submit" className="btn btn-md">
                  <i className="fas fa-trash-alt text-danger"></i>
                </button>
              </td>
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
