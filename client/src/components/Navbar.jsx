import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
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

const NavButton = styled.button`
    padding: 10px 20px;
    font-size: 1.2em;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`;

function Navbar() {
    const navigate = useNavigate();

    return (
        <NavbarContainer>
            <Title>RevMatch</Title>
            <NavButton onClick={() => navigate('/login')}>Login</NavButton>
        </NavbarContainer>
    );
}

export default Navbar;
