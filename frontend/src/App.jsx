  import React from 'react'
  import Login from './Components/Login'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  import Register from './Components/Register'
  import Protected from './Components/Protected'
  import Home from './Components/Home'
  import Navbar from './Components/Navbar'

  export default function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar />,
        children: [
          {
            path: '/register',
            element: <Register />
          },
          {
            path: '/login',
            element: <Login />
          },
          {
            element: <Protected />,
            children: [
              {
                path: "/home",
                element: <Home />
              }
            ]
          }
        ]
      },



    ])
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
  }
