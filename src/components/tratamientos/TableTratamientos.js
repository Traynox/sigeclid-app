import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { setTratamientos } from "../../actions/tratamientos";
import { getDataPaginate } from "../../helpers/api";
import { ItemTratamiento } from "./ItemTratamiento";
// import { TratamientosScreen } from "./TratamientosScreen";

export const TableTratamientos = () => {


   const {data:tratamientos,current_page,per_page,total} = useSelector((state) => state.allTratamientos.tratamientos);
   const {id_tenant} = useSelector( state => state.auth.user );


  const { search } = useSelector((state) => state.ui);
  const {texto} =search;

  const dispatch = useDispatch();
  useEffect(() => {

    getDataPaginate('tratamientos',5,search.texto,current_page,id_tenant)
                .then(tratamientos => {
                
                  dispatch(setTratamientos(tratamientos))
                }).catch(error => {
                  console.log(error)
                })
               
  } ,[]);

  useEffect(() => {

    getDataPaginate('tratamientos',5,search.texto,current_page, id_tenant)
                .then(tratamientos => {
                 
                  dispatch(setTratamientos(tratamientos))
                }).catch(error => {
                  console.log(error)
                })
          
  } ,[texto,dispatch]);


  const handlePageChange = (pageNumber) => {
  
    getDataPaginate('tratamientos',5,search.texto,pageNumber, id_tenant)
                .then(tratamientos => {
                  // console.log('clientes', clientes)
                  dispatch(setTratamientos(tratamientos))
                }).catch(error => {
                  console.log(error)
                })
}


  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover table-bordered " id="tabla">
          <thead>
            <tr>
             
              <th>DESCRIPCION</th>
              <th>MONTO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>

          {
            tratamientos.map((tratamiento=>
              <ItemTratamiento 
              key={tratamiento.id_tratamiento} 
              {...tratamiento}/>
              ))
          } 

          </tbody>
        </table>
        <div className="pagination justify-content-end">
          <Pagination
            activePage={current_page}
            itemsCountPerPage={parseInt(per_page)}
            totalItemsCount={5}
            onChange={(pageNumber) => handlePageChange(pageNumber)}
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
