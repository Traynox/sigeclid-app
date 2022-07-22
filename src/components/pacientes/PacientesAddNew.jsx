import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaciente, store, update } from "../../actions/pacientes";
import { useForm } from "../../hooks/useForm";

const PacientesAddNew = () => {
  const dispatch = useDispatch();

  const { active: paciente } = useSelector((state) => state.allPacientes);
  const { modal } = useSelector((state) => state.ui);
  const [formValues, handleInputChange, reset] = useForm(paciente);
  const {
    cedula,
    nombre,
    apellido_uno,
    apellido_dos,
    sexo,
    telefono,
    edad,
    correo,
    direccion,
  } = formValues;
  const activePacienteId = useRef(paciente.id_paciente);

  useEffect(() => {
    if (paciente.id_paciente !== activePacienteId.current) {
      reset(paciente);
      activePacienteId.current = paciente.id_paciente;
    }
  }, [paciente, reset]);

  useEffect(() => {
    dispatch(setPaciente({ ...formValues }));
  }, [formValues, dispatch]);

  const storePaciente = async (e) => {
    e.preventDefault();
    dispatch(store(paciente));

    reset({
      nombre: "",
      cedula: "",
      apellido_uno: "",
      apellido_dos: "",
      sexo: "",
      telefono: "",
      edad: "",
      correo: "",
      direccion: "",
    });
  };

  const updatePaciente = async (e) => {
    e.preventDefault();
    dispatch(update(paciente));
    // reset({
    //   nombre: '',
    //   cedula: '',
    //   telefono: '',
    //   direccion: '',
    //   ocupacion: ''
    // });
  };

  const limpiar = () => {
    reset({
      nombre: "",
      cedula: "",
      apellido_uno: "",
      apellido_dos: "",
      sexo: "",
      telefono: "",
      edad: "",
      correo: "",
      direccion: "",
    });
  };

  return (
    <div className="paciente__new">
      <div className="paciente__header">
        <h2>
          {modal.tipo} {modal.nombre}
        </h2>
      </div>
      <form  className="paciente__form" onSubmit={(modal.tipo === 'Agregar') ? storePaciente : updatePaciente}>
        <div className="paciente__campo campo__1">
          <label>Cedula</label>
          <input 
            type="text" 
            className="input__paciente cedula" 
            name="cedula"
            value={cedula || ''}
            onChange={handleInputChange}
            autoComplete="off"
            required
            />
        </div>
        <div className="paciente__campo campo__2">
          <label>Nombre</label>
          <input 
            type="text" 
            className="input__paciente nombre" 
            name="nombre"
            value={nombre || ''}
            onChange={handleInputChange}
            autoComplete="off"
            required
            />
        </div>
        <div className="paciente__campo campo__3">
          <label>Primer Apellido</label>
          <input 
          type="text" 
          className="input__paciente apellido_uno" 
          name="apellido_uno"
          value={apellido_uno || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />
        </div>
        <div className="paciente__campo campo__4">
          <label>Segundo Apellido</label>
          <input 
          type="text" 
          className="input__paciente apellido_dos" 
          name="apellido_dos"
          value={apellido_dos || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />
        </div>
        <div className="paciente__campo campo__5">
          <label>Sexo</label>
          <input 
          type="text" 
          className="input__paciente sexo" 
          name="sexo"
          value={sexo || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />
        </div>
        <div className="paciente__campo campo__6">
          <label>Telefono</label>
          <input 
          type="text" 
          className="input__paciente telefono" 
          name="telefono"
          value={telefono || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />
        </div>
        <div className="paciente__campo campo__7">
          <label>Edad</label>
          <input 
          type="text" 
          className="input__paciente edad" 
          name="edad"
          value={edad || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />
        </div>
        <div className="paciente__campo campo__8">
          <label>Email</label>
          <input 
          type="text" 
          className="input__paciente correo" 
          name="correo"
          value={correo || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />
        </div>
        <div className="paciente__campo campo__9">
          <label>Direccion</label>
          <input 
          type="text" 
          className="input__paciente direcion" 
          name="direccion"
          value={direccion || ''}
          onChange={handleInputChange}
          autoComplete="off"
          required
          />

        </div>
        

        <div className="row">
          <div className="d-flex justify-content-center ">
            <div className="col-md-6 d-flex justify-content-center ">
              {modal.tipo === "Agregar" ? (
                <button type="submit" className="paciente__boton campo__11">
                  Guardar
                </button>
              ) : (
                <button type="submit" className="paciente__boton campo__11">
                  Actualizar
                </button>
              )}
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <button
                type="button"
                className="paciente__boton campo__10"
                data-dismiss="modal"
                onClick={limpiar}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

        {/* <button type="button" className='paciente__boton campo__10'>Limpiar</button>
                <button type="submit" className='paciente__boton campo__11'>Guardar</button> */}
      </form>
    </div>
  );
};

export default PacientesAddNew;
