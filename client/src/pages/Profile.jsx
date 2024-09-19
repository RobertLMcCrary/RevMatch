import React, { useContext } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import AuthNavbar from "../components/AuthNavbar";

// Styled components
const ProfilePage = styled.div`
    background-color: #f4f4f4;
    color: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const ProfileContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
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

const EditButton = styled(Link)`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333;
    }
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
                <Username>{user.username}</Username>
                <Bio>{user.bio}</Bio>
                <EditButton to="/editprofile">Edit Profile</EditButton>
            </ProfileContainer>
        </ProfilePage>
    );
}

export default Profile;
