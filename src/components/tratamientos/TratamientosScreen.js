import React from "react";
import "../../../src/styles/components/tratamientos/tratamientos-style.css";

export const TratamientosScreen = () => {
  return (
    <div className="text">
      <div className="card-cont">
        <div className="container">
          <div className="col">
            <div className="card-container">
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="card">
                <h4>Ortodoncia</h4>
                <span className="chev">&rsaquo;</span>
              </div>
            </div>

            <div className="card-container">
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="card">
                <h4>Exodoncia y Cirugía</h4>
                <span className="chev">&rsaquo;</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card-container">
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="card">
                <h4>Limpieza Dental</h4>
                <span className="chev">&rsaquo;</span>
              </div>
            </div>

            <div className="card-container">
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="card">
                <h4>Unidad de Endodoncia</h4>
                <span className="chev">&rsaquo;</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card-container">
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="card">
                <h4>Unidad de Radiologia</h4>
                <span className="chev">&rsaquo;</span>
              </div>
            </div>

            <div className="card-container">
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="overlay"></div>
              <div className="card">
                <h4>Area de Periodoncia </h4>
                <span className="chev">&rsaquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
