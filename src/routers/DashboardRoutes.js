
import React from "react";
import { Routes, Route } from "react-router-dom"
import { ExpedientesScreen } from "../components/expedientes/ExpedientesScreen";
import PacientesScreen from "../components/pacientes/PacientesScreen";
import { PagosScreen } from "../components/pagos/PagosScreen";
import { TratamientosScreen } from "../components/tratamientos/TratamientosScreen";
import { ConfigScreen } from "../components/configuración/ConfigScreen";
import { UsersScreen } from "../components/usuarios/UsersScreen";
import { SideBar } from "../components/ui/SideBar";
import { EmpleadosScreen } from "../components/empleados/EmpleadosScreen";
import { Menu } from "../components-prueba/Menu";
import { Header } from "../components-prueba/Header";
import { Content } from "../components-prueba/Content";
import { Footer } from "../components-prueba/Footer";

export const DashboardRoutes = () => {
    return (
      <>
          {/* <Navbar /> */}
      
          {/* <SideBar /> */}
          {/* Falta agregar el nav */}
      <Header />
      <Menu />
      
          <div className="content-wrapper">
          {/* <section className="home"> */}
          <Routes>
              <Route path="tratamientos" element={<TratamientosScreen />} />
              <Route path="pacientes" element={<PacientesScreen />} />
              <Route path="empleados" element={<EmpleadosScreen />} />
              <Route path="pagos" element={<PagosScreen />} />
              <Route path="expedientes" element={<ExpedientesScreen />} />
              <Route path="configuracion" element={<ConfigScreen />} />
              <Route path="usuarios" element={<UsersScreen />} />
  
              {/* <Route path="search" element={<SearchScreen />} /> */}
              {/* <Route path="hero/:heroeId" element={<HeroScreen />} /> */}
              <Route path="/" element={<TratamientosScreen />} />
        </Routes>
       
      {/* </section> */}
        </div>
        <Footer />
    </>
  )
}
