import React, { useState, useEffect } from 'react';
import './Book16.css';

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
    <div className="book16-container">
      <header className="book16-header">
        <img 
          src="https://prodimage.images-bn.com/pimages/9780593332702_p0_v2_s1200x630.jpg" 
          alt="Same as Ever Book Cover" 
          className="book16-cover-image"
        />
        <h1>Same as Ever</h1>
        <h2>จิตวิทยาเอาชนะอนาคต</h2>
        <p className="book16-author">by Morgan Housel</p>
        <button className="book16-button" onClick={toggleTOC}>
          แสดง/ซ่อนสารบัญ
        </button>
      </header>

      <main className="book16-main">
        <section className="book16-about-book">
          <h3>เกี่ยวกับหนังสือ</h3>
          <p>
            หนังสือขายดีจากนักเขียนชื่อดังที่เคยเขียน "จิตวิทยาว่าด้วยเงิน" กลับมาพร้อมกับแนวคิดใหม่ว่า <strong>อนาคตที่ดีที่สุดเริ่มจากการเข้าใจสิ่งที่ไม่เคยเปลี่ยนแปลง</strong>
          </p>
        </section>

        <section 
          className="book16-toc" 
          style={{ display: tocVisible ? 'block' : 'none' }}
        >
          <h3>สารบัญ</h3>
          <ul>
            <li>บทที่นำ: บทเรียนสำคัญจากอดีต</li>
            <li>บทที่ 1: แขวนอยู่บนเส้นด้าย</li>
            <li>บทที่ 2: ความเสี่ยงที่เรามองไม่เห็น</li>
            <li>บทที่ 3: ความคาดหวังกับความเป็นจริง</li>
            <li>บทที่ 4: มนุษย์สุดขั้ว</li>
            <li>บทที่ 5: ความเป็นไปได้ที่เป็นไปได้</li>
            <li>บทที่ 6: เรื่องราวดีมีชัยเสมอ</li>
            <li>บทที่ 7: ไม่อาจวัดได้</li>
            <li>บทที่ 8: ความสงบนำมาซึ่งความโกลาหล</li>
            <li>บทที่ 9: มากไป ด่วนไป เร็วไป</li>
            <li>บทที่ 10: เมื่อปาฏิหารย์บังเกิด</li>
            <li>บทที่ 11: โศนาฎกรรมชั่วข้ามคืน และปาฏิหารย์อันเนิ่นนาน</li>
            <li>บทที่ 12: เล็กน้อยแต่ไม่ธรรมดา</li>
            <li>บทที่ 13: ความปราบปลื้มและความสิ้นหวัง</li>
            <li>บทที่ 14: ควมเสียหายจากความสมบูรณ์แบบ</li>
            <li>บทที่ 15: จริง ๆ มันควรจะยาก</li>
            <li>บทที่ 16: เดินหน้าต่อไป</li>
            <li>บทที่ 17: มหัศจรรย์แห่งอนาคต</li>
            <li>บทที่ 18: ยากกว่าที่นึก และไม่สนุกอย่างที่คิด</li>
            <li>บทที่ 19: สิ่งจูงใจ พลังที่ทรงอานุภาพที่สุดในโลก</li>
            <li>บทที่ 20: คราวนี้รู้แล้วใช่ไหม</li>
            <li>บทที่ 21: มิติของเวลา</li>
            <li>บทที่ 22: ความพยายามที่ล้นเกิน</li>
            <li>บทที่ 23: แผลสดหายแล้ว แต่แผลเป็นยังอยู่</li>
          </ul>
        </section>

        <section className="book16-back-cover">
          <h3>"อินไซต์เปลี่ยนชีวิต จากนักเล่าเรื่องชั้นยอด"</h3>
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
          <ul>
            <li>อะไรจะยังคงเหมือนเดิมในอีกสิบปีข้างหน้า?</li>
            <li>อะไรจะไม่เปลี่ยนแม้โลกจะเปลี่ยนไป?</li>
          </ul>
          <p>
            ความรู้ในเล่มนี้ไม่ได้อิงจากการคาดการณ์อนาคต แต่ใช้ประโยชน์จากพฤติกรรมมนุษย์ที่เปลี่ยนแปลงน้อยที่สุดในประวัติศาสตร์ เพื่อวางแผนอนาคตที่ดีขึ้น
          </p>
          <p>
            หนังสือเล่มนี้จะทำให้คุณมองโลกชัดขึ้น เข้าใจความไม่แน่นอน และตัดสินใจได้ดีขึ้นในโลกที่หมุนเร็วและวุ่นวาย
          </p>
          <p>
            <strong>นั่นเพราะโลกของเรานั้น เป็นแผ่นดินที่แปรปรวน และจะเป็นเช่นนั้นเสมอไป</strong>
          </p>
        </section>
      </main>

      <section className="book16-insight-section">
        <h3>Same but True</h3>
        <p id="insightText">{currentInsight || 'กำลังโหลดแนวคิด...'}</p>
        <button 
          className="book16-button" 
          onClick={showRandomInsight}
        >
          เปลี่ยนแนวคิด
        </button>
      </section>

      <section className="book16-mood-section">
        <h3>หลังจากที่อ่านเบื้องต้นแล้วคุณรู้สึกยังไง?</h3>
        {moodButtonsVisible ? (
          <div id="moodButtons" className="book16-mood-buttons">
            <button 
              onClick={() => setMood('😮 น่าสนใจ อยากลองอ่านจริงจัง')} 
              className="book16-mood-btn"
            >
              😮 น่าสนใจ อยากลองอ่านจริงจัง
            </button>
            <button 
              onClick={() => setMood('🤔 ได้มุมคิดใหม่')} 
              className="book16-mood-btn"
            >
              🤔 ได้มุมคิดใหม่
            </button>
            <button 
              onClick={() => setMood('😌 เฉย ๆ ')} 
              className="book16-mood-btn"
            >
              😌 เฉย ๆ
            </button>
          </div>
        ) : (
          <p id="moodResponse">{moodResponse}</p>
        )}
      </section>

      <footer className="book16-footer">
        <p>Project by Suchanya Pengprai 6709618174 for DTI103</p>
      </footer>
    </div>
  );
};

export default Book16;