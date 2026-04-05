import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import instance from '../service/api';

export default function SignIn() {

    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post("/auth/login", login)
            console.log(response.data);
            if (response && response.data.success && response.data.token) {
                localStorage.setItem("token", response.data.token)
                setTimeout(() => {
                    alert("Welcome User");
                    navigate("/home")
                }, 1000)
            }
        } catch (err) {
            console.log("login err", err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="email"
                    value={login.email}
                    name='email'
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <br />
                <label>Password</label>
                <input type="text"
                    value={login.password}
                    name='password'
                    onChange={handleChange}
                    placeholder='Enter your password'
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
