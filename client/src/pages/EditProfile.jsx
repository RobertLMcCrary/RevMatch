import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"
import styled from "styled-components"

function EditProfile() {

    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>Edit Proflie</h1>
            <Link to={'/profile'}>Back</Link>
        </div>
    )
}

export default EditProfile