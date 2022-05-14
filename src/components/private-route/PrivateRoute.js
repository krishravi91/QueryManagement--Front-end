import React from 'react'
import {Routes,Route,Navigate, Outlet} from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout';

const isAuth = true;
export const PrivateRoute = ({children, ...rest}) => {
  return isAuth ? <Outlet />  : <Navigate to="/" />
};
