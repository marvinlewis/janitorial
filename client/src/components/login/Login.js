import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const [ data, setData ] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/login`, data)
        .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push("/admin")
        })
        .catch(err => {
            console.log('error')
        })
    }

    return (
        <div className='login-cont'>
            <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>  
            <label htmlFor='username'> UserName: {''}
            <input
            name='username'
            type='text'
            id='username'
            onChange={handleChange}
            />
            </label>
            <label htmlFor='password'> Password: {''}
            <input
            name='password'
            type='password'
            id='password'
            onChange={handleChange}
            />
            </label>
            <button>Kell</button>
        </form>
        </div>
    )
}
export default Login 