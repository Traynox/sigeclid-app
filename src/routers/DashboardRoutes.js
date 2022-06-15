
import React from "react";
import { Routes, Route } from "react-router-dom"
import CustomersView from "../components/customers/CustomersView";
import { Hola2 } from "../components/ui/Hola2"
import { SideBar } from "../components/ui/SideBar";

export const DashboardRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}

      <SideBar />
      {/* Falta agregar el nav */}

      {/* <div className="container all"> */}
      <section className="home">
        <Routes>
          <Route path="pacientes" element={<CustomersView />} />
          <Route path="hola2" element={<Hola2 />} />


          {/* <Route path="search" element={<SearchScreen />} /> */}
          {/* <Route path="hero/:heroeId" element={<HeroScreen />} /> */}
          <Route path="/" element={<CustomersView />} />
        </Routes>

      </section>

    </>
  )
}
