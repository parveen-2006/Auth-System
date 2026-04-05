import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/register" >Register</Link>
                <Link to="/login" >Login</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
