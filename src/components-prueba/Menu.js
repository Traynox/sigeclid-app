import React from "react";
import { Link } from "react-router-dom";
// import './styles/components/sidebar/sidebar-style.css';
import '../styles/components/sidebar/sidebar-style.css';


export const Menu = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/logo_1.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          // style={{ opacity: ".8" }}
        />
        <span className="brand-text bg-dark">SIGECLID</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
     

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
                <Link to="/citas" className="nav-link" >
                <i className="nav-icon fas fa-calendar-alt" />
                <p>
                  Citas
                  {/* <span className="right badge badge-danger">New</span> */}
                </p>

                </Link>
              
              
            </li>

            <li className="nav-item">
              <a className="nav-link">
              <i className="nav-icon fa-solid fa-person-half-dress" />
                <p>
                  Pacientes
                  <i className="fas fa-angle-left right" />
                </p>
                {/* <i className="nav-icon fas fa-tree" /> */}
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
              <Link to="/pacientes" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General</p>
              </Link>
               
                </li>
                <li className="nav-item">
                  <a href="pages/UI/icons.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>anything else :)</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tratamientos">
                <i className="nav-icon fa-solid fa-syringe" />
                <p>
                  Tratamientos
                </p>
              </Link>
              
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fa-solid fa-screwdriver-wrench" />
                <p>
                  Configuración
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to='/mi-perfil' className="nav-link">
                    <i className="fa-solid fa-user nav-icon"></i>
                    <p>Mi perfil</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/mi-clinica' className="nav-link">
                    <i className="fa-solid fa-house-chimney-medical nav-icon"></i>
                    <p>Mi clinica</p>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a href="pages/tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>jsGrid</p>
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>

            <li className="nav-item">
              <Link to="/empleados" className="nav-link">
                {/* <i className="nav-icon far fa-image" /> */}
                <i className="nav-icon fa-solid fa-user-doctor" />
                <p>Empleados</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/usuarios" className="nav-link">
                {/* <i className="nav-icon far fa-image" /> */}
                <i className="nav-icon fa-solid fa-users" />
                <p>Usuarios</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/pagos" className="nav-link">
                {/* <i className="nav-icon far fa-image" /> */}
                <i className="nav-icon fa-solid fa-credit-card" />
                <p>Pagos</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};
