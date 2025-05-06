import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useBooks } from '../context/BookContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:before {
    content: '←';
  }
`;

const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 350px 1fr;
  }
`;

const BookInfo = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const BookTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.headings};
`;

const BookMeta = styled.div`
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  
  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Language = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const BookPreview = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
  height: min-content;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
  }
`;

const BookComponentWrapper = styled.div`
  max-width: 100%;
  transform: scale(0.9);
  transform-origin: top center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 600px;
  overflow: auto;
  
  // Hide scrollbar but keep functionality
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const NavButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
  
  &.prev:before {
    content: '←';
    margin-right: 0.5rem;
  }
  
  &.next:after {
    content: '→';
    margin-left: 0.5rem;
  }
  
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const NotFoundIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useBooks();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  
  // Find the book
  useEffect(() => {
    const foundBook = books.find(b => b.id === parseInt(id));
    setBook(foundBook);
  }, [id, books]);
  
  // Handle prev/next navigation
  const getAdjacentBookId = (direction) => {
    const currentIndex = books.findIndex(b => b.id === parseInt(id));
    if (currentIndex === -1) return null;
    
    if (direction === 'prev') {
      return currentIndex > 0 ? books[currentIndex - 1].id : null;
    } else {
      return currentIndex < books.length - 1 ? books[currentIndex + 1].id : null;
    }
  };
  
  const prevBookId = getAdjacentBookId('prev');
  const nextBookId = getAdjacentBookId('next');
  
  if (!book) {
    return (
      <NotFoundContainer>
        <NotFoundIcon>📚</NotFoundIcon>
        <h2>Book Not Found</h2>
        <p>Sorry, the book you're looking for doesn't exist.</p>
        <BackButton to="/collection">Back to Collection</BackButton>
      </NotFoundContainer>
    );
  }
  
  const BookComponent = book.component;
  
  return (
    <Container>
      <BackButton to="/collection">Back to Collection</BackButton>
      
      <BookContainer>
        <BookInfo>
          <BookTitle>{book.title}</BookTitle>
          <BookMeta>
            <MetaItem>
              <strong>Author:</strong> {book.author}
            </MetaItem>
            <MetaItem>
              <strong>Book ID:</strong> #{book.id}
            </MetaItem>
            <Language>{book.language}</Language>
          </BookMeta>
          
          <h3>About</h3>
          <p>This book was created by a student as part of a book presentation project.</p>
        </BookInfo>
        
        <BookPreview>
          <BookComponentWrapper>
            <BookComponent />
          </BookComponentWrapper>
        </BookPreview>
      </BookContainer>
      
      <NavigationButtons>
        {prevBookId ? (
          <NavButton to={`/book/${prevBookId}`} className="prev">
            Previous Book
          </NavButton>
        ) : (
          <NavButton as="span" className="prev disabled">
            Previous Book
          </NavButton>
        )}
        
        {nextBookId ? (
          <NavButton to={`/book/${nextBookId}`} className="next">
            Next Book
          </NavButton>
        ) : (
          <NavButton as="span" className="next disabled">
            Next Book
          </NavButton>
        )}
      </NavigationButtons>
    </Container>
  );
};

export default BookDetails;