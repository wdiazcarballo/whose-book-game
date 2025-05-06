import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Kanit', sans-serif;
  background-color: #fdf0f5;
  color: #333;
  line-height: 1.6;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const BookIntro = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffe0ef;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BookCover = styled.div`
  img {
    max-width: 200px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }
`;

const BookInfo = styled.div`
  flex: 1;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #c2185b;
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin-bottom: 10px;
  margin-top: 0;
  padding: 0;
`;

const Author = styled.p`
  margin-bottom: 20px;
  color: #6a1b9a;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #c2185b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ad1457;
  }
`;

const Main = styled.main``;

const AboutBook = styled.section`
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const TOC = styled.section`
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: ${props => props.visible ? 'block' : 'none'};
`;

const SectionHeading = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  border-bottom: 2px solid #f48fb1;
  padding-bottom: 5px;
`;

const TOCList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const TOCItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  transition: color 0.3s;

  &:hover {
    color: #c2185b;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 15px;
  background-color: #fce4ec;
  border-radius: 10px;
  margin-top: 30px;
  color: #777;
`;

const Book11 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <BookIntro>
        <BookCover>
          <img src="Cover.JPG" alt="ปกหนังสือ The Race of Civilizations" />
        </BookCover>
        <BookInfo>
          <Title>The Race of Civilizations</Title>
          <Subtitle>อารยะแข่งขัน</Subtitle>
          <Author>โดย ดร.วิทย์ สิทธิเวคิน</Author>
          <Button onClick={toggleTOC}>
            Toggle Table of Contents
          </Button>
        </BookInfo>
      </BookIntro>

      <Main>
        <AboutBook>
          <SectionHeading>About the Book</SectionHeading>
          <p>
            ถอดประวัติศาสตร์ในฐานะวิศวกรรมย้อนกลับ มองอารยธรรมเป็นการแข่งกันระหว่างโลกตะวันตกกับตะวันออก <br />
            อะไรคือ "จุดเปลี่ยน" อะไรคือ "ตัวเร่งปฏิกิริยา" ที่ทำให้โลกทั้งสองซีกผลัดกันมีอารยธรรมระดับสูง <br />
            เส้นทางเดินทางของอารยธรรมผ่านการปฏิวัติทางวิทยาศาสตร์ สู่ยุคอุตสาหกรรม จาก "รุสโซ" ถึง "จอร์จ วอชิงตัน" จากรุ่งเรืองสูงสุดสู่ล่มสลาย <br />
            สิ่งสำคัญคือผู้มาก่อนกาลในโลกล้วนเดินหน้าหาความรู้ เพียงเพื่อกระหายที่จะได้รู้ และไม่ตั้งคำถามว่า "จะรู้ไปทำไม" หรือ "ไม่เห็นต้องรู้"
          </p>
        </AboutBook>

        <TOC visible={tocVisible}>
          <SectionHeading>Table of Contents</SectionHeading>
          <TOCList>
            <TOCItem>Chapter I    : GUTENBERG PRESS...ถ้าโลกนี้ไม่มีหนังสือ</TOCItem>
            <TOCItem>Chapter II   : THE AGE OF DISCOVERY...ออกเดินทางเพื่อรู้จักโลกของตัวเอง</TOCItem>
            <TOCItem>Chapter III  : SCIENTIFIC REVOLOTION...ยุคแห่งการปฎิวัติวิทยาศาสตร์</TOCItem>
            <TOCItem>Chapter IV   : AGE OF ENLIGHTENMENT...ยุคเรืองปัญญา</TOCItem>
            <TOCItem>Chapter V    : INDUSTRAIL REVOLOTION...การปฎิวัติอุตสาหกรรม</TOCItem>
            <TOCItem>Chapter VI   : THE FALL OF EMPIRE...จีนถดถอย ญี่ปุ่นทะเยอทะยาน</TOCItem>
            <TOCItem>Chapter VII  : THE GREATEST LOSS OF OTTOMAN...จากเกรียงไกร สู่ล่มสลาย</TOCItem>
            <TOCItem>Chapter VIII : THE NEW WORLD ORDER...ระเบียบโลกใหม่</TOCItem>
          </TOCList>
        </TOC>
      </Main>

      <Footer>
        <p>Project by Thanat Vijitrakanlikit for DTI103</p>
      </Footer>
    </Container>
  );
};

export default Book11;