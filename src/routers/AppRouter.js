import React,{useEffect} from 'react'
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import { setAuth,getUser } from '../actions/login';
import { LoginScreen } from '../components/ui/LoginScreen';
import { useDispatch } from 'react-redux';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';

export const AppRouter = () => {

  // const dispatch=useDispatch();

   // useEffect(() => {

   //   dispatch(setAuth({...getUser(),logged:!!getUser()}));

   // }, []);


    return (
      <BrowserRouter >
          <Routes>
            
            {/* <Route path="/login" element={<LoginScreen />} /> */}
            <Route path="/login" element={
              <PublicRoute>
               <LoginScreen/>
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
  