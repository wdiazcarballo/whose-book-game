import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: #c85a42;
  color: #fff;
  margin: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const CoverImage = styled.img`
  max-width: 200px;
  display: block;
  margin: auto;
  border: 3px solid #000;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TextTitle = styled.div`
  font-size: 70px;
`;

const Author = styled.p`
  margin: 0;
`;

const Button = styled.button`
  background-color: #fff;
  color: #c85a42;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #eee;
    transform: translateY(-2px);
  }
`;

const Main = styled.main`
  text-align: center;
  margin-bottom: 30px;
`;

const AboutBook = styled.section`
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
`;

const TOC = styled.section`
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const Footer = styled.footer`
  text-align: center;
  margin-bottom: 30px;
`;

const Book4 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <Header>
        <CoverImage 
          src="https://storage.naiin.com/system/application/bookstore/resource/product/201610/203184/1000190973_front_XXL.jpg?imgname=%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B8%84%E0%B8%99%E0%B8%82%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%88" 
          alt="Book Cover" 
        />
        <div>
          <TextTitle>สำเร็จได้</TextTitle>
        </div>
        <Title>
          <TextTitle>สไตล์</TextTitle>
          <div>
            <Author>เขียน นะโอะยุกิ ฮนดะ</Author>
            <p>แปล สุธาสินี ขจร</p>
          </div>
        </Title>
        <div>
          <TextTitle>คนขี้เกียจ</TextTitle>
        </div>
        <h2>เคล็ดวิธีให้คุณประสบความสำเร็จ</h2>
        <h2>แบบสบายกว่าใคร โดยไม่ต้องเลิกขี้เกียจ</h2>
        <Button onClick={toggleTOC}>กดเพื่อดูสารบัญ</Button>
      </Header>
      
      <Main>
        <AboutBook>
          <h3>About the Book</h3>
          <p>หยุดก่อน! ถ้าคุณกำลังมอง "ความขี้เกียจ"</p>
          <p>ในแง่ลบและอยากกำจัดทิ้งให้สิ้นซากเรามีวิธีที่ดีกว่านั้น</p>
          <p>ว่ากันว่าคนขยันมีจุดอ่อน และคนขี้เกียจก็มีจุดแข็งเช่นกัน นี่คือสุดยอดเคล็ดลับที่จะทำให้คุณมองเห็นจุดแข็งของความขี้เกียจและรู้จักนำมาใช้ให้เกิดประโยชน์สูงสุดด้วยการคิดพลิกแพลงเพียงเล็กน้อยแล้วคุณจะประสบความสำเร็จในทุกเรื่องได้แบบง่ายๆสบายๆโดยขี้เกียจได้อย่างเต็มภาคภูมิ กอดความขี้เกียจไว้ให้แน่นแล้วก้าวสู่จุดสูงสุดของชีวิตไปด้วยกัน!</p>
        </AboutBook>
        
        <TOC show={tocVisible}>
          <h3>Table of Contents</h3>
          <ul>
            <li>ลองปรับเปลี่ยนความคิด</li>
            <li>ลองปรับเปลี่ยนวิถีชีวิต</li>
            <li>ลองปรับเปลี่ยนการทำงาน</li>
          </ul>
        </TOC>
      </Main>
      
      <Footer>
        <p>Project by Chayatat Bunharn for DTI103</p>
      </Footer>
    </Container>
  );
};

export default Book4;