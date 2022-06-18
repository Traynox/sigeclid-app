import React, { useEffect } from 'react';
import { devuelveForm } from '../../helpers/devuelveForm';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
export const Modal = () => {
  // export const Modal = ({tipo,nombre}) => {

  const { modal } = useSelector(state => state.ui);
  return (
    <>

      <div className="modal fade" id='modalE' tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-md modal-dialog-centered" role="document">

          <div className="modal-content">

            <div className="modal-header text-center modal_header alert-primary">
              <h4 className="modal-title w-100 font-weight-bold py-2">{modal.tipo} {modal.nombre}</h4>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>    */}
            </div>

             <div className="modal-body"> 

            {
                devuelveForm(modal.nombre)

            }

            </div>

            {/* <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input type="text" id="form3" className="form-control validate" />
                <label data-error="wrong" data-success="right" >Your name</label>
              </div>

              <div className="md-form">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="form2" className="form-control validate" />
                <label data-error="wrong" data-success="right" >Your email</label>
              </div> */}


            {/* </div> */}

            {/* <div className="modal-footer justify-content-center">
              <a type="button" className="btn btn-outline-warning waves-effect">Send <i className="fas fa-paper-plane-o ml-1"></i></a>
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}

// Modal.propTypes = {
//   tipo: PropTypes.string.isRequired,
//   nombre: PropTypes.string.isRequired,
 
// }