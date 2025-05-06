import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
  background-color: #f0f2f5;
  color: #333;
  margin: 0;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const CoverImage = styled.img`
  max-width: 200px;
  display: block;
  margin: 20px auto;
  border: 3px solid #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: #666;
  margin-bottom: 5px;
`;

const Author = styled.p`
  font-style: italic;
  color: #888;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #52bed1;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #51dfb0;
  }
`;

const Main = styled.main`
  text-align: center;
  margin-bottom: 30px;
`;

const AboutBook = styled.section`
  max-width: 700px;
  margin: 20px auto;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #000;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const AboutTitle = styled.div`
  display: inline-block;
  border: 2px solid #000;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  background-color: #f67f67;
  margin-bottom: 20px;
`;

const TOC = styled.section`
  max-width: 700px;
  margin: 40px auto 20px auto;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #000;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const TOCHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
`;

const TOCList = styled.ul`
  padding-left: 20px;
  list-style: disc inside;
`;

const TOCItem = styled.li`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 1.6;
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 30px;
`;

const Book12 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <Header>
        <CoverImage 
          src="https://image.makewebcdn.com/makeweb/m_1920x0/Z9S9L5BrM/DefaultData/Cover_why_has_nobody_told_me_this_before_final_1.jpg?v=202405291424" 
          alt="Book Cover" 
        />
        <Title>Why Has Nobody Told Me this Before?</Title>
        <Subtitle>วิชาสำคัญที่คุณควรรู้ก่อนที่ชีวิตจะสอนคุณ</Subtitle>
        <Author>By DR.JULIE SMITH</Author>
        <Button onClick={toggleTOC}>
          Toggle Table of Contents
        </Button>
      </Header>
     
      <Main>
        <AboutBook>
          <AboutTitle>About the Book</AboutTitle>
          <p>หนังเล่มนี้</p>
          <p>ได้รวบรวมชุดเครื่องมือ</p>
          <p>ที่ใช้กันโดยจิตแพทย์และนักจิตวิทบำบัด</p>
          <p>แต่มันไม่ใช่ทักษะสำหรับผู้ป่วยเท่านั้น ทว่า</p>
          <p>เป็นทักษะชีวิตที่จะช่วยนำทางพวกเราทุกคนให้</p>
          <p>ก้าวผ่านช่วงเวลาอันยากลำบาก เมื่อเราเข้าใจกลไก</p>
          <p>การทำงานของจิตใจและเรียนรู้วิธีที่เหมาะสมในการจัดการ</p>
          <p>กับอารมณ์ความรู้สึก เราไม่เพียงสร้างเบาะไว้รองรับจิตใจ</p>
          <p>ในวันที่พายุถาโถมเข้าใส่ แต่ยังสามารถเติบโตและรับมือกับโลก</p>
          <p>ได้ดีขึ้นในทุกๆวัน</p>
        </AboutBook>
     
        <TOC visible={tocVisible}>
          <TOCHeading>Table of Contents</TOCHeading>
          <TOCList>
            <TOCItem>Chapter 1: ด้านที่มืดมน</TOCItem>
            <TOCItem>Chapter 2: แรงจูงใจ</TOCItem>
            <TOCItem>Chapter 3: ความเจ็บปวดทางอารมณ์</TOCItem>
            <TOCItem>Chapter 4: ความโศกเศร้า</TOCItem>
            <TOCItem>Chapter 5: ความสงสัยในตัวเอง</TOCItem>
            <TOCItem>Chapter 6: ความกลัว</TOCItem>
            <TOCItem>Chapter 7: ความเครียด</TOCItem>
            <TOCItem>Chapter 8: ชีวิตที่เปี่ยมความหมาย</TOCItem>
          </TOCList>
        </TOC>
      </Main>
     
      <Footer>
        <p>Project by [Arty] for DTI 132 ^.^</p>
      </Footer>
    </Container>
  );
};

export default Book12;