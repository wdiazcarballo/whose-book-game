import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const glowing = keyframes`
  0% {background-position: 0 0;}
  50% {background-position: 400% 0;}
  100% {background-position: 0 0;}
`;

// Styled Components
const Container = styled.div`
  font-family: 'Harry Potter', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  img {
    width: 60%;
    max-width: 600px;
    height: auto;
    margin-top: auto;
  }
`;

const BookSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BookCover = styled.div`
  width: 400px;
  max-width: 90vw;
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
`;

const AuthorInfo = styled.div`
  color: white;
  font-family: 'Harry Potter', sans-serif;
  margin-top: 20px;
`;

const BookDescription = styled.div`
  max-width: 400px;
  font-family: 'Poppins', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const Title = styled.h3``;

const Description = styled.small``;

const ToggleButton = styled.button`
  padding: 15px 40px;
  border: none;
  outline: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
  font-family: "Harry Potter", sans-serif;

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #333;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #000000, #FFFFFF
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: ${glowing} 20s linear infinite;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  &:active:after {
    background: transparent;
  }

  &:active {
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const TableContent = styled.div`
  column-count: 2;
  column-gap: 40px;
  color: white;
  font-family: 'Harry Potter', sans-serif;
  margin-top: 20px;
  padding: 20px;
  text-align: left;
  display: ${props => props.visible ? 'block' : 'none'};

  @media (max-width: 768px) {
    column-count: 1;
    margin-left: 0;
  }
`;

const Chapter = styled.p``;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
`;

const Book13 = () => {
  const [tableVisible, setTableVisible] = useState(false);

  const showText = () => {
    setTableVisible(!tableVisible);
  };

  return (
    <Container>
      <VideoContainer>
        <BackgroundVideo autoPlay muted loop>
          <source src="./videos.mp4" type="video/mp4" />
        </BackgroundVideo>
      </VideoContainer>

      <MainContainer>
        <LogoContainer>
          <img src="./pngegg.png" alt="Harry Potter Logo" />
        </LogoContainer>

        <BookSection>
          <BookCover>
            <CoverImage src="./images.jpeg" alt="Harry Potter Front Cover" />
            <AuthorInfo>
              <h3>Written By J.K. Rowling</h3>
            </AuthorInfo>
          </BookCover>
        
          <BookDescription>
            <Title>Harry Potter And The Sorcerer's Stone</Title>
            <Description>แฮร์รี่ พอตเตอร์ เด็กชายกำพร้าที่เติบโตมาในตู้ใต้บันไดของบ้านลุงป้าผู้ใจร้าย วันหนึ่งกลับได้รับจดหมายปริศนา ที่พาเขาเข้าสู่โลกเวทมนตร์ที่เขาไม่เคยรู้ว่ามีอยู่จริง เขาได้ค้นพบว่าแท้จริงแล้วเขาเป็นพ่อมด และมีที่เรียนที่รอเขาอยู่—โรงเรียนฮอกวอตส์ โรงเรียนสอนเวทมนตร์คาถาและเวทวิทยา</Description>
            <Description>ท่ามกลางปราสาทลึกลับ บันไดที่เคลื่อนไหวได้ และบทเรียนแปลกประหลาด แฮร์รี่พบทั้งมิตรภาพและศัตรู พร้อมกันนั้น เขาก็เริ่มไขปริศนาเกี่ยวกับหินวิเศษลึกลับ และเงามืดของพ่อมดผู้ชั่วร้ายที่เขาไม่เคยลืม… การผจญภัยที่เปลี่ยนชีวิตเริ่มต้นขึ้นที่นี่</Description>
          </BookDescription>
        </BookSection>
        
        <ToggleButton onClick={showText}>
          Toggle Table Content
        </ToggleButton>
        
        <TableContent visible={tableVisible}>
          <Chapter>1. The Boy Who Lived</Chapter>
          <Chapter>2. The Vanishing Glass</Chapter>
          <Chapter>3. The Letters from No One</Chapter>
          <Chapter>4. The Keeper of the Keys</Chapter>
          <Chapter>5. Diagon Alley</Chapter>
        </TableContent>
        
        <Footer>
          <small>Project by Premch Phaosatheanthanon DTI103</small>
        </Footer>
      </MainContainer>
    </Container>
  );
};

export default Book13;