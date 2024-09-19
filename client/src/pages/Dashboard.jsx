import React, { useEffect, useState, useContext, useSyncExternalStore } from 'react'
import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import AuthNavbar from '../components/AuthNavbar';
import styled from 'styled-components';

function Dashboard() {

    const { user } = useContext(UserContext)


    return (
            <div>
                <AuthNavbar />
            </div>
    )
}

export default Dashboard;