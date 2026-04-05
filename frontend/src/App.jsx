import React from 'react'
import Login from './Components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Components/Register'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },

  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
