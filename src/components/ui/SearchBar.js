import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setSearch } from "../../actions/ui";
import "../../styles/components/search_bar/search_bar.css";
import { setEmpleados } from "../../actions/empleados";
import { useEffect } from "react";
import { getDataPaginate } from "../../helpers/api";


export const SearchBar = () => {
  const { search } = useSelector((state) => state.ui);

  const { current_page } = useSelector((state) => state.allEmpleados.empleados);
  const [formValues, handleInputChange, reset] = useForm(search);
  const { texto } = formValues;
  const dispatch = useDispatch();

  // AGREGAR REACT MEMO PARA EVITAR EL ENVIO DE PETICIONES INNECESARIAS
  useEffect(() => {
    dispatch(setSearch({ ...formValues }));
  }, [formValues, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('SEACRH BAR')

    getDataPaginate(
      window.location.pathname.substring(1),
      5,
      texto,
      current_page,
      1
    )
      .then((nada) => {
        switch (window.location.pathname.substring(1)) {
          case "empleados":
            dispatch(setEmpleados(nada));
            break;


          default:
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center ps-4 pb-3 z-index-3">
        <div className="search">
          <form 
          onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              name="texto"
              onChange={handleInputChange}
  
              value={texto}
            />
            <button type="submit" className="search-icon">
              {" "}
              <i className="fa fa-search"></i>{" "}
            </button>
          </form>
        </div>
      </div>
   
    </>
  );
};
