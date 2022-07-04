import React from 'react'

export const NewCita = () => {
  return (
    <>
        <div className="row">
          {/* <div className="col-md-12 pb-2 pt-2"> */}
          <div className="col-6 d-flex justify-content-start pb-4">
            <button
              type="button"
              className="btn btn-new btn-sm mx-2"
            //   onClick={setFormData}
            //   data-bs-toggle="modal"
            //   data-bs-target="#modalE"
            >

              <i className="bx bx-plus-circle icon mx-1"></i>
              Nueva Cita
            </button>
          </div>
          <div className="col-6 d-flex justify-content-end z-index-1 ">
            {/* <SearchBar /> */}
          </div>
        </div>
    </>
  )
}
