import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useForm } from "../../hooks/useForm";
// import { setSearch } from "../../actions/searchBar";
import "../../styles/components/search_bar/search_bar.css";


export const SearchBar = () => {
  const { search } = useSelector((state) => state.ui);

  // const { current_page } = useSelector((state) => state.allClientes.clientes);
  // const [formValues, handleInputChange, reset] = useForm(search);
  // const { texto } = formValues;
  // const dispatch = useDispatch();

  //AGREGAR REACT MEMO PARA EVITAR EL ENVIO DE PETICIONES INNECESARIAS
  // useEffect(() => {
  //   dispatch(setSearch({ ...formValues }));
  // }, [formValues, dispatch]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log('SEACRH BAR')

  //   getDataPaginate(
  //     window.location.pathname.substring(1),
  //     5,
  //     texto,
  //     current_page
  //   )
  //     .then((nada) => {
  //       switch (window.location.pathname.substring(1)) {
  //         case "tratamientos":
  //           // dispatch(setClientes(nada));
  //           break;


  //         default:
  //           break;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <div className="d-flex justify-content-center ps-4 pb-3">
        <div className="search">
          <form 
          // onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              name="texto"
              // onChange={handleInputChange}
  
              // value={texto}
            />
            <button type="submit" className="search-icon">
              {" "}
              <i className="fa fa-search"></i>{" "}
            </button>
          </form>
        </div>
      </div>
      {/* <div className="px-2">
    
        <input type="text" placeholder=" Buscar... "/>
          <div>
            <svg>
              <use xlinkHref="#path"/>
            </svg>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="path">
          <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"></path>
        </symbol>
      </svg> */}
    </>
  );
};
