import React from "react";
import { Link } from "react-router-dom";
import './pages.css'

function Home() {
    return (
        <div className="page-wrapper">
            <h1>Welcome to RevMatch</h1>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Home