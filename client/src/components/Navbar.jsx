import React from "react"
import { Link, useNavigate } from "react-router-dom"
import './components.css'

function Navbar() {

    const navigate = useNavigate()

    return (
        <div className="navbar">
            <h1>RevMatch</h1>
            <button className="nav-button" onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Navbar