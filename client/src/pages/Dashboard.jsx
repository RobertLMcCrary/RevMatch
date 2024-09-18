import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import './pages.css'

function Dashboard() {
    const {user} = useContext(UserContext)


    return (
        <div>
            <h1>RevMatch Dashboard</h1>
            {!!user && <h1>Welcome {user.email}</h1>}
        </div>
    )
}

export default Dashboard;