import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background-color: #f9ecd2;
  font-family: 'Prompt', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Page = styled.div`
  width: 12.5cm;
  height: 16.5cm;
  position: relative;
  overflow: hidden;
  background-color: #f9ecd2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    aspect-ratio: 12.5 / 16.5;
    max-width: 12.5cm;
  }
`;

const BookCover = styled(Page)`
  background-color: #f9ecd2;
`;

const Publisher = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 12px;
  color: #333;
  font-weight: 300;
`;

const Title = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  max-width: 80%;
`;

const Illustration = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 220px);
  background-color: #a7d0e2;
  overflow: hidden;

  @media (max-width: 600px) {
    top: 90px;
  }
`;

const HouseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Subtitle = styled.div`
  position: absolute;
  bottom: 60px;
  left: 15px;
  font-size: 12px;
  color: #555;
  max-width: 90%;
  line-height: 1.4;
`;

const Author = styled.div`
  position: absolute;
  bottom: 45px;
  right: 15px;
  font-size: 10px;
  color: #333;
`;

const ToggleTocButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 15px;
  padding: 4px 8px;
  font-size: 10px;
  background-color: #fff;
  color: #333;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;

const TableOfContents = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 8px 15px;
  font-size: 9px;
  color: #333;
  box-shadow: 0 -1px 3px rgba(0,0,0,0.1);
  display: ${props => props.visible ? 'block' : 'none'};
`;

const TOCTitle = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`;

const TOCList = styled.ul`
  list-style-type: disc;
  padding-left: 16px;
  margin: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 2px;
  line-height: 1.3;
`;

const BookBlurbPage = styled(Page)`
  background-color: #f9ecd2;
`;

const BlurbFull = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 10px;
  color: #666;
  font-style: italic;
  text-align: right;
  white-space: pre-line;
`;

const Book14 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      {/* หน้า 1: ปก */}
      <BookCover>
        <Publisher>springbooks</Publisher>
        <Title>เราต่างเป็นพื้นที่ปลอดภัย<br />ของใครสักคน</Title>
        <Illustration>
          <HouseImage 
            src="https://kruball.com/wp-content/uploads/2025/04/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ-scaled.jpg" 
            alt="บ้านสีขาว"
          />
        </Illustration>
        <Subtitle>
          หากวันใดที่โลกไม่เป็นใจ หรือท้องฟ้าไม่สดใส<br />
          ฉันพร้อมจะเป็นพื้นที่ปลอดภัยให้เธอได้พักพิง
        </Subtitle>
        <Author>บ้านข้างๆ</Author>
        <ToggleTocButton onClick={toggleTOC}>
          Contents
        </ToggleTocButton>
        <TableOfContents visible={tocVisible}>
          <TOCTitle>Contents</TOCTitle>
          <TOCList>
            <TOCItem>01: หน้าบ้าน</TOCItem>
            <TOCItem>02: ห้องรับแขก</TOCItem>
            <TOCItem>03: ห้องทำงาน</TOCItem>
            <TOCItem>04: ห้องครัว</TOCItem>
            <TOCItem>05: ห้องนอน</TOCItem>
            <TOCItem>06: ห้องน้ำ</TOCItem>
            <TOCItem>บทส่งท้าย: "บ้าน"</TOCItem>
          </TOCList>
        </TableOfContents>
      </BookCover>

      {/* หน้า 2: คำโปรย */}
      <BookBlurbPage>
        <BlurbFull>
          หลายครั้ง<br />
          การเติบโตก็ทำให้เราเหนื่อยล้าโดยไม่รู้ตัว<br /><br />
          ซึ่งทุกครั้งที่รู้สึกเช่นนี้ เราก็เพียงต้องการ<br />
          'พื้นที่ปลอดภัยทางความรู้สึก'<br /><br />
          ที่เปรียบเสมือน 'บ้าน' ให้เราได้พักพิง<br />
          และเป็นตัวเองได้อย่างเต็มที่
        </BlurbFull>
      </BookBlurbPage>
    </Container>
  );
};

export default Book14;