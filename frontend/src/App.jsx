import React from 'react'
import SignIn from './Components/SignIn'
import Login from './Components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />
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
