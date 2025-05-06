import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const natureBGAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  margin: 0;
  padding: 20px;
  font-family: 'Sarabun', sans-serif;
  color: #2f4f4f;
  background: linear-gradient(-45deg, #d0f0c0, #a8e6cf, #dcedc1, #b2f7ef);
  background-size: 400% 400%;
  animation: ${natureBGAnimation} 20s ease infinite;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Main = styled.main`
  background-color: rgba(66, 35, 35, 0.85);
  margin: 40px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 100, 0, 0.2);
  width: 80%;
`;

const Section = styled.section`
  margin-bottom: 30px;
  border: 1px solid #d5a5a2;
  border-radius: 16px;
  padding: 20px;
  background-color: #f8fff5;
`;

const AboutBook = styled(Section)`
  padding: 20px;
  background-color: #e1e3da;
  border: 10px solid #370d0d;
  margin-bottom: 30px; 
  border-radius: 100px;
`;

const TOC = styled(Section)`
  padding: 20px;
  background-color: #f9f9f9;
  border: 10px solid #490202;
  border-radius: 100px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #bb6d66;
  color: rgb(65, 51, 51);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e0f2f1;
    color: #9fc5a1;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CoverImage = styled.img`
  max-width: 200px;
  border: 3px solid #000;
  display: inline-block;
`;

const GoldTitle = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #d4af37;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #f9d976, #f39c12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 6px rgba(255, 215, 0, 0.6);
  }
`;

const HighlightText = styled.p`
  color: rgb(77, 37, 37);
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

const Yellow = styled.span`
  font-size: 16px;
  margin: 5px;
  color: #080800;
`;

const Heading3 = styled.h3`
  color: #490808;
`;

const Book1 = () => {
  const [showTOC, setShowTOC] = useState(false);

  const toggleTOC = () => {
    setShowTOC(!showTOC);
  };

  return (
    <Container>
      <Header>
        <CoverImage
          src="https://ff.lnwfile.com/_webp_max_images/600/600/cc/fa/bf.webp"
          alt="Book Cover"
        />
        <ImageWrapper>
          <h2>สุดยอดคัมภีร์</h2>
          <h1>การเงิน</h1>
          <h3>จาก</h3>
          <h1>ฮาร์วาร์ด</h1>
          <h3>=====ฉบับปรับปรุง=====</h3>
          <h2>สุดยอดคัมภัร์การเงิน</h2>
          <h4>สำหรับผู้จัดการ ผู้บริหาร</h4>
          <h4>เเละนักลงทุนหุ้นพื้นฐานทุกคน</h4>
        </ImageWrapper>
        <GoldTitle>FINANCIAL INTELLIGENCE</GoldTitle>
        <HighlightText>KAREN BERMAN, JOEKNIGHT เเละ JOHN CASE</HighlightText>
      </Header>

      <Main>
        <AboutBook>
          <Heading3>About the Book</Heading3>
          <Button onClick={toggleTOC}>My contend</Button>
          <p>ความเข้าใจในเรื่องตัวเลขทางการเงิน ความสำคัญ</p>
          <p>เเละความหมายที่ซ่อนอยู่เบื้องหลังตัวเลขต่างๆ </p>
          <p>ที่ผู้จัดการเเละนักลงทุนทุกคนจำเป็นต้องรู้</p>
        </AboutBook>
        
        <TOC show={showTOC}>
          <Heading3>Table of Contents</Heading3>
          <List>
            <ListItem>Chapter 1 : ศิลปะทางการเงิน (ทำไมถึงสำคัญ?)</ListItem>
            <ListItem>Chapter 2 : คุณสมบัติเฉพาะตัว (หลายๆอย่าง) ของงบกำไรขาดทุน</ListItem>
            <ListItem>Chapter 3 : งบดุลบอกเรื่องราวต่างๆได้มากที่สุด</ListItem>
            <ListItem>Chapter 4 : เงินสดคือพระราชา</ListItem>
            <ListItem>Chapter 5 : อัตราการเรียนรู้ว่าจริงๆเเล้ว ตัวเลขต่างๆ บอกอะไรเเก่คุณได้บ้าง</ListItem>
            <ListItem>Chapter 6 : คำนวณ เเละ ทำความเข้าใจอย่างเเท้จริง ในเรื่องผลตอบเเทนต่อการลงทุน</ListItem>
            <ListItem>Chapter 7 : การใช้ความฉลาดรู้ทางการเงินที่สำคัญ การบริหารเงินทุนหมุนเวียน</ListItem>
            <ListItem>Chapter 8 : การทำให้ทั้งองค์กรมีความฉลาดด้านการเงิน</ListItem>
          </List>
        </TOC>
      </Main>
      
      <Footer>
        <Logo 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png" 
          alt="logo" 
        />
        <Yellow>Havard University</Yellow>
      </Footer>
    </Container>
  );
};

export default Book1;