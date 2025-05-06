import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Noto Sans Thai', sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Howto = styled.p`
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  margin-right: 600px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Bestseller = styled.h4`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: 600;
  margin-right: 90px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BookImage = styled.img`
  height: 200px;
  display: block;
`;

const InfoText = styled.div``;

const OliverText = styled.h3`
  font-size: 14px;
  font-weight: 700;
`;

const Writer = styled.p`
  font-size: 15px;
  font-weight: 300;
  margin-top: 0;
`;

const Translator = styled.p`
  font-size: 15px;
  font-weight: 300;
`;

const BookTitleEn = styled.h2`
  font-weight: 400;
  margin-top: 10px;
  margin-right: 80px;
  text-align: center;
  font-size: 40px;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const BookSubtitle = styled.h3`
  font-weight: 300;
  margin-top: 0;
  margin-right: 80px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const BookTitleTh = styled.h1`
  font-weight: 700;
  margin-top: 10px;
  margin-right: 80px;
  text-align: center;
  font-size: 40px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Tagline = styled.p`
  font-weight: 300;
  margin-top: 15px;
  margin-right: 80px;
  text-align: center;
  margin-top: 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Quote1 = styled.p`
  font-weight: 500;
  margin-top: 20px;
  margin-right: 80px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutBook = styled.section`
  margin-right: 80px;
  text-align: center;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const BookTitleThPage1 = styled.h1`
  font-weight: 900;
  margin-top: 200px;
  font-size: 55px;
  margin-bottom: 0;
`;

const BookTitleEnPage1 = styled.h1`
  font: medium sans-serif;
  font-weight: 900;
  margin-top: 10px;
  font-size: 40px;
  margin-bottom: 0;
`;

const BookSubtitlePage1 = styled.h1`
  font: medium sans-serif;
  font-weight: 900;
  margin-top: 10px;
  font-size: 40px;
  margin-bottom: 0;
`;

const OliverPage1 = styled.h3`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial;
  font-weight: 900;
  margin-top: 110px;
  margin-bottom: 0;
`;

const WriterPage1 = styled.p`
  font-family: 'Noto Sans Thai', sans-serif;
  margin-bottom: 70px;
  margin-top: 5px;
`;

const TranslatorPage1 = styled.h3`
  font-weight: 600;
  margin-bottom: 0;
`;

const Translat = styled.p`
  margin-bottom: 100px;
  margin-top: 5px;
`;

const TitleQuote2 = styled.p`
  font-family: 'Noto Sans Thai', sans-serif;
  font-size: 20px;
  letter-spacing: 1em;
  margin-bottom: 0;
`;

const Quote2 = styled.p`
  margin-top: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 100px;
`;

const Heter = styled.p`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const QuoteDouglas = styled.p`
  margin-top: 50px;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 20px;
`;

const Douglas = styled.p`
  margin-top: 0;
  font-weight: 300;
  margin-bottom: 50px;
  font-style: italic;
  font-size: 18px;
`;

const QuoteCharlotte = styled.p`
  margin-top: 50px;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 20px;
`;

const Charlotte = styled.p`
  margin-top: 0;
  font-weight: 300;
  margin-bottom: 50px;
  font-style: italic;
  font-size: 18px;
`;

const Button = styled.button`
  margin-top: 30px;
  font-family: 'Noto Sans Thai', sans-serif;
  font-weight: 600;
  background: none;
  border: 1px solid #c4c4c4;
  color: hsl(0, 0%, 0%);
  padding: 8px 16px;
  font-size: 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 50px;

  &:hover {
    background-color: hsl(0, 0%, 0%);
    border-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
  }

  &:active {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
  }
`;

const TOC = styled.section`
  text-align: left;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const PageHeader = styled.p`
  margin-top: 50px;
  margin-left: 150px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Header1 = styled.h2`
  list-style-position: inside;
  padding-left: 0;
  display: flex;
  margin-bottom: 10px;
  margin-left: 150px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Header2 = styled.h2`
  list-style-position: inside;
  padding-left: 0;
  display: flex;
  margin-top: 50px;
  margin-bottom: 10px;
  margin-left: 150px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const TOCList = styled.ol`
  list-style-position: inside;
  padding-left: 0;
  justify-content: center;
  font-size: 18px;
`;

const TOCItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 150px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Postscript = styled(TOCItem)`
  margin-top: 50px;
`;

const AboutWriter = styled(TOCItem)`
  margin-top: 50px;
`;

const PageNumber = styled.span`
  min-width: 30px;
  margin-right: 150px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const Blurb = styled.div`
  font-weight: 300;
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
`;

const Blurb2 = styled.div`
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 50px;
`;

const Book15 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <Container>
      <Header>
        <Howto>howto</Howto>
        <Bestseller>AN INSTANT NEW YORK TIMES BESTSELLER</Bestseller>
        <InfoContainer>
          <BookImage src="Cover.png" alt="Book Cover" />
          <InfoText>
            <OliverText>
              Oliver <br /> Burkeman <br /> <Writer>เขียน</Writer>
            </OliverText>
            <Translator>
              วาดฝัน <br /> คุณาวงศ์ <br /> แปล
            </Translator>
          </InfoText>
        </InfoContainer>
        <BookTitleEn>Four Thousand Weeks</BookTitleEn>
        <BookSubtitle>Time Management for Mortals</BookSubtitle>
        <BookTitleTh>ชีวิตเรามีแค่สี่พันสัปดาห์</BookTitleTh>
        <Tagline>
          วิธีบริหารเวลาสำหรับมนุษย์ทุกคน <br /> เพราะเราไม่ได้ "มี" เวลา <span style={{ fontWeight: 600 }}>แต่เรา "คือ" เวลา</span>
        </Tagline>
        <Quote1>
          "นี่คือหนังสือเกี่ยวกับการบริหารเวลาที่สำคัญที่สุดที่เคยมีมา" <br />
          <span style={{ fontWeight: 900 }}>- Adam Grant</span> นักจิตวิทยา ผู้เขียน <span style={{ fontStyle: 'italic' }}>THINK AGAIN</span>
        </Quote1>
      </Header>

      <Main>
        <AboutBook>
          <BookTitleThPage1>ชีวิตเรามีแค่สี่พันสัปดาห์</BookTitleThPage1>
          <BookTitleEnPage1>Four Thousand Weeks</BookTitleEnPage1>
          <BookSubtitlePage1>Time Management for Mortals</BookSubtitlePage1>
          <OliverPage1>Oliver Burkeman</OliverPage1>
          <WriterPage1>เขียน</WriterPage1>
          <TranslatorPage1>วาดฝัน คุณาวงศ์</TranslatorPage1>
          <Translat>แปล</Translat>
          <TitleQuote2>การอ่านคือรากฐานที่สําคัญ</TitleQuote2>
          <Quote2>
            ผู้คนบ่นว่าไม่มี"เวลาอ่านหนังสือ"อีกต่อไป <br /> แต่ในความเป็นจริง ไม่ใช่ว่าพวกเรายุ่งเกินไป <br /> หรือสมาธิหลุดง่ายเกินไป แต่พวกเราใจร้อนเกินไป <br /> 
            พวกเราไม่เต็มใจจะยอมรับว่าการอ่านเป็นกิจกรรมที่ดำเนินไปจามเวลาของตัวมันเอง <br /> -โอลิเวอร์ เบิร์กแมน
          </Quote2>
          <Heter>แด่เฮเทอร์และโรแวน</Heter>
          <QuoteDouglas>
            การเกิดขึ้นมาเป็นสิ่งสุดท้ายที่เรารู้สึกขอบคุณไม่ใช่หรือ <br /> คุณรู้ว่าคุณไม่จำเป็นต้อง <span style={{ fontStyle: 'italic' }}>เกิดขึ้นมา</span><br /> คุณไม่จำเป็นต้องเกิดขึ้นมา แต่คุณก็เกิดขึ้นมาแล้ว
          </QuoteDouglas>
          <Douglas>-ดักลาส ฮาร์ดิง</Douglas>
          <QuoteCharlotte>
            สิ่งที่ทำให้มันสุดจะทนคือความเชื่อผิดๆ <br />ของคุณว่ามันเป็นสิ่งที่รักษาได้
          </QuoteCharlotte>
          <Charlotte>-ชาร์ลอต โจโค เบค</Charlotte>
          <Button onClick={toggleTOC}>สารบัญ</Button>
        </AboutBook>

        <TOC visible={tocVisible}>
          <div className="book15-listOfContents"> 
            <PageHeader>บทนำ : ในระยะยาวเราทุกคนก็ตายอยู่ดี <PageNumber>1</PageNumber></PageHeader>
            <Header1>ส่วนที่ 1 : เลือกที่จะเลือก</Header1>
            <TOCList>
              <TOCItem>1. ชีวิตที่ยอมรับการมีขีดจำกัด <PageNumber>13</PageNumber></TOCItem>
              <TOCItem>2. กับดักของการมีประสิทธิภาพ <PageNumber>32</PageNumber></TOCItem>
              <TOCItem>3. เผชิญหน้ากับการมีจุดสิ้นสุด <PageNumber>51</PageNumber></TOCItem>
              <TOCItem>4. เป็นผู้ผัดวันประกันพรุ่งที่ดีกว่าเดิม <PageNumber>64</PageNumber></TOCItem>
              <TOCItem>5. ปัญหาเรื่องแตงโม <PageNumber>81</PageNumber></TOCItem>
              <TOCItem>6. ผู้รบกวนที่ใกล้ชิด <PageNumber>92</PageNumber></TOCItem>
            </TOCList>
            <Header2>ส่วนที่2 : เหนือการควบคุม</Header2>
            <TOCList>
              <TOCItem>7. เราไม่เคยมีเวลาจริงๆหรอก <PageNumber>101</PageNumber></TOCItem>
              <TOCItem>8. คุณอยู่ตรงนี้ <PageNumber>112</PageNumber></TOCItem>
              <TOCItem>9. ค้นพบการพักผ่อนอีกครั้ง <PageNumber>128</PageNumber></TOCItem>
              <TOCItem>10.วังวนของความใจร้อน <PageNumber>149</PageNumber></TOCItem>
              <TOCItem>11.อยู่บนรถบัสต่อไป <PageNumber>159</PageNumber></TOCItem>
              <TOCItem>12.ความโดดเดี่ยวของดิจิทัลโนแมด <PageNumber>170</PageNumber></TOCItem>
              <TOCItem>13.การบําบัดด้วยการตระหนักว่าเราไม่ได้สําคัญในจักรวาล <PageNumber>186</PageNumber></TOCItem>
              <TOCItem>14.โรคมนุษย์ <PageNumber>197</PageNumber></TOCItem>
              <Postscript>บทส่งท้าย : เหนือไปกว่าความหวัง <PageNumber>210</PageNumber></Postscript>
              <TOCItem>ภาคผนวก : เครื่องมือสิบชิ้นสําหรับการเปิดใจรับขีดจํากัดของคุณ <PageNumber>215</PageNumber></TOCItem>
              <AboutWriter>เกี่ยวกับผู้เขียน <PageNumber>226</PageNumber></AboutWriter>
            </TOCList>
          </div>
        </TOC>

        <Blurb>
          <p>ปลดแอกตัวเองจาก "คำสาปของยุคนี้" ที่เรียกร้องให้เรายัดทุกอย่างลงในเวลาที่มี<br /></p>
          <p><br />เลิกหมกมุ่นกับการเช็กอีเมล เลิกไล่ตามกับรายการสิ่งที่ต้องทำจนหัวหกก้นขวิด<br />
            และที่สำคัญที่สุดคือ เลิกหลอกตัวเองว่ายิ่งทำมากก็ยิ่งโปรดักทีฟมาก</p>
          <p><br />โอลิเวอร์ เบิร์กแมน คอลัมนิสต์ชื่อดังของ<span style={{ fontStyle: 'italic' }}>เดอะการ์เดียน</span>
            <br /> จะพาคุณสำรวจปรัชญาน่าทึ่งเกี่ยวกับเวลาและการบริหารเวลา<br />
            ที่จะช่วยให้คุณมองเวลาในชีวิตที่มีอยู่แค่ราวๆ 4,000 สัปดาห์เปลี่ยนไปโดยสิ้นเชิง<br />
            เขาสะท้อนให้เห็นว่าคนเรามีความคิดผิดๆเกี่ยวกับเวลา<br />
            และนั่นคือต้นตอของหายนะที่แท้จริงที่ทำให้การบริหารเวลาของเราล้มเหลวไม่เป็นท่า</p>
          <p><br />เบิร์กแมนได้มอบเครื่องมือที่จะช่วยให้คุณได้สร้างชีวิตที่มีความหมาย<br />
            ด้วยการยินดีโอบรับขีดจำกัดของชีวิต<br />
            และคุณจะไปถึงจุดสูงสุดของการมีผลิตภาพ<br />
            ความสำเร็จ และความรู้สึกเติมเต็ม</p>
        </Blurb>

        <Blurb2>
          <p>"เราต่างรู้ว่าเวลาของเรามีจำกัด แต่สิ่งที่เราไม่รู้ และโอลิเวอร์ เบิร์กแมน กำลังจะมาบอกเราคือ<br />
            อำนาจในการควบคุมเวลาของเราก็มีจำกัดด้วยเช่นกัน หนังสือที่มีเนื้อหาลึกซึ้ง (และชวนหัว)<br />
            เล่มนี้จะกระตุ้นให้คุณทบทวนการบูชาความมีประสิทธิภาพเสียใหม่<br />
            และปฏิเสธความเชื่อผิดๆเกี่ยวกับความยุ่ง<br />
            พร้อมทั้งออกแบบชีวิตของคุณใหม่ ให้ใส่ใจเริ่องที่สำคัยจริงๆ "</p>
          <h4>— Daniel H. Pink นักเขียนขายดีจาก<span style={{ fontStyle: 'italic' }}>New York Times</span></h4>
        </Blurb2>
      </Main>
    </Container>
  );
};

export default Book15;