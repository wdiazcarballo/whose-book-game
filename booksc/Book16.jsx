import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: 'Mitr', 'Prompt', sans-serif;
  background: #fdf6f0;
  color: #3a2c1a;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  text-align: center;
  padding: 32px 8px 16px 8px;
`;

const CoverImage = styled.img`
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  margin-bottom: 12px;

  @media (max-width: 700px) {
    width: 90px;
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
  margin: 6px 0 0 0;
  font-weight: 700;
  color: #f26b3a;
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: 1.2em;
  color: #e88b4a;
  margin-top: 0;
  font-weight: 600;
`;

const SectionHeading = styled.h3`
  font-weight: 600;
`;

const Author = styled.p`
  font-size: 1em;
  color: #a86c3a;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background: #f26b3a;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 1em;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);
  transition: background 0.2s, transform 0.15s;
  margin-top: 10px;

  &:hover {
    background: #c94a14;
    transform: translateY(-2px) scale(1.03);
  }
`;

const Main = styled.main`
  max-width: 650px;
  margin: 0 auto;
  padding: 0 10px;

  @media (max-width: 700px) {
    max-width: 98vw;
    padding: 10px 3vw;
  }
`;

const ContentSection = styled.section`
  background: #fff;
  border: 2px solid #f26b3a;
  border-radius: 12px;
  margin: 24px 0;
  padding: 18px 22px;
  box-shadow: 0 2px 12px rgba(242,107,58,0.04);
  margin-bottom: 0;
`;

const TOCSection = styled(ContentSection)`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const TOCList = styled.ul`
  padding-left: 24px;
  margin: 0;
`;

const TOCItem = styled.li`
  margin-bottom: 4px;
  font-size: 1em;
`;

const BackCover = styled(ContentSection)``;

const BackCoverList = styled.ul`
  padding-left: 24px;
  margin: 0;
`;

const BackCoverItem = styled.li`
  margin-bottom: 4px;
  font-size: 1em;
`;

const InsightSection = styled.section`
  background: #fff7f2;
  border: 2px dashed #f26b3a;
  margin: 32px auto 0 auto;
  max-width: 500px;
  padding: 20px 10px;
  border-radius: 12px;
  text-align: center;

  @media (max-width: 700px) {
    max-width: 98vw;
    padding: 10px 3vw;
  }
`;

const InsightButton = styled(Button)`
  margin-top: 12px;
`;

const MoodSection = styled.section`
  background: #fff7f2;
  border: 2px dashed #f26b3a;
  margin: 32px auto 0 auto;
  max-width: 500px;
  padding: 20px 10px;
  border-radius: 12px;
  text-align: center;

  @media (max-width: 700px) {
    max-width: 98vw;
    padding: 10px 3vw;
  }
`;

const MoodButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MoodButton = styled.button`
  width: 100%;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #f7b267 0%, #f4845f 100%);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 24px;
  padding: 12px 0;
  font-size: 1.05em;
  transition: background 0.2s, transform 0.13s;

  &:hover {
    background: linear-gradient(90deg, #f26b3a 0%, #f4845f 100%);
    transform: scale(1.04);
  }
`;

const MoodResponse = styled.p``;

const Footer = styled.footer`
  text-align: center;
  color: #f26b3a;
  margin: 36px 0 18px 0;
  font-size: 0.98em;
  letter-spacing: 0.5px;
`;

const Book16 = () => {
  const [tocVisible, setTocVisible] = useState(true);
  const [currentInsight, setCurrentInsight] = useState('');
  const [moodResponse, setMoodResponse] = useState('');
  const [moodButtonsVisible, setMoodButtonsVisible] = useState(true);

  const insights = [
    "คนส่วนใหญ่กลัวขาดทุนมากกว่าชอบกำไร",
    "สิ่งที่ไม่เปลี่ยนคือพฤติกรรมมนุษย์",
    "การมีวินัยสำคัญกว่าการฉลาด",
    "อนาคตไม่แน่นอน แต่ธรรมชาติของคนแน่นอน",
    "การตัดสินใจดีไม่ต้องหวือหวา แค่สม่ำเสมอ",
    "ความมั่งคั่งคือผลลัพธ์ของความอดทนระยะยาว",
    "มนุษย์ไม่ได้เรียนรู้จากอดีตเท่าที่ควร",
    "เรื่องสำคัญที่สุดมักดูธรรมดา",
    "ไม่มีอะไรแน่นอน แต่ความไม่แน่นอน...แน่นอนเสมอ",
    "คนเราไม่เปลี่ยนง่าย แม้โลกจะเปลี่ยนเร็วแค่ไหน",
    "ความเข้าใจมนุษย์ สำคัญกว่าการทำนายอนาคต",
    "คนมักคิดว่าอนาคตต้องแปลกใหม่ ทั้งที่อดีตยังวนซ้ำอยู่",
    "การรอดให้ได้ในระยะยาว ดีกว่าการชนะในระยะสั้น",
    "สิ่งที่เรียบง่ายมักเป็นสิ่งที่ใช้ได้ดีที่สุด",
    "ความเสี่ยงไม่ได้อยู่ในเหตุการณ์ แต่อยู่ในพฤติกรรม",
    "ความไม่รู้ต่างหาก ที่สร้างโอกาสและภัยคุกคามพร้อมกัน"
  ];

  useEffect(() => {
    showRandomInsight();
  }, []);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  const showRandomInsight = () => {
    const randomIndex = Math.floor(Math.random() * insights.length);
    setCurrentInsight(insights[randomIndex]);
  };

  const setMood = (moodText) => {
    setMoodResponse(`ขอบคุณที่แชร์ความรู้สึก: ${moodText}`);
    setMoodButtonsVisible(false);
  };

  return (
    <Container>
      <Header>
        <CoverImage 
          src="https://prodimage.images-bn.com/pimages/9780593332702_p0_v2_s1200x630.jpg" 
          alt="Same as Ever Book Cover" 
        />
        <Title>Same as Ever</Title>
        <Subtitle>จิตวิทยาเอาชนะอนาคต</Subtitle>
        <Author>by Morgan Housel</Author>
        <Button onClick={toggleTOC}>
          แสดง/ซ่อนสารบัญ
        </Button>
      </Header>

      <Main>
        <ContentSection>
          <SectionHeading>เกี่ยวกับหนังสือ</SectionHeading>
          <p>
            หนังสือขายดีจากนักเขียนชื่อดังที่เคยเขียน "จิตวิทยาว่าด้วยเงิน" กลับมาพร้อมกับแนวคิดใหม่ว่า <strong>อนาคตที่ดีที่สุดเริ่มจากการเข้าใจสิ่งที่ไม่เคยเปลี่ยนแปลง</strong>
          </p>
        </ContentSection>

        <TOCSection visible={tocVisible}>
          <SectionHeading>สารบัญ</SectionHeading>
          <TOCList>
            <TOCItem>บทที่นำ: บทเรียนสำคัญจากอดีต</TOCItem>
            <TOCItem>บทที่ 1: แขวนอยู่บนเส้นด้าย</TOCItem>
            <TOCItem>บทที่ 2: ความเสี่ยงที่เรามองไม่เห็น</TOCItem>
            <TOCItem>บทที่ 3: ความคาดหวังกับความเป็นจริง</TOCItem>
            <TOCItem>บทที่ 4: มนุษย์สุดขั้ว</TOCItem>
            <TOCItem>บทที่ 5: ความเป็นไปได้ที่เป็นไปได้</TOCItem>
            <TOCItem>บทที่ 6: เรื่องราวดีมีชัยเสมอ</TOCItem>
            <TOCItem>บทที่ 7: ไม่อาจวัดได้</TOCItem>
            <TOCItem>บทที่ 8: ความสงบนำมาซึ่งความโกลาหล</TOCItem>
            <TOCItem>บทที่ 9: มากไป ด่วนไป เร็วไป</TOCItem>
            <TOCItem>บทที่ 10: เมื่อปาฏิหารย์บังเกิด</TOCItem>
            <TOCItem>บทที่ 11: โศนาฎกรรมชั่วข้ามคืน และปาฏิหารย์อันเนิ่นนาน</TOCItem>
            <TOCItem>บทที่ 12: เล็กน้อยแต่ไม่ธรรมดา</TOCItem>
            <TOCItem>บทที่ 13: ความปราบปลื้มและความสิ้นหวัง</TOCItem>
            <TOCItem>บทที่ 14: ควมเสียหายจากความสมบูรณ์แบบ</TOCItem>
            <TOCItem>บทที่ 15: จริง ๆ มันควรจะยาก</TOCItem>
            <TOCItem>บทที่ 16: เดินหน้าต่อไป</TOCItem>
            <TOCItem>บทที่ 17: มหัศจรรย์แห่งอนาคต</TOCItem>
            <TOCItem>บทที่ 18: ยากกว่าที่นึก และไม่สนุกอย่างที่คิด</TOCItem>
            <TOCItem>บทที่ 19: สิ่งจูงใจ พลังที่ทรงอานุภาพที่สุดในโลก</TOCItem>
            <TOCItem>บทที่ 20: คราวนี้รู้แล้วใช่ไหม</TOCItem>
            <TOCItem>บทที่ 21: มิติของเวลา</TOCItem>
            <TOCItem>บทที่ 22: ความพยายามที่ล้นเกิน</TOCItem>
            <TOCItem>บทที่ 23: แผลสดหายแล้ว แต่แผลเป็นยังอยู่</TOCItem>
          </TOCList>
        </TOCSection>

        <BackCover>
          <SectionHeading>"อินไซต์เปลี่ยนชีวิต จากนักเล่าเรื่องชั้นยอด"</SectionHeading>
          <p>
            <strong>- ไรอัน ฮอลิเดย์</strong><br />
            ผู้เขียน The Obstacle is the Way
          </p>
          <p>
            <strong>
              นี่คือหนังสือว่าด้วยเรื่องราวของ<br />
              สิ่งที่ไม่เปลี่ยนแปลง ในโลกที่กำลังเปลี่ยนไป
            </strong>
          </p>
          <p>
            เมื่อเราวางแผนอนาคต เรามักถามว่า "เศรษฐกิจจะเป็นอย่างไรในปีหน้า" หรือ "อีก 10 ปีข้างหน้าจะมีอะไรเปลี่ยนแปลงไปบ้าง"
          </p>
          <p>
            แต่การทำนายอนาคตมักเป็นเรื่องยาก เหตุการณ์สำคัญที่เปลี่ยนอนาคตมักมาจากสิ่งที่คาดไม่ถึง ดังนั้น เราควรถามคำถามที่ดีกว่าอย่างเช่น:
          </p>
          <BackCoverList>
            <BackCoverItem>อะไรจะยังคงเหมือนเดิมในอีกสิบปีข้างหน้า?</BackCoverItem>
            <BackCoverItem>อะไรจะไม่เปลี่ยนแม้โลกจะเปลี่ยนไป?</BackCoverItem>
          </BackCoverList>
          <p>
            ความรู้ในเล่มนี้ไม่ได้อิงจากการคาดการณ์อนาคต แต่ใช้ประโยชน์จากพฤติกรรมมนุษย์ที่เปลี่ยนแปลงน้อยที่สุดในประวัติศาสตร์ เพื่อวางแผนอนาคตที่ดีขึ้น
          </p>
          <p>
            หนังสือเล่มนี้จะทำให้คุณมองโลกชัดขึ้น เข้าใจความไม่แน่นอน และตัดสินใจได้ดีขึ้นในโลกที่หมุนเร็วและวุ่นวาย
          </p>
          <p>
            <strong>นั่นเพราะโลกของเรานั้น เป็นแผ่นดินที่แปรปรวน และจะเป็นเช่นนั้นเสมอไป</strong>
          </p>
        </BackCover>
      </Main>

      <InsightSection>
        <SectionHeading>Same but True</SectionHeading>
        <p>{currentInsight || 'กำลังโหลดแนวคิด...'}</p>
        <InsightButton onClick={showRandomInsight}>
          เปลี่ยนแนวคิด
        </InsightButton>
      </InsightSection>

      <MoodSection>
        <SectionHeading>หลังจากที่อ่านเบื้องต้นแล้วคุณรู้สึกยังไง?</SectionHeading>
        {moodButtonsVisible ? (
          <MoodButtonsContainer>
            <MoodButton onClick={() => setMood('😮 น่าสนใจ อยากลองอ่านจริงจัง')}>
              😮 น่าสนใจ อยากลองอ่านจริงจัง
            </MoodButton>
            <MoodButton onClick={() => setMood('🤔 ได้มุมคิดใหม่')}>
              🤔 ได้มุมคิดใหม่
            </MoodButton>
            <MoodButton onClick={() => setMood('😌 เฉย ๆ ')}>
              😌 เฉย ๆ
            </MoodButton>
          </MoodButtonsContainer>
        ) : (
          <MoodResponse>{moodResponse}</MoodResponse>
        )}
      </MoodSection>

      <Footer>
        <p>Project by Suchanya Pengprai 6709618174 for DTI103</p>
      </Footer>
    </Container>
  );
};

export default Book16;