import React from 'react'

export const ItemEmpleado = React.memo((empleado) => {
  return (
    <>
         <tr>
        <td>{empleado.nombre}</td>
        <td>{empleado.cedula}</td>
        <td>{empleado.telefono}</td>
        <td>{empleado.direccion}</td>
        <td>{empleado.ocupacion}</td>
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
    </>
  )
})
