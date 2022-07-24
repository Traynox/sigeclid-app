import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPacientes } from "../../actions/pacientes";
import { getDataPaginate } from "../../helpers/api";
import { ItemCardPaciente } from "./ItemCardPaciente";

export const CardsPacientes = () => {
  const {data:pacientes,current_page,per_page,total} = useSelector((state) => state.allPacientes.pacientes);

  const { search } = useSelector((state) => state.ui);
  const {id_tenant} = useSelector( state => state.auth.user );

  const {texto} =search;

  const dispatch = useDispatch();

  useEffect(() => {

    getDataPaginate('pacientes',6,search.texto,current_page,id_tenant)
                .then(pacientes => {
                 
                  dispatch(setPacientes(pacientes))
                }).catch(error => {
                  console.log(error)
                })
               
  } ,[]);

  const handlePageChange = (pageNumber) => {
  
    getDataPaginate('pacientes',6,search.texto,pageNumber, id_tenant)
                .then(pacientes => {
                  // console.log('clientes', clientes)
                  dispatch(setPacientes(pacientes))
                }).catch(error => {
                  console.log(error)
                })
}

  //ESTE ES PARA UNA BUSQUEDA EN TIEMPO REAL SUPONGAMOS 
  useEffect(() => {

    getDataPaginate('pacientes',6,search.texto,current_page, id_tenant)
                .then(pacientes => {
                  // console.log('clientes', clientes)
                
                  dispatch(setPacientes(pacientes))
                }).catch(error => {
                  console.log(error)
                })
                // console.log('getDataPaginate ')
  } ,[texto,dispatch]);

  return (
    <>
      <section className="container pt-3 mb-3">
        {/* <h2 className="h3 block-title text-center">
          What we do
          <small>Whatever we do, we do with your end user in mind </small>
        </h2> */}
        <div className="row pt-5 mt-30">
      
          {
            pacientes.map((paciente=>
              <ItemCardPaciente
                key= {paciente.id_paciente}
                {...paciente} />
              ))
          }

        </div>
        <div className="pagination justify-content-end">
          <Pagination
            activePage={current_page}
            itemsCountPerPage={parseInt(per_page)}
            totalItemsCount={6}
            onChange={(pageNumber) => handlePageChange(pageNumber)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="inicio"
            lastPageText="final"
            pageRangeDisplayed={4}
          />
        </div>
      </section>
    </>
  );
};
