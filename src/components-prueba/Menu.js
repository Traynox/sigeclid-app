import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from "react-router-dom";
import { endLogin } from "../actions/login";
// import './styles/components/sidebar/sidebar-style.css';
import '../styles/components/sidebar/sidebar-style.css';


export const Menu = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();

const {id_plan} =useSelector(state=>state.auth.user);

  const logout=()=>{
    dispatch(endLogin({name:'',email:'',logged:false}));
    navigate('/login',{replace:true});
  }

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="" className="brand-link">
        <img
          src="dist/img/logo_1.png"
          alt="null"
          // className="brand-image img-circle elevation-3"
          // style={{ opacity: ".8" }}
        />
        {/* <span className="">SIGECLID</span> */}
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
            {/* <li className="nav-header">EXAMPLES</li> */}

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
            {
              (id_plan==2)?<li className="nav-item">
              <Link to="/reportes" className="nav-link">
                {/* <i className="nav-icon far fa-image" /> */}
                <i class="nav-icon fa-solid fa-bookmark"></i>
              
                <p>Reportes</p>
              </Link>
            </li>:''
            }
            <li className="nav-item">
              <a  className="nav-link" onClick={logout}>
                {/* <i className="nav-icon far fa-image" /> */}
                <i className="nav-icon fa-solid fa-power-off"></i>
                <p>Salir</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};
