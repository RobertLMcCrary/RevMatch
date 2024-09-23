import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pages.css'

function Register() {
    
    const registerUser = () => {
        //function to register user
    }


    return (
        <div className='form-page-wrapper'>

            <form onSubmit={registerUser}>

                <label>First Name</label>
                <input type='text'  />

                <label>Last Name</label>
                <input type='text' />

                <label>Username</label>
                <input type='text' />

                <label>Email</label>
                <input type='email' />

                <label>Password</label>
                <input type='password' />

                <button className='form-button' type='submit'>Sign Up</button>
                <Link to='/login'>Already have an accout? Login</Link>
                <Link to='/'>Back</Link>
            </form>
        </div>
    );
}

export default Register;