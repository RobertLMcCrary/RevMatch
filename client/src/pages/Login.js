import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pages.css'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()

        const {email, password} = data
        
        try {
            const {data} = await axios.post('http://localhost:5000/login', {
                email,
                password
            })
            if(data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
                toast.success('Welcome to RevMatch!')
                navigate('/dashboard')
            }
        }
        catch(error) {
            console.log(error)
        }
    }


    return (
        <div className='page-wrapper'>
            <h1>Login</h1>

            <form onSubmit={loginUser}>
                <label>Email</label>
                <input type='email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

                <label>Password</label>
                <input type='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />

                <button type='submit'>Login</button>
                <Link to='/register'>Don't have an accout? Register</Link>
                <Link to='/'>Back</Link>
            </form>

        </div>
    );
}

export default Login;
