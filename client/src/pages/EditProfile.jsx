import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import styled from "styled-components";
import axios from "axios";

// Styled components
const EditProfilePage = styled.div`
    background-color: #f4f4f4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
`;

const InputField = styled.div`
    margin-bottom: 20px;
    text-align: left;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333;
    }
`;

const BackLink = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    background-color: #ddd;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
        background-color: #bbb;
    }
`;

function EditProfile() {
    const { user } = useContext(UserContext);
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {

            const response = await axios.put('http://localhost:5001/edit', {
                username,
                bio,
                email,
            }, {
                withCredentials: true
            })

            console.log('Profile updated:', response.data)

        }
        catch (error) {
            console.error('Error updating profile:', error.response?.data || error.message)
        }

        console.log({ username, bio, email });
    };

    return (
        <EditProfilePage>
            <FormContainer>
                <Title>Edit Profile</Title>
                <form onSubmit={handleSubmit}>
                    <InputField>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </InputField>
                    <InputField>
                        <Label htmlFor="bio">Bio</Label>
                        <Input
                            type="text"
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </InputField>
                    <InputField>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputField>
                    <ButtonContainer>
                        <BackLink to="/profile">Back</BackLink>
                        <SubmitButton type="submit">Save Changes</SubmitButton>
                    </ButtonContainer>
                </form>
            </FormContainer>
        </EditProfilePage>
    );
}

export default EditProfile;
