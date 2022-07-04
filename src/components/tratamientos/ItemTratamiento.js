import React from 'react'

import { useDispatch } from 'react-redux';
import { setModal } from "../../actions/ui";
import { setTratamiento } from '../../actions/tratamientos';
import { destroy} from '../../actions/tratamientos';

export const ItemTratamiento = React.memo((tratamiento) => {

    const dispatch = useDispatch();

  const deleteTratamiento=()=>{

    dispatch(destroy(tratamiento.id_tratamiento));
  }

  const setFormData = () => {

    dispatch(setTratamiento(tratamiento));
    dispatch(
      setModal({
        tipo: "Editar",
        nombre: "tratamiento",
        vista: "Tratamientos",
      })
    );
  };

  return (
    <tr>
              <td>{tratamiento.descripcion}</td>
              <td>{tratamiento.monto}</td>
              <td>
                <div className="btn-group dropstart acciones">
                  <a
                    type="button"
                    data-toggle="dropdown"
                    className="btn btn-md  text-decorated-none "
                    data-dismiss="dropdown"
                    aria-expanded="false"
                  >
                    {/* <i className="fas fa-ellipsis-v text-warning" ></i> */}
                    <i className="fa-solid fa-bars"></i>
                  </a>

                  <ul className="dropdown-menu z-index-5">
                    <li>
                      <a
                        data-toggle="modal"
                        data-target="#modalE"
                        onClick={setFormData}
                        className="btn btn-md text-decorated-none dropdown-item  "
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
                <button type="button" onClick={deleteTratamiento} className="btn btn-md">
                  <i className="fas fa-trash-alt text-danger"></i>
                </button>
              </td>
            </tr>
  )
})
