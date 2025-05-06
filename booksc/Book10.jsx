import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-25px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const Container = styled.div`
  --primary-color: #2c3e50;
  --secondary-color: #e67e22;
  --accent-color: #c0392b;
  --text-color: #333;
  --light-bg: #f9f9f9;
  --font-main: 'Georgia', serif;
  --font-heading: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  
  font-family: var(--font-main);
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--light-bg);
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;

const Header = styled.header`
  background: linear-gradient(to right, rgba(44, 62, 80, 0.9), rgba(52, 73, 94, 0.9));
  color: white;
  padding: 40px 0;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  border-bottom: 5px solid var(--secondary-color);
`;

const BookHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
  }
`;

const CoverImage = styled.img`
  width: 250px;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 8px solid #8B4513;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(45deg, #d4af37, #8B4513);
    z-index: -1;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 768px) {
    margin-right: 60px;
    margin-bottom: 0;
  }
`;

const BookTitle = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-size: 2.8rem;
  margin-bottom: 15px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Author = styled.p`
  font-style: italic;
  margin-bottom: 25px;
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ToggleButton = styled.button`
  background: linear-gradient(to bottom, #8B4513, #654321);
  color: #e6c88a;
  border: none;
  padding: 12px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: var(--font-heading);
  font-weight: bold;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  border: 2px solid #e6c88a;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    background: linear-gradient(to bottom, #654321, #4a3219);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
`;

const Main = styled.main`
  padding: 50px 0;
  position: relative;
  z-index: 1;
`;

const ContentSection = styled.section`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 3px solid #8B4513;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid #e6c88a;
    pointer-events: none;
  }
`;

const TOCSection = styled(ContentSection)`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? fadeIn : 'none'} 0.8s ease;
`;

const CornerDecoration = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,0 L100,0 L100,100 Z' fill='%23e6c88a' opacity='0.5'/%3E%3C/svg%3E");
  background-size: cover;
`;

const TopLeftCorner = styled(CornerDecoration)`
  top: 0;
  left: 0;
  transform: rotate(0deg);
`;

const TopRightCorner = styled(CornerDecoration)`
  top: 0;
  right: 0;
  transform: rotate(90deg);
`;

const BottomRightCorner = styled(CornerDecoration)`
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
`;

const BottomLeftCorner = styled(CornerDecoration)`
  bottom: 0;
  left: 0;
  transform: rotate(270deg);
`;

const SectionHeading = styled.h3`
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  border-bottom: 3px solid var(--secondary-color);
  padding-bottom: 12px;
  display: inline-block;
`;

const TOCList = styled.ul`
  list-style: none;
  margin-left: 15px;
`;

const TOCItem = styled.li`
  margin-bottom: 15px;
  position: relative;
  padding-left: 30px;
  border-bottom: 1px solid #e6c88a;
  padding-bottom: 15px;
  font-family: var(--font-heading);
  display: block;
  line-height: 1.8;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "📜";
    position: absolute;
    left: 0;
    color: var(--secondary-color);
  }

  &:hover {
    transform: translateX(10px);
    color: var(--accent-color);
  }
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 15px;

  &:first-of-type:first-letter {
    font-size: 3.5rem;
    font-weight: bold;
    float: left;
    line-height: 0.8;
    padding-right: 8px;
    color: var(--accent-color);
    font-family: var(--font-heading);
  }
`;

const Highlight = styled.span`
  color: var(--secondary-color);
  font-weight: bold;
`;

const Footer = styled.footer`
  background: linear-gradient(to right, rgba(44, 62, 80, 0.9), rgba(52, 73, 94, 0.9));
  color: white;
  text-align: center;
  padding: 25px;
  margin-top: 50px;
  font-family: var(--font-main);
  position: relative;
  z-index: 1;
  border-top: 5px solid var(--secondary-color);
`;

const Book10 = () => {
  const [tocVisible, setTocVisible] = useState(false);
  
  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <InnerContainer>
        <Header>
          <BookHeader>
            <CoverImage src="103book.jpg" alt="Book Cover" />
            <BookTitle>
              <Title>A Journey to the Centre of the Earth</Title>
              <Subtitle>A Classic Science Fiction Adventure</Subtitle>
              <Author>By Jules Verne</Author>
            </BookTitle>
          </BookHeader>
          <ToggleContainer>
            <ToggleButton onClick={toggleTOC}>
              {tocVisible ? "Hide Chapters" : "Explore Chapters"}
            </ToggleButton>
          </ToggleContainer>
        </Header>

        <Main>
          <TOCSection active={tocVisible}>
            <TopLeftCorner />
            <TopRightCorner />
            <BottomRightCorner />
            <BottomLeftCorner />
            <SectionHeading>Table of Contents</SectionHeading>
            <TOCList>
              <TOCItem>Chapter I: My Uncle Makes a Great Discovery</TOCItem>
              <TOCItem>Chapter II: The Mysterious Parchment</TOCItem>
              <TOCItem>Chapter III: An Astounding Discovery</TOCItem>
              <TOCItem>Chapter IV: We Start on the Journey</TOCItem>
              <TOCItem>Chapter V: First Lessons in Climbing</TOCItem>
              <TOCItem>Chapter VI: Our Voyage to Iceland</TOCItem>
              <TOCItem>Chapter VII: Conversation and Discovery</TOCItem>
              <TOCItem>Chapter VIII: The Eider-Down Hunter—Off at Last</TOCItem>
              <TOCItem>Chapter IX: Our Start—We Meet with Adventures</TOCItem>
              <TOCItem>Chapter X: Traveling in Iceland</TOCItem>
            </TOCList>
          </TOCSection>

          <ContentSection>
            <TopLeftCorner />
            <TopRightCorner />
            <BottomRightCorner />
            <BottomLeftCorner />
            <SectionHeading>About the Book</SectionHeading>
            <AboutParagraph>The intrepid Professor Lidenbrock embarks upon the most incredible adventure of the nineteenth century. After decoding a scrap of paper in runic script, the professor and his nephew, Axel, embark on a journey to Iceland in search of a passage to the center of the earth.</AboutParagraph>
            <AboutParagraph>Along with their Icelandic guide, Hans, they travel down the crater of a volcano, encountering many dangers along the way, including prehistoric animals and natural hazards. Eventually, they surface again in southern Italy. The novel is filled with detailed descriptions of geological formations and ancient life forms, showcasing Verne's extensive research and imagination.</AboutParagraph>
            <AboutParagraph>First published in 1864, <Highlight>A Journey to the Centre of the Earth</Highlight> remains one of Jules Verne's most beloved works and a pioneering example of science fiction literature. The novel demonstrates Verne's uncanny ability to predict scientific developments while crafting an enthralling adventure story.</AboutParagraph>
          </ContentSection>
        </Main>
        <Footer>
          <p>&copy; project by Natakorn</p>
        </Footer>
      </InnerContainer>
    </Container>
  );
};

export default Book10;