import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pages.css'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function Login() {

    const loginUser = () => {
        //function to login user
    }

    return (
        <div className='form-page-wrapper'>

            <form onSubmit={loginUser}>

                <label>Email</label>
                <input type='email' />

                <label>Password</label>
                <input type='password' />

                <button className='form-button' type='submit'>Login</button>
                <Link to='/register'>Don't have an accout? Register</Link>
                <Link to='/'>Back</Link>
            </form>

        </div>
    );
}

export default Login;