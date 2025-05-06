import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #2c2f36;
  color: #f5f5f5;
  margin: 20px;
  line-height: 1.6;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const CoverImage = styled.img`
  max-width: 220px;
  display: block;
  margin: 20px auto;
  border: 4px solid #ff6600;
  box-shadow: 0 4px 12px rgba(255, 102, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #ffffff;
`;

const Subtitle = styled.h2`
  font-size: 1.4em;
  color: #ff8533;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-style: italic;
  color: #cccccc;
`;

const Main = styled.main``;

const ContentBox = styled.section`
  max-width: 600px;
  margin: 20px auto;
  background-color: #3b3e47;
  padding: 20px;
  border-left: 5px solid #ff6600;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 102, 0, 0.1);
`;

const TOCBox = styled(ContentBox)`
  display: ${props => props.show ? 'block' : 'none'};
`;

const HighlightHeading = styled.h4`
  color: #ffa94d;
  font-weight: bold;
  white-space: pre-line;
`;

const ActionButton = styled.button`
  background-color: #ff6600;
  color: #1e1e1e;
  padding: 10px 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 15px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffa94d;
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  color: #bbbbbb;
`;

const Book5 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <Header>
        <CoverImage src="cover.jpg" alt="Book Cover" />
        <Title>Do Hard Things</Title>
        <Subtitle>วิทยาศาสตร์ของการไม่ยอมแพ้</Subtitle>
        <Author>by Steve Magness</Author>    
      </Header>

      <Main>
        <ContentBox>
          <h3>About the Book</h3>
          <p>
            อะไรทำให้คนคนหนึ่ง<br />
            ยอมแพ้ง่ายกว่าอีกคน?<br />
            ในยามที่ใกล้จะถอดใจ<br />
            อะไรคือปัจจัยที่ทำให้เรากลับมาฮึดสู้?<br />
          </p>
          <HighlightHeading>
            คำตอบอาจไม่ใช่อย่างที่คุณคิด
          </HighlightHeading>
          <p>
            Steve magness นักวิทยาศาสตร์การกีฬาและโค้ชโอลิมปิก<br />
            จะพาคุณออกไปสำรวจสนามแข่งโอลิมปิก เวทีผู้นำระดับโลก<br />
            สมรภูมิรบ ห้องประชุมผู้บริหาร ตลอดจนกลางทะเลลุก<br />
            เพื่อค้นหาความลับที่อยู่เบื้องหลัง "จิตใจที่แข็งแกร่ง"<br />
            และมอบแนวทางที่จะช่วยให้คุณสร้างมันขึ้นมา<br /><br />
          </p>
          <ActionButton onClick={toggleTOC}>Toggle Table of Contents</ActionButton>
        </ContentBox>

        <TOCBox show={tocVisible}>
          <h3>Table of Contents</h3>
          <ul>
            <li>Chapter 1: จากโค้ชสายโหด ผู้ปกครองจองเฮี้ยมและคนแข็งแกร่งสู่การค้นหาความเข้มแข็งภายในที่แท้จริง</li>
            <li>Chapter 2: จมน้ำหรือว่ายน้ำ เรารับเอาบทเรียนจากกองทัพมาใช้แบบผิดเพี้ยนได้อย่างไร</li>
            <li>Chapter 3: ยอมรับความสามารถของตนเอง</li>
          </ul>      
        </TOCBox>
      </Main>

      <Footer>
        <p>Project by [Student Name] for DTI101</p>
      </Footer>
    </Container>
  );
};

export default Book5;