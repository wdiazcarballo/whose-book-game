import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const NotFoundIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.headings};
`;

const NotFoundText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    color: white;
  }
`;

const LinksContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkTitle = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const LinksList = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const QuickLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon>📚</NotFoundIcon>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundText>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </NotFoundText>
      <HomeButton to="/">Back to Home</HomeButton>
      
      <LinksContainer>
        <LinkTitle>You might be looking for:</LinkTitle>
        <LinksList>
          <QuickLink to="/collection">Book Collection</QuickLink>
          <QuickLink to="/game">Play the Game</QuickLink>
        </LinksList>
      </LinksContainer>
    </NotFoundContainer>
  );
};

export default NotFound;