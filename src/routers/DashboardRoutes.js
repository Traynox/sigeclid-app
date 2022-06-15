
import React from "react";
import { Routes, Route  } from "react-router-dom"

import { Hola } from "../components/ui/Hola"
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
              <Route path="hola" element={<Hola />} />
              <Route path="hola2" element={<Hola2 />} />
             
  
              {/* <Route path="search" element={<SearchScreen />} /> */}
              {/* <Route path="hero/:heroeId" element={<HeroScreen />} /> */}
              <Route path="/" element={<Hola />} />
        </Routes>
  
          </section>
  
      </>
    )
  }
  