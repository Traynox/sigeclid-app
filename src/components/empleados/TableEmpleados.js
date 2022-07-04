import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { setEmpleados } from "../../actions/empleados";
import { getDataPaginate } from "../../helpers/api";
import { ItemEmpleado } from "./ItemEmpleado";

export const TableEmpleados = () => {

  const {data:empleados,current_page,per_page,total} = useSelector((state) => state.allEmpleados.empleados);

  const { search } = useSelector((state) => state.ui);
  const {texto} =search;

  const dispatch = useDispatch();

  useEffect(() => {

    getDataPaginate('empleados',5,search.texto,current_page,1)
                .then(empleados => {
                 
                  dispatch(setEmpleados(empleados))
                }).catch(error => {
                  console.log(error)
                })
               
  } ,[]);

  //ESTE ES PARA UNA BUSQUEDA EN TIEMPO REAL SUPONGAMOS 
  useEffect(() => {

    getDataPaginate('empleados',5,search.texto,current_page, 1)
                .then(empleados => {
                  // console.log('clientes', clientes)
                
                  dispatch(setEmpleados(empleados))
                }).catch(error => {
                  console.log(error)
                })
                // console.log('getDataPaginate ')
  } ,[texto,dispatch]);

  const handlePageChange = (pageNumber) => {
  
    getDataPaginate('empleados',5,search.texto,pageNumber)
                .then(empleados => {
                  // console.log('clientes', clientes)
                  dispatch(setEmpleados(empleados))
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
              {/* <th>Item</th> */}
              <th>NOMBRE</th>
              <th>CEDULA</th>
              <th>TELEFONO</th>
              <th>DIRECCION</th>
              <th>OCUPACION</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
          {
            empleados.map((empleado=>
              <ItemEmpleado
                key={empleado.id_empleado}
                {...empleado} />
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
