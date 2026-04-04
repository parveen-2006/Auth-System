import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function SignIn() {

    // const navigate = useNavigate()

    const [login, setLogin] = useState({
        name: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"
                    value={login.name}
                    name='name'
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <br />
                <label>Password</label>
                <input type="text"
                    value={login.password}
                    name='password'
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
