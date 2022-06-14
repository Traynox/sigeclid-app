import React from 'react'
import { Routes, Route, BrowserRouter  } from "react-router-dom";

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';
export const AppRouter = () => {
    return (
      <BrowserRouter >
          <Routes>
            
            {/* <Route path="/login" element={<LoginScreen />} /> */}
            <Route path="/login" element={
              <PublicRoute>
                {/* <LoginScreen /> */}
              </PublicRoute>
            }
            
            />
  {/* <Route path="/*" element={<DashboardRoutes />} /> */}
              <Route path="/*" element={
                  <PrivateRoute>
                    <DashboardRoutes />
                  </PrivateRoute>
                }
              />
        </Routes>
      </BrowserRouter>
    )
  }
  