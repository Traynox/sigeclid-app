import React from 'react'
import { useDispatch } from 'react-redux';
import { destroy } from '../../actions/empleados';
import { setModal } from "../../actions/ui";
import { setEmpleado } from '../../actions/empleados';
export const ItemEmpleado = React.memo((empleado) => {

  const dispatch = useDispatch();

  const deleteEmpleado = () => {
      dispatch(destroy(empleado.id_empleado));
  }


  const setFormData = () => {

    dispatch(setEmpleado(empleado));
    dispatch(
      setModal({
        tipo: "Editar",
        nombre: "empleado",
        vista: "Empleados",
      })
    );
  };
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
                    className="btn btn-md text-decorated-none "
                    data-dismiss="dropdown"
                    aria-expanded="false"
                  >
                    {/* <i className="fas fa-ellipsis-v text-warning" ></i> */}
                    <i className="fa-solid fa-bars"></i>
                  </a>

                  <ul className="dropdown-menu ">
                    <li>
                      <a
                         data-toggle="modal"
                         data-target="#modalE"
                         onClick={setFormData}
                        // data-target="#exampleModalEdit{{ $item->id_articulo }}"
                        className="btn btn-md text-decorated-none dropdown-item"
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
                <button type="button" onClick={deleteEmpleado} className="btn btn-md">
                  <i className="fas fa-trash-alt text-danger"></i>
                </button>
              </td>
      
      </tr>
    </>
  )
})
