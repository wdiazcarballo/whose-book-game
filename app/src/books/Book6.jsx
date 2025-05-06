import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  margin: 0;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #cbd8f4;
  color: #333;
  line-height: 1.6;
`;

const Header = styled.header`
  background-color: #f9c74f;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Subtitle = styled.h2`
  margin-top: 0.5rem;
  font-weight: normal;
  font-size: 1.2rem;
`;

const Main = styled.main``;

const CoverSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const CoverImage = styled.img`
  width: 250px;
  border: 4px solid #f9844a;
  border-radius: 8px;
`;

const SummarySection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

const SummaryButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #90be6d;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7ca757;
  }
`;

const Blurb = styled.p`
  margin-top: 1rem;
  font-style: italic;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const TOCSection = styled.section`
  padding: 0 2rem;
`;

const TOCHeading = styled.h3`
  color: #0088ff;
`;

const TOCList = styled.ul`
  list-style-type: square;
  padding-left: 1.5rem;
`;

const Footer = styled.footer`
  background-color: #130a39;
  text-align: center;
  padding: 1rem;
  color: white;
`;

const Book6 = () => {
  const [summaryVisible, setSummaryVisible] = useState(false);

  const toggleSummary = () => {
    setSummaryVisible(!summaryVisible);
  };

  return (
    <Container>
      <Header>
        <Title>The Little Prince</Title>
        <Subtitle>by Antoine de Saint-Exupéry</Subtitle>
      </Header>

      <Main>
        <CoverSection>
          <CoverImage src="cover.jpg" alt="The Little Prince book cover" />
        </CoverSection>

        <SummarySection>
          <SummaryButton onClick={toggleSummary}>ดูคำโปรย</SummaryButton>
          <Blurb visible={summaryVisible}>
            "All grown-ups were once children... but only few of them remember it."
          </Blurb>
        </SummarySection>

        <TOCSection>
          <TOCHeading>สารบัญ</TOCHeading>
          <TOCList>
            <li>Chapter 1 – การพบกันในทะเลทราย</li>
            <li>Chapter 2 – ดาว B-612 และดอกกุหลาบ</li>
            <li>Chapter 3 – การเดินทางผ่านดาวทั้งหก</li>
            <li>Chapter 4 – การพบกับสุนัขจิ้งจอก</li>
            <li>Chapter 5 – การกลับบ้านและคำร่ำลา</li>
          </TOCList>
        </TOCSection>
      </Main>

      <Footer>
        <p>Inspired by the book cover • Created by Nanthawat</p>
      </Footer>
    </Container>
  );
};

export default Book6;