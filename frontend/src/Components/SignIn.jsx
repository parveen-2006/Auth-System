import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function SignIn() {

   const navigate =  useNavigate()

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login")
        console.log(register)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"
                    value={register.name}
                    name='name'
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <br />
                <label>Email</label>
                <input type="text"
                    value={register.email}
                    name='email'
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <br />
                <label>Password</label>
                <input type="text"
                    value={register.password}
                    name='password'
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
