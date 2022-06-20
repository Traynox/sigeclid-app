
import React from "react";
import { Routes, Route } from "react-router-dom"
import { ExpedientesScreen } from "../components/expedientes/ExpedientesScreen";
import PacientesScreen from "../components/pacientes/PacientesScreen";
import { PagosScreen } from "../components/pagos/PagosScreen";
import { TratamientosScreen } from "../components/tratamientos/TratamientosScreen";
import { ConfigScreen } from "../components/configuración/ConfigScreen";
import { UsersScreem } from "../components/usuarios/UsersScreem";
import { SideBar } from "../components/ui/SideBar";
import { EmpleadosScreen } from "../components/empleados/EmpleadosScreen";

export const DashboardRoutes = () => {
    return (
      <>
          {/* <Navbar /> */}
      
          <SideBar />
          {/* Falta agregar el nav */}
          
          {/* <div className="container all"> */}
          <section className="home">
          <Routes>
              <Route path="tratamientos" element={<TratamientosScreen />} />
              <Route path="pacientes" element={<PacientesScreen />} />
              <Route path="empleados" element={<EmpleadosScreen />} />
              <Route path="pagos" element={<PagosScreen />} />
              <Route path="expedientes" element={<ExpedientesScreen />} />
              <Route path="configuracion" element={<ConfigScreen />} />
              <Route path="usuarios" element={<UsersScreem />} />
  
              {/* <Route path="search" element={<SearchScreen />} /> */}
              {/* <Route path="hero/:heroeId" element={<HeroScreen />} /> */}
              <Route path="/" element={<TratamientosScreen />} />
        </Routes>

      </section>

    </>
  )
}
