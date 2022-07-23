import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from 'react-redux';
import { setEmpleado } from '../../actions/empleados';
import { update, store } from '../../actions/empleados';

export const FormEmpleado = () => {

  const dispatch = useDispatch();

  const { active: empleado } = useSelector(state => state.allEmpleados);
  const { modal } = useSelector((state) => state.ui);
  const [formValues, handleInputChange, reset] = useForm(empleado);
  const { nombre, cedula, telefono, direccion, ocupacion } = formValues;
  const activeEmpleadoId = useRef(empleado.id_empleado);


  useEffect(() => {

    if (empleado.id_empleado !== activeEmpleadoId.current) {
      reset(empleado);
      activeEmpleadoId.current = empleado.id_empleado;
    }

  }, [empleado, reset]);

  useEffect(() => {

    dispatch(setEmpleado({ ...formValues }));

  }, [formValues, dispatch]);

  const storeEmpleado = async (e) => {
    e.preventDefault();
    dispatch(store(empleado));
    reset({
      nombre: '',
      cedula: '',
      telefono: '',
      direccion: '',
      ocupacion: ''
    });
  }

  const updateEmpleado = async (e) => {
    e.preventDefault();
    dispatch(update(empleado));
    // reset({
    //   nombre: '',
    //   cedula: '',
    //   telefono: '',
    //   direccion: '',
    //   ocupacion: ''
    // });

  }


  return (
    <>
      <div className="container__empleado">
        <form className="form-group p-4 empleado__form" onSubmit={(modal.tipo === 'Agregar') ? storeEmpleado : updateEmpleado}>
          {/* <div className="form-row"> */}
          <div className="input-data empleado__campo empleado__campo-1">
            <input
              className="input__empleado nombre"
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label>Nombre</label>
          </div>

          <div className="input-data empleado__campo empleado__campo-2">
            <input
              className="input__empleado cedula"
              type="text"
              name="cedula"
              value={cedula}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label>Cedula</label>
          </div>

          <div className="input-data empleado__campo empleado__campo-3">
            <input
              className="input__empleado telefono"
              type="text"
              name="telefono"
              value={telefono}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label>Telefono</label>
          </div>

          <div className="input-data empleado__campo empleado__campo-4">
            <input
              className="input__empleado direccion"
              type="text"
              name="direccion"
              value={direccion}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label>Direccion</label>
          </div>

          <div className="input-data empleado__campo empleado__campo-5">
            <input
              className="input__empleado ocupacion"
              type="text"
              name="ocupacion"
              value={ocupacion}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label>Ocupacion</label>
          </div>


          <div className="row">


            <div className="d-flex justify-content-center ">
              <div className="col-md-6 d-flex justify-content-center ">
                {modal.tipo === "Agregar" ? (
                  <button type="submit" className=" empleado__campo-7 empleado__boton"
                   data-dismiss="modal"
                  >
                    Guardar
                  </button>

                ) : (

                  <button type="submit" className="empleado__campo-7 empleado__boton">Actualizar</button>
                )}
              </div>
              <div className="col-md-6 d-flex justify-content-center">

                <button
                  type="button"
                  className="empleado__campo-8 empleado__boton"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>

          {/* <div className="form-row ">
      <div className="input-data textarea">
        <textarea rows="8" cols="80" required></textarea>

        <div className="underline"></div>
        <label for="">Write your message</label>

      </div>
    </div> */}
        </form>
      </div>
    </>
  )
}
