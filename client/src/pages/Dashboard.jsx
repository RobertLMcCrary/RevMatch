import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import AuthNavbar from '../components/AuthNavbar';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    width: 100vw;
    min-height: 54.5vh;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f4f4f4;
`;

const FeedContainer = styled.div`
    width: 80vw;
    min-height: 80vh;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
`;

const FeedTitle = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
`;

const PostList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const PostCard = styled.div`
    width: 28vw;
    height: auto;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    text-align: left;
`;

const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
`;

const PostCaption = styled.p`
    font-size: 1rem;
    color: #666;
`;

function Dashboard() {
    const { user } = useContext(UserContext);

    return (
        <>
            <AuthNavbar />
            <Container>
                <FeedContainer>
                    <FeedTitle>Your Feed</FeedTitle>
                    <PostList>
                        <PostCard>
                            {/* Post media here */}
                            <PostTitle>Post title</PostTitle>
                            <PostCaption>Post caption goes here.</PostCaption>
                        </PostCard>
                        <PostCard>
                            <PostTitle>Another Post</PostTitle>
                            <PostCaption>This is another post description.</PostCaption>
                        </PostCard>
                        {/* Add more posts dynamically here */}
                    </PostList>
                </FeedContainer>
            </Container>
        </>
    );
}

export default Dashboard;
