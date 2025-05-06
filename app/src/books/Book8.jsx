import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Sarabun', sans-serif;
  background-color: #0e0e0e;
  color: #5c5c5c;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

// Cover Section Styles
const Cover = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UniversityLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;
`;

const BookTitle = styled.div`
  z-index: 10;
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #ccff00;
    line-height: 1.1;
    text-shadow: 0 0 10px rgba(204, 255, 0, 0.5);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #fff;
    font-weight: normal;
  }
`;

const BookAuthor = styled.div`
  text-align: right;
  font-size: 1.5rem;
  z-index: 10;
  margin-bottom: 2rem;
`;

const LightEffects = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const LightOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
  opacity: 0.6;
`;

const Orb1 = styled(LightOrb)`
  width: 150px;
  height: 150px;
  top: 20%;
  left: 20%;
  background: radial-gradient(circle, rgba(255,165,0,0.8) 0%, rgba(255,165,0,0) 70%);
`;

const Orb2 = styled(LightOrb)`
  width: 100px;
  height: 100px;
  top: 30%;
  right: 15%;
  background: radial-gradient(circle, rgba(0,191,255,0.5) 0%, rgba(0,191,255,0) 70%);
`;

const Orb3 = styled(LightOrb)`
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 40%;
  background: radial-gradient(circle, rgba(255,0,255,0.4) 0%, rgba(255,0,255,0) 70%);
`;

const Orb4 = styled(LightOrb)`
  width: 120px;
  height: 120px;
  top: 60%;
  right: 30%;
  background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%);
`;

const Orb5 = styled(LightOrb)`
  width: 60px;
  height: 60px;
  top: 10%;
  right: 40%;
  background: radial-gradient(circle, rgba(255,255,0,0.6) 0%, rgba(255,255,0,0) 70%);
`;

const LightBeam = styled.div`
  position: absolute;
  background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
  transform: rotate(45deg);
`;

const Beam1 = styled(LightBeam)`
  width: 200%;
  height: 3px;
  top: 40%;
  left: -50%;
`;

const Beam2 = styled(LightBeam)`
  width: 200%;
  height: 2px;
  top: 70%;
  left: -50%;
  transform: rotate(-30deg);
`;

const CityGrid = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  z-index: 2;
  perspective: 500px;
  transform-style: preserve-3d;
  transform: rotateX(60deg);
`;

const GridLine = styled.div`
  position: absolute;
  bottom: ${props => props.bottom || '0'};
  width: 100%;
  height: 1px;
  background-color: rgba(22, 68, 22, 0.5);
`;

// Content Section Styles
const BookContent = styled.section`
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #006633;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #006633;
    margin-bottom: 0.5rem;
  }
`;

const Author = styled.p`
  font-style: italic;
  margin-top: 0.5rem;
  color: #555;
`;

const CoverImage = styled.img`
  max-width: 300px;
  display: block;
  margin: 0 auto;
`;

const Main = styled.main``;

const AboutBook = styled.section`
  max-width: 800px;
  margin: 0 auto 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const SectionHeading = styled.h3`
  color: #006633;
  border-bottom: 2px solid #665c00;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled.button`
  background-color: ${props => props.active ? '#085f75' : '#002c66'};
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Sarabun', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 0 0 2px rgba(0, 102, 51, 0.3)' : 'none'};

  &:hover {
    background-color: #454d00;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const ContentSection = styled.section`
  max-width: 800px;
  margin: 0 auto 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: ${props => props.show ? 'block' : 'none'};
`;

const TOCList = styled.ul`
  list-style-type: none;

  li {
    margin-bottom: 0.8rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const ChapterTitle = styled.span`
  font-weight: bold;
  color: #006633;
`;

const ChapterContent = styled.div`
  margin-top: 1.5rem;

  h4 {
    color: #0fb863;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ConceptBox = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border-left: 3px solid #006633;
`;

const ConceptTitle = styled.span`
  font-weight: bold;
  color: #006633;
  display: block;
  margin-bottom: 0.5rem;
`;

const Example = styled.div`
  background-color: #f0f7ff;
  padding: 0.8rem;
  margin-top: 0.8rem;
  border-radius: 5px;
  border-left: 3px solid #4d94ff;
  font-size: 0.95rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
  background-color: #f1f1f1;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #555;
`;

const Book8 = () => {
  const [activeSection, setActiveSection] = useState('toc');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <Container>
      {/* ส่วนหน้าปกหนังสือ */}
      <Cover>
        <UniversityLogo>
          <p>สำนักพิมพ์มหาวิทยาลัยธรรมศาสตร์</p>
        </UniversityLogo>
        
        <BookTitle>
          <h1>อรรถศาสตร์และ<br />วัจนปฏิบัติศาสตร์<br />ภาษาอังกฤษ</h1>
          <h2>English Semantics and Pragmatics</h2>
        </BookTitle>
        
        <BookAuthor>
          <p>บูลย์จีรา ชิรเวทย์</p>
        </BookAuthor>
        
        <LightEffects>
          <Orb1 />
          <Orb2 />
          <Orb3 />
          <Orb4 />
          <Orb5 />
          <Beam1 />
          <Beam2 />
        </LightEffects>
        
        <CityGrid>
          <GridLine bottom="20%" />
          <GridLine bottom="40%" />
          <GridLine bottom="60%" />
          <GridLine bottom="80%" />
          <GridLine bottom="100%" />
        </CityGrid>
      </Cover>

      {/* ส่วนเนื้อหาเกี่ยวกับหนังสือ */}
      <BookContent>
        <Header>
          <h1>อรรถศาสตร์และวัจนปฏิบัติศาสตร์ภาษาอังกฤษ</h1>
          <h2>English Semantics and Pragmatics</h2>
          <Author>โดย ผู้ช่วยศาสตราจารย์ ดร.บูลย์จีรา ชิรเวทย์</Author>
          <br />
          <CoverImage src="cover.jpg" alt="Book Cover" />
        </Header>
        
        <Main>
          <AboutBook>
            <SectionHeading>เกี่ยวกับหนังสือ</SectionHeading>
            <p>หนังสือเล่มนี้อภิปรายแนวคิดด้านอรรถศาสตร์ (semantics) และวัจนปฏิบัติศาสตร์ (pragmatics) ภาษาอังกฤษ นำเสนอทฤษฎีและแนวคิดหลักด้านการวิเคราะห์ความหมายในภาษาอังกฤษ พร้อมตัวอย่างและการประยุกต์ใช้ เหมาะสำหรับนักศึกษา อาจารย์ และบุคลากรสายวิทยาศาสตร์สุขภาพที่ต้องการเข้าใจแนวคิดทางภาษาศาสตร์เพื่อนำไปประยุกต์ใช้ในการสื่อสารทางการแพทย์</p>
            
            <ButtonContainer>
              <Button 
                active={activeSection === 'toc'} 
                onClick={() => handleSectionChange('toc')}
              >
                สารบัญ
              </Button>
              <Button 
                active={activeSection === 'part1'}
                onClick={() => handleSectionChange('part1')}
              >
                อรรถศาสตร์คำศัพท์
              </Button>
              <Button 
                active={activeSection === 'part2'}
                onClick={() => handleSectionChange('part2')}
              >
                อรรถศาสตร์ประโยค
              </Button>
              <Button 
                active={activeSection === 'part3'}
                onClick={() => handleSectionChange('part3')}
              >
                วัจนปฏิบัติศาสตร์
              </Button>
            </ButtonContainer>
          </AboutBook>
          
          <ContentSection show={activeSection === 'toc'}>
            <SectionHeading>สารบัญ</SectionHeading>
            <TOCList>
              <li><ChapterTitle>บทนำ:</ChapterTitle> ความรู้พื้นฐานเกี่ยวกับความหมายในภาษา</li>
              <li>
                <ChapterTitle>ตอนที่ 1: อรรถศาสตร์คำศัพท์ (Lexical Semantics)</ChapterTitle>
                <ul>
                  <li>บทที่ 1: มิติของความหมาย (Dimensions of Meaning)</li>
                  <li>บทที่ 2: ความสัมพันธ์ทางความหมายระหว่างคำ (Meaning Relations between Words)</li>
                </ul>
              </li>
              <li>
                <ChapterTitle>ตอนที่ 2: อรรถศาสตร์ประโยค (Sentential Semantics)</ChapterTitle>
                <ul>
                  <li>บทที่ 3: บทบาททีตา (Theta Roles)</li>
                  <li>บทที่ 4: การณ์ลักษณะและทัศนภาวะ (Aspect and Modality)</li>
                  <li>บทที่ 5: ความสัมพันธ์ทางความหมายระหว่างประโยค (Meaning Relations between Sentences)</li>
                </ul>
              </li>
              <li>
                <ChapterTitle>ตอนที่ 3: วัจนปฏิบัติศาสตร์ (Pragmatics)</ChapterTitle>
                <ul>
                  <li>บทที่ 6: การบ่งบอกและการอ้างตาม (Deixis and Anaphora)</li>
                  <li>บทที่ 7: หลักความร่วมมือและความหมายบ่งชี้เป็นนัย (Cooperative Principle and Implicature)</li>
                  <li>บทที่ 8: วัจนกรรม (Speech Act)</li>
                  <li>บทที่ 9: ความสุภาพ (Politeness)</li>
                </ul>
              </li>
              <li><ChapterTitle>ภาคผนวก:</ChapterTitle> ตัวอย่างข้อสอบและการประยุกต์ใช้ทางคลินิก</li>
            </TOCList>
          </ContentSection>
          
          <ContentSection show={activeSection === 'part1'}>
            <SectionHeading>ตอนที่ 1: อรรถศาสตร์คำศัพท์ (Lexical Semantics)</SectionHeading>
            <ChapterContent>
              <h4>มิติของความหมาย (Dimensions of Meaning)</h4>
              <ConceptBox>
                <p><ConceptTitle>ความหมายตามตัวอักษร (Literal Meaning)</ConceptTitle></p>
                <p>ความหมายพื้นฐานของคำที่มักปรากฏในพจนานุกรม</p>
                <Example>
                  <p>ตัวอย่าง: "heart" ในความหมายตามตัวอักษรคือ "อวัยวะที่ทำหน้าที่สูบฉีดเลือด"</p>
                </Example>
              </ConceptBox>
              
              <ConceptBox>
                <p><ConceptTitle>ความหมายเปรียบเทียบ (Figurative Meaning)</ConceptTitle></p>
                <p>ความหมายที่ใช้เพื่อเปรียบเทียบหรือเป็นนัย</p>
                <Example>
                  <p>ตัวอย่าง: "heart" ในความหมายเปรียบเทียบอาจหมายถึง "ศูนย์กลางของความรู้สึกหรืออารมณ์"</p>
                </Example>
              </ConceptBox>
            </ChapterContent>
          </ContentSection>
          
          <ContentSection show={activeSection === 'part2'}>
            <SectionHeading>ตอนที่ 2: อรรถศาสตร์ประโยค (Sentential Semantics)</SectionHeading>
            <ChapterContent>
              <h4>บทบาททีตา (Theta Roles)</h4>
              <ConceptBox>
                <p><ConceptTitle>ผู้กระทำ (Agent)</ConceptTitle></p>
                <p>ผู้ที่กระทำการใดการหนึ่งในประโยค</p>
                <Example>
                  <p>ตัวอย่าง: "<u>John</u> opened the door." (John เป็นผู้กระทำ)</p>
                </Example>
              </ConceptBox>
              
              <ConceptBox>
                <p><ConceptTitle>ผู้รับ (Patient)</ConceptTitle></p>
                <p>ผู้หรือสิ่งที่ถูกกระทำ</p>
                <Example>
                  <p>ตัวอย่าง: "John opened <u>the door</u>." (the door เป็นผู้รับ)</p>
                </Example>
              </ConceptBox>
            </ChapterContent>
          </ContentSection>
          
          <ContentSection show={activeSection === 'part3'}>
            <SectionHeading>ตอนที่ 3: วัจนปฏิบัติศาสตร์ (Pragmatics)</SectionHeading>
            <ChapterContent>
              <h4>หลักความร่วมมือและความหมายบ่งชี้เป็นนัย</h4>
              <ConceptBox>
                <p><ConceptTitle>หลักความร่วมมือ (Cooperative Principle)</ConceptTitle></p>
                <p>หลักการของ Grice ที่ว่าผู้พูดควรให้ข้อมูลที่เพียงพอ เป็นจริง ตรงประเด็น และชัดเจน</p>
                <Example>
                  <p>- หลักปริมาณ (Quantity): ให้ข้อมูลเพียงพอ ไม่มากหรือน้อยเกินไป</p>
                  <p>- หลักคุณภาพ (Quality): พูดในสิ่งที่เป็นจริง มีหลักฐาน</p>
                  <p>- หลักความสัมพันธ์ (Relation): พูดให้ตรงประเด็น</p>
                  <p>- หลักลักษณะ (Manner): พูดให้ชัดเจน ไม่คลุมเครือ</p>
                </Example>
              </ConceptBox>
            </ChapterContent>
          </ContentSection>
        </Main>
        
        <Footer>
          <p>สำนักพิมพ์มหาวิทยาลัยธรรมศาสตร์ © 2025</p>
          <p>ติดต่อ: publisher@tu.ac.th</p>
        </Footer>
      </BookContent>
    </Container>
  );
};

export default Book8;