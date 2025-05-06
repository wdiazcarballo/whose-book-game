import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Styled Components
const Container = styled.div`
  font-family: 'th sarabun psk', serif;
  background: #006064;
  color: #e0f2f1; 
  margin: 20px;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url('https://amarinbooks.com/wp-content/uploads/2017/06/2-01.png') no-repeat center center/cover;
    filter: blur(10px);
    z-index: -1; 
    opacity: 0.6; 
  }
`;

const Navbar = styled.nav`
  background-color: rgba(0, 77, 64, 0.4);
  backdrop-filter: blur(8px);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
`;

const NavLogo = styled.a`
  font-family: 'Georgia', serif;
  color: #e0f2f1;
  font-size: 1.8em;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
`;

const NavMenu = styled.ul`
  font-family: 'Georgia', serif;
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-left: auto;
`;

const NavItem = styled.li`
  & a {
    color: #b2dfdb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  & a:hover {
    color: #ffffff;
  }
`;

const Title = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 3em;
  color: #ffffff;
  margin-bottom: 15px;
  padding-bottom: 6px;
  letter-spacing: 9px;
  font-weight: bold;
  text-align: center;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.6));
`;

const Subtitle = styled.h2`
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 15px;
  padding-bottom: 6px;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-align: center;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.6));
`;

const CoverImage = styled.img`
  max-width: 500px;
  display: block;
  margin: 20px auto;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Heading3 = styled.h3`
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 10px;
  padding-bottom: 4px;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-align: center;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.6));
`;

const Heading4 = styled.h4`
  font-family: 'Georgia', serif;
  font-size: 2em;
  color: #ffffff;
  margin-bottom: 15px;
  padding-bottom: 6px;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-align: center;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.6));
`;

const Author = styled.p`
  color: #b2dfdb;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-family: 'Georgia', serif;
  background: linear-gradient(to right, #009688, #004d40); 
  color: white;
  padding: 10px 20px;
  border: 2px solid #004d40; 
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s, box-shadow 0.3s, background 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  animation: ${bounce} 2s infinite ease-in-out;

  &:hover {
    background: linear-gradient(to right, #00796b, #00382e);
  }
`;

const Main = styled.main``;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 40px auto 0 auto;
  background-color: #004d40; 
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #26a69a; 
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
`;

const TOCSection = styled(ContentSection)`
  display: ${props => props.show ? 'block' : 'none'};
`;

const SectionHeading = styled.h5`
  font-family: 'Georgia', serif;
  font-size: 1.6em;
  color: #b2dfdb; 
  margin-bottom: 15px;
  border-bottom: 2px solid #4db6ac;
  padding-bottom: 6px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

const TOCHeading = styled.h6`
  font-family: 'Georgia', serif;
  font-size: 1.6em;
  color: #b2dfdb; 
  margin-bottom: 15px;
  border-bottom: 2px solid #4db6ac;
  padding-bottom: 6px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

const TOCList = styled.ul`
  padding-left: 25px;
`;

const TOCItem = styled.li`
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
  padding-left: 15px;
  color: #b2dfdb;

  &::before {
    content: "›";
    position: absolute;
    left: 0;
    color: #80cbc4; 
    font-weight: bold;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  background-color: rgba(0, 77, 64, 0.6);
  color: #b2dfdb;
`;

const Book7 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <Navbar>
        <NavContainer>
          <img src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/book-open.svg" alt="Book Icon" style={{ width: '50px', height: 'auto' }} />
          <NavLogo href="#my-book-my-web">My Book My Web</NavLogo>
          <NavMenu>
            <NavItem><a href="#home">Home</a></NavItem>
            <NavItem><a href="#about-book">About the Book</a></NavItem>
            <NavItem><a href="#search">Search</a></NavItem>
          </NavMenu>
        </NavContainer>
      </Navbar>

      <Title>Sherlock Holmes</Title>
      <Subtitle>เชอร์ล็อก โฮล์มส์</Subtitle>
      <CoverImage src="https://amarinbooks.com/wp-content/uploads/2017/06/2-01.png" alt="Book Cover" />
      <Heading3>ตอน จัตวาลักษณ์</Heading3>
      <Heading4>THE SIGN OF FOUR</Heading4>
      <Author>by เซอร์อาร์เทอร์ โคแนน ดอยล์</Author>
      <Button onClick={toggleTOC}>Toggle Table of Contents</Button>

      <Main>
        <ContentSection>
          <SectionHeading>About the Book</SectionHeading>
          <p>เกิดคดีที่มีสาเหตุมาจากการทรยศหักหลัง สมบัติที่ถูกขโมยคำมั่นสัญญาลับของอดีตนักโทษสี่คน และประวัติศาสตร์การเมืองของอินเดียที่โฮล์มส์ได้ทำการสืบสวนและวางอุบายเพื่อจับตัวคนร้าย เป็นปริศนาซ้อนปริศนาที่มีแต่โฮล์มส์เท่านั้นที่สามารถคลี่คลายได้</p>
        </ContentSection>
        
        <TOCSection show={tocVisible}>
          <TOCHeading>Contents</TOCHeading>
          <TOCList>
            <TOCItem>Chapter 1: ศาสตร์แห่งการอนุมาน</TOCItem>
            <TOCItem>Chapter 2: วาทะแถลงคดี</TOCItem>
            <TOCItem>Chapter 3: เสาะแสวงข้อไข</TOCItem>
            <TOCItem>Chapter 4: เรื่องของชายหัวล้าน</TOCItem>
            <TOCItem>Chapter 5: เหตุสลดใจที่ปอนดิเชอร์รีลอดจ์</TOCItem>
            <TOCItem>Chapter 6: เชอร์ล็อก โฮล์มส์ ให้อรรถาธิบาย</TOCItem>
            <TOCItem>Chapter 7: ตอนที่เกี่ยวกับถัง</TOCItem>
            <TOCItem>Chapter 8: กองหนุนสำนักถนนเบเกอร์</TOCItem>
            <TOCItem>Chapter 9: สบช่องคืบหน้า</TOCItem>
            <TOCItem>Chapter 10: วาระสุดท้ายของชาวเกาะ</TOCItem>
            <TOCItem>Chapter 11: สมบัติอัคระมหาศาล</TOCItem>
            <TOCItem>Chapter 12: เรื่องประหลาดของโจนาทาน สมอลล์</TOCItem>
          </TOCList>
        </TOCSection>
      </Main>
      
      <Footer>
        <p>Project by Natkritta Thanatnan for DTI103</p>
      </Footer>
    </Container>
  );
};

export default Book7;