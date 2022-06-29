import React from "react";
import Pagination from 'react-js-pagination'


export const CardsPacientes = () => {
  return (
    <>
      <section className="container pt-3 mb-3">
        {/* <h2 className="h3 block-title text-center">
          What we do
          <small>Whatever we do, we do with your end user in mind </small>
        </h2> */}
        <div className="row pt-5 mt-30">
        <div className="col-lg-4 col-sm-6 pb-3">
            <a className="card" href="#">
              <div
                className="mx-auto text-center"
                style={{ width: 90, height: 90, marginTop: "-45px" }}
              >
                <i class="fa-solid fa-folder-open fa-3x head-icon"></i>
              </div>
              <div className="card-body d-flex justify-content-center text-center">
                <h3 className="card-title pt-1">
                  Jessy Roblero Obando 101890183
                </h3>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 pb-3">
            <a className="card" href="#">
              <div
                className="mx-auto text-center"
                style={{ width: 90, height: 90, marginTop: "-45px" }}
              >
                <i class="fa-solid fa-folder-open fa-3x head-icon"></i>
              </div>
              <div className="card-body d-flex justify-content-center text-center">
                <h3 className="card-title pt-1">
                  Jessy Roblero Obando 101890183
                </h3>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 pb-3">
            <a className="card" href="#">
              <div
                className="mx-auto text-center"
                style={{ width: 90, height: 90, marginTop: "-45px" }}
              >
                <i class="fa-solid fa-folder-open fa-3x head-icon"></i>
              </div>
              <div className="card-body d-flex justify-content-center text-center">
                <h3 className="card-title pt-1">
                  Jessy Roblero Obando 101890183
                </h3>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 pb-3">
            <a className="card" href="#">
              <div
                className="mx-auto text-center"
                style={{ width: 90, height: 90, marginTop: "-45px" }}
              >
                <i class="fa-solid fa-folder-open fa-3x head-icon"></i>
              </div>
              <div className="card-body d-flex justify-content-center text-center">
                <h3 className="card-title pt-1">
                  Jessy Roblero Obando 101890183
                </h3>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 pb-3">
            <a className="card" href="#">
              <div
                className="mx-auto text-center"
                style={{ width: 90, height: 90, marginTop: "-45px" }}
              >
                <i class="fa-solid fa-folder-open fa-3x head-icon"></i>
              </div>
              <div className="card-body d-flex justify-content-center text-center">
                <h3 className="card-title pt-1">
                  Jessy Roblero Obando 101890183
                </h3>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 pb-3">
            <a className="card" href="#">
              <div
                className="mx-auto text-center"
                style={{ width: 90, height: 90, marginTop: "-45px" }}
              >
                <i class="fa-solid fa-folder-open fa-3x head-icon"></i>
              </div>
              <div className="card-body d-flex justify-content-center text-center">
                <h3 className="card-title pt-1">
                  Jessy Roblero Obando 101890183
                </h3>
              </div>
            </a>
          </div>
        </div>
        <div className="pagination justify-content-end">
                    <Pagination
                        // activePage={current_page}
                        // itemsCountPerPage={parseInt(per_page)}
                        totalItemsCount={5}
                        // onChange={(pageNumber) => handlePageChange(pageNumber)}
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
