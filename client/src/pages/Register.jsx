import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pages.css'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {
        e.preventDefault()

        const { firstname, lastname, username, email, password } = data

        try {
            const { data } = await axios.post('http://localhost:5001/register', {
                firstname, lastname, username, email, password
            })

            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
                toast.success('Registration Successful')
                navigate('/login')
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='form-page-wrapper'>

            <form onSubmit={registerUser}>

                <label>First Name</label>
                <input type='text' value={data.firstname} onChange={(e) => setData({ ...data, firstname: e.target.value })} />

                <label>Last Name</label>
                <input type='text' value={data.lastname} onChange={(e) => setData({ ...data, lastname: e.target.value })} />

                <label>Username</label>
                <input type='text' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />

                <label>Email</label>
                <input type='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

                <label>Password</label>
                <input type='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />

                <button type='submit'>Sign Up</button>
                <Link to='/login'>Already have an accout? Login</Link>
                <Link to='/'>Back</Link>
            </form>
        </div>
    );
}

export default Register;