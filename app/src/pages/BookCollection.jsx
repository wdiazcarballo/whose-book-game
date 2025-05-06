import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBooks } from '../context/BookContext';

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.headings};
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  flex: 1;
  min-width: 250px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : 'white'};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text};
  border: 1px solid ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primaryDark : theme.colors.background};
  }
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const BookCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const BookCover = styled.div`
  height: 280px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  padding: 1rem;
`;

const BookInfo = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BookTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.headings};
`;

const BookAuthor = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const BookLanguage = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: auto;
`;

const ViewButton = styled(Link)`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: white;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const EmptyStateMessage = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.headings};
`;

const BookCollection = () => {
  const { books } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('all');
  const [filteredBooks, setFilteredBooks] = useState(books);
  
  // Filter books based on search term and language
  useEffect(() => {
    let result = books;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by language
    if (language !== 'all') {
      result = result.filter(book => 
        book.language.toLowerCase().includes(language.toLowerCase())
      );
    }
    
    setFilteredBooks(result);
  }, [books, searchTerm, language]);
  
  return (
    <div>
      <PageHeader>
        <Title>Book Collection</Title>
        <Subtitle>
          Browse through our collection of student-created books. Click on a book to view details.
        </Subtitle>
      </PageHeader>
      
      <FilterContainer>
        <SearchInput 
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <FilterGroup>
          <FilterButton 
            active={language === 'all'} 
            onClick={() => setLanguage('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={language === 'thai'} 
            onClick={() => setLanguage('thai')}
          >
            Thai
          </FilterButton>
          <FilterButton 
            active={language === 'english'} 
            onClick={() => setLanguage('english')}
          >
            English
          </FilterButton>
        </FilterGroup>
      </FilterContainer>
      
      {filteredBooks.length > 0 ? (
        <BooksGrid>
          {filteredBooks.map((book) => (
            <BookCard key={book.id}>
              <BookCover>
                {book.title}
              </BookCover>
              <BookInfo>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>by {book.author}</BookAuthor>
                <BookLanguage>{book.language}</BookLanguage>
              </BookInfo>
              <ViewButton to={`/book/${book.id}`}>
                View Book
              </ViewButton>
            </BookCard>
          ))}
        </BooksGrid>
      ) : (
        <EmptyState>
          <EmptyStateIcon>📚</EmptyStateIcon>
          <EmptyStateMessage>No books found</EmptyStateMessage>
          <p>Try adjusting your search or filter criteria.</p>
        </EmptyState>
      )}
    </div>
  );
};

export default BookCollection;