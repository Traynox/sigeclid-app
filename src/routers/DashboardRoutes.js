
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { ExpedientesScreen } from "../components/expedientes/ExpedientesScreen";
import PacientesScreen from "../components/pacientes/PacientesScreen";
import { PagosScreen } from "../components/pagos/PagosScreen";
import { TratamientosScreen } from "../components/tratamientos/TratamientosScreen";
import { ConfigScreen } from "../components/configuración/ConfigScreen";
import { UsersScreen } from "../components/usuarios/UsersScreen";
import { CitasScreen } from "../components/citas/CitasScreen";
import { SideBar } from "../components/ui/SideBar";
import { EmpleadosScreen } from "../components/empleados/EmpleadosScreen";
import { Menu } from "../components-prueba/Menu";
import { Header } from "../components-prueba/Header";
import {MiperfilScreen} from '../components/usuarios/miPerfil/MiperfilScreen'
// import { Footer } from "../components-prueba/Footer";

export const DashboardRoutes = () => {


  const body = document.querySelector('body')

    const handleToggle = () => {

      console.log(window.innerWidth);
        if(window.innerWidth<992){
            body.classList.remove("sidebar-open");
            body.classList.add("sidebar-closed","sidebar-collapse");
          }
    }

    return (
      <>
          {/* <Navbar /> */}
      
          {/* <SideBar /> */}
          <Header />
          <Menu />
          {/* Falta agregar el nav */}
          
          {/* <div className="container all"> */}
          {/* <section className="home"> */}
          <div className="content-wrapper"  onClick={handleToggle}>
          <Routes>
              <Route path="tratamientos" element={<TratamientosScreen />} />
              <Route path="citas" element={<CitasScreen />} />
              <Route path="pacientes" element={<PacientesScreen />} />
              <Route path="empleados" element={<EmpleadosScreen />} />
              <Route path="pagos" element={<PagosScreen />} />
              <Route path="expedientes" element={<ExpedientesScreen />} />
              <Route path="mi-perfil" element={<MiperfilScreen />} />
              <Route path="mi-clinica" element={<ConfigScreen />} />
              <Route path="usuarios" element={<UsersScreen />} />
              <Route path="/" element={<TratamientosScreen />} />
        </Routes>


      </div>

      {/* <Footer /> */}

    </>
  )
}
