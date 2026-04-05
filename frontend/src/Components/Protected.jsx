import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Protected() {
    const token = localStorage.getItem("token");
    if(!token){
        alert("Not authorized")
      return  <Navigate to="/login" state={{message : "please login first"}} />
    }
   return <Outlet/>
}
