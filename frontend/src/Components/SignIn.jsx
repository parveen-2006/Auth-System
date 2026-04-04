import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { instance } from "../service/api"

export default function SignIn() {

    const navigate = useNavigate()

    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await instance.post("/auth/register", register);
            console.log(response);

        } catch (err) {
            console.log("Register err :", err)
        }

        navigate("/login");
        console.log(register)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text"
                    value={register.username}
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
