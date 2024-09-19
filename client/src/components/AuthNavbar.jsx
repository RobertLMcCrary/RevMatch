import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthNavbarContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    gap: 20vw;
    height: 10vh;
`;

const Title = styled.h1`
    font-size: 3vw;
`;

const NavLink = styled(Link)`
    font-size: 1.2em;
    text-decoration: none;
    color: #000;

    &:hover {
        text-decoration: underline;
    }
`;

function AuthNavbar() {
    return (
        <AuthNavbarContainer>
            <Title>RevMatch</Title>
            <NavLink to="/dashboard">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </AuthNavbarContainer>
    );
}

export default AuthNavbar;
