import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBooks } from '../context/BookContext';

const Hero = styled.section`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryLight}, ${({ theme }) => theme.colors.primary});
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
  }
`;

const FeaturesSection = styled.section`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
`;

const BooksPreview = styled.section`
  padding: 2rem 0;
  margin-top: 3rem;
`;

const BookPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const BookCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const BookCover = styled.div`
  height: 250px;
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
  padding: 1rem;
`;

const BookTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 2rem;
  font-weight: 500;
`;

const Home = () => {
  const { books } = useBooks();
  
  // Get 4 random books for preview
  const previewBooks = [...books]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div>
      <Hero>
        <HeroTitle>Whose Book Is This?</HeroTitle>
        <HeroSubtitle>
          An interactive book guessing game featuring a collection of books created by students.
          Test your knowledge and discover new books along the way!
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton to="/game">Play the Game</PrimaryButton>
          <SecondaryButton to="/collection">View Book Collection</SecondaryButton>
        </ButtonGroup>
      </Hero>

      <FeaturesSection>
        <SectionTitle>How It Works</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🔍</FeatureIcon>
            <FeatureTitle>Guess the Book</FeatureTitle>
            <FeatureDescription>
              Use the hints provided to guess which book is being described. The fewer hints you need, the higher your score!
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Explore Collection</FeatureTitle>
            <FeatureDescription>
              Browse through our diverse collection of books created by students. Each book has its own unique design and style.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🏆</FeatureIcon>
            <FeatureTitle>Earn Points</FeatureTitle>
            <FeatureDescription>
              Compete for the highest score by correctly identifying books with minimal hints. Challenge yourself and your friends!
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <BooksPreview>
        <SectionTitle>Book Previews</SectionTitle>
        <BookPreviewGrid>
          {previewBooks.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <BookCard>
                <BookCover>
                  {book.title}
                </BookCover>
                <BookInfo>
                  <BookTitle>{book.title}</BookTitle>
                </BookInfo>
              </BookCard>
            </Link>
          ))}
        </BookPreviewGrid>
        <ViewAllLink to="/collection">View All Books &rarr;</ViewAllLink>
      </BooksPreview>
    </div>
  );
};

export default Home;