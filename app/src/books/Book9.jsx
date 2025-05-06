import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes animations
const spin3D = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

// Styled Components
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(-45deg, #0d0221, #1e0036, #000020, #0d0221);
  background-size: 400% 400%;
  color: #e0e0e0;
  margin: 20px;
  line-height: 1.7;
  overflow-x: hidden;
  position: relative;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const InfinitySign = styled.img`
  animation: ${spin3D} 10s linear infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
  max-width: 220px;
  display: block;
  margin: 40px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
`;

const Title = styled.h1`
  text-shadow:
    0 0 10px #8ab4f8,
    0 0 20px #5a9bcf,
    0 0 30px #7b68ee;
`;

const Subtitle = styled.h2`
  text-shadow:
    0 0 10px #8ab4f8,
    0 0 20px #5a9bcf,
    0 0 30px #7b68ee;
`;

const Author = styled.p`
  text-shadow:
    0 0 10px #8ab4f8,
    0 0 20px #5a9bcf,
    0 0 30px #7b68ee;
`;

const Main = styled.main`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const AboutBook = styled.section`
  max-width: 640px;
  margin: 30px auto;
  padding: 25px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;

  &:hover {
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
  }
`;

const CoverImage = styled.img`
  max-width: 220px;
  display: block;
  margin: 40px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TOCButton = styled.button`
  animation: ${bounce} 1.2s infinite ease-in-out;
  background: linear-gradient(135deg, #5a9bcf, #1f4e79);
  color: #fff;
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background: linear-gradient(135deg, #1f4e79, #5a9bcf);
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
    border: 2px solid #1f4e79;
  }
`;

const TOCSection = styled.section`
  max-width: 640px;
  margin: 30px auto;
  padding: 25px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  text-align: left;
  width: 100%;
  color: #a7c7f9;
  border-left: 6px solid #5a9bcf;
  display: ${props => props.visible ? 'block' : 'none'};

  &:hover {
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
  }
`;

const TOCList = styled.ul`
  padding-left: 25px;
`;

const TOCItem = styled.li`
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
  padding-left: 15px;

  &::after {
    position: absolute;
    color: #aed5f6;
    font-weight: bold;
  }
`;

const SectionHeading = styled.h3`
  font-family: 'Merriweather', serif;
  font-size: 1.8em;
  color: #cfd8ff;
  margin-bottom: 15px;
  border-bottom: 2px solid #4f66ff;
  padding-bottom: 6px;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const Book9 = () => {
  const [tocVisible, setTocVisible] = useState(true);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <Header>
        <InfinitySign 
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Autism_spectrum_infinity_awareness_symbol.svg" 
          alt="Book Cover" 
        />
        <Title>ปลายทางที่ Infinity</Title>
        <Subtitle>ความสวยงามอันเป็นนิรันดร์ของคณิตศาสตร์</Subtitle>
        <Author>พิพัฒน์ พสุธารชาติ</Author>
      </Header>
     
      <Main>
        <AboutBook>
          <SectionHeading>About the Book</SectionHeading>
          <p>ความคิดทางคณิตศาสตร์เป็นสิ่งที่อยู่เหนือโลกทางประสาทสัมผัสนี้ออกไป</p>
          <p>ภาพวาดอาจมีสีจางลง สิ่งก่อสร้างชั้นเลิศต่างๆ มีวันที่จะแตกหักผุพัง</p>
          <p>กาลเวลาสามารถทำลายทุกสิ่งทุกอย่างได้</p>
          <p>แต่ความรู้ทางคณิตสาสตร์จะยังคงยืนยงต่อไปได้โดยไม่มีวันเปลี่ยนแปลง</p>
        </AboutBook>

        <CoverImage 
          src="cover.jpg" 
          alt="Cover of the book 'ปลายทางที่ Infinity'" 
        />
        <TOCButton onClick={toggleTOC}>
          Table of Contents
        </TOCButton>
        
        <TOCSection visible={tocVisible}>
          <SectionHeading>Table of Contents</SectionHeading>
          <TOCList>
            <TOCItem>Chapter 1: จุดเริ่มต้น</TOCItem>
            <TOCItem>Chapter 2: เส้นตรง</TOCItem>
            <TOCItem>Chapter 3: สมมติฐาน</TOCItem>
            <TOCItem>Chapter 4: เส้นโค้ง</TOCItem>
            <TOCItem>Chapter 5: การสังเกต</TOCItem>
            <TOCItem>Chapter 6: สัญลักษณ์</TOCItem>
            <TOCItem>Chapter 7: ภาษา</TOCItem>
            <TOCItem>Chapter 8: ความขัดแย้ง</TOCItem>
            <TOCItem>Chapter 9: จำนวน</TOCItem>
            <TOCItem>Chapter 10: เครื่องคำนวณ</TOCItem>
            <TOCItem>Chapter 11: มนุษย์</TOCItem>
            <TOCItem>Chapter 12: จุดสิ้นสุด</TOCItem>
          </TOCList>
        </TOCSection>
      </Main>
     
      <Footer>
        <p>Project by Baitong for DTI103</p>
      </Footer>
    </Container>
  );
};

export default Book9;