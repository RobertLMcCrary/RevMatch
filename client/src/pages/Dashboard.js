import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Dashboard() {

    const [user, setUser] = useState(null)

    const fetchData = async () => {
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>RevMatch Dashboard</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.firstname}!</p>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                    <p>Full Name: {user.firstname} {user.lastname}</p>
                </div>
            ) : (
                <div>No user data available</div>
            )}
        </div>
    );
}

export default Dashboard;
