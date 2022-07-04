import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from 'react-redux';
import { setTratamiento } from '../../actions/tratamientos';
import { update, store } from '../../actions/tratamientos'
export const FormTratamiento = () => {

  const dispatch = useDispatch();

  const { active: tratamiento } = useSelector(state => state.allTratamientos);
  const { modal } = useSelector((state) => state.ui);
  const [formValues, handleInputChange, reset] = useForm(tratamiento);
  const { descripcion, monto } = formValues;
  const activeTratamientoId = useRef(tratamiento.id_tratamiento);

  useEffect(() => {

    if (tratamiento.id_tratamiento !== activeTratamientoId.current) {
      reset(tratamiento);
      activeTratamientoId.current = tratamiento.id_tratamiento;
    }

  }, [tratamiento, reset]);

  useEffect(() => {

    dispatch(setTratamiento({ ...formValues }));

  }, [formValues, dispatch]);

  const storeTratamiento = async (e) => {
    e.preventDefault();
    dispatch(store(tratamiento));
    reset({
      nombre: '',
      monto: ''
    });
  }

  const updateTratamiento = async (e) => {
    e.preventDefault();
    dispatch(update(tratamiento));
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
      <div className="container__tratamiento">
        <form className="form-group p-4 tratamiento__form" 
        onSubmit={(modal.tipo === 'Agregar') ? storeTratamiento : updateTratamiento}>
          {/* <div className="form-row"> */}
            <div className="input-data tratamiento__campo tratamiento__campo-1">
              <input
              className="input__tratamiento descripcion"
                type="text"
                name="descripcion"
                value={descripcion}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <div className="underline"></div>
              <label>Descripcion</label>
            </div>
          {/* </div> */}
          {/* <div className="form-row"> */}
            <div className="input-data tratamiento__campo tratamiento__campo-2">
              <input
                className="input__tratamiento monto"
                type="number"
                name="monto"
                value={monto}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <div className="underline"></div>
              <label>Monto</label>
            </div>
          {/* </div> */}



            <div className="row">

            
          <div className="d-flex justify-content-center campo__botones ">
            <div className="col-md-6 ">
            {modal.tipo === "Agregar" ? (
                    <button type="submit" className="tratamiento__campo-3 tratamiento__boton"
                    data-bs-dismiss="modal"
                    >
                Guardar
                  </button>
               
                
            ) : (
                 
              <button
                type="submit"
                className="tratamiento__campo-3 tratamiento__boton"
                data-dismiss="modal"
              >
                Actualizar
                </button>
            )}
            </div>
            <div className="col-md-6">

            <button
              type="button"
              className="tratamiento__campo-4 tratamiento__boton"
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
  );
};
