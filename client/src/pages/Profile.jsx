import React, { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import AuthNavbar from "../components/AuthNavbar";

//css in js
const ProfilePage = styled.div`
    background-color: #fff;
    color: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const ProfileContainer = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 20px;
    text-align: center;
`;

const ProfilePicContainer = styled.div`
    margin: 20px auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #000;
`;

const ProfilePic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Username = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin: 10px 0;
`;

const Bio = styled.p`
    font-size: 16px;
    color: #666;
    margin: 10px 0;
`;

const Email = styled.p`
    font-size: 16px;
    color: #333;
`;

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <ProfilePage>
            <AuthNavbar />
            <ProfileContainer>
                <ProfilePicContainer>
                    <ProfilePic src={user.profilePic} alt="profile" />
                </ProfilePicContainer>
                <Link to={'/editprofile'}>Edit</Link>
                <Username>{user.username}</Username>
                <Bio>{user.bio}</Bio>
                <Email>{user.email}</Email>
            </ProfileContainer>
        </ProfilePage>
    );
}

export default Profile;
