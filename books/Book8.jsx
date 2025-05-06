import React, { useState } from 'react';
import './Book8.css';

const Book8 = () => {
  const [activeSection, setActiveSection] = useState('toc');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="book8-container">
      {/* ส่วนหน้าปกหนังสือ */}
      <section className="book8-cover">
        <div className="book8-university-logo">
          <p>สำนักพิมพ์มหาวิทยาลัยธรรมศาสตร์</p>
        </div>
        
        <div className="book8-book-title">
          <h1>อรรถศาสตร์และ<br />วัจนปฏิบัติศาสตร์<br />ภาษาอังกฤษ</h1>
          <h2>English Semantics and Pragmatics</h2>
        </div>
        
        <div className="book8-book-author">
          <p>บูลย์จีรา ชิรเวทย์</p>
        </div>
        
        <div className="book8-light-effects">
          <div className="book8-light-orb book8-orb1"></div>
          <div className="book8-light-orb book8-orb2"></div>
          <div className="book8-light-orb book8-orb3"></div>
          <div className="book8-light-orb book8-orb4"></div>
          <div className="book8-light-orb book8-orb5"></div>
          <div className="book8-light-beam book8-beam1"></div>
          <div className="book8-light-beam book8-beam2"></div>
        </div>
        
        <div className="book8-city-grid">
          <div className="book8-grid-line"></div>
          <div className="book8-grid-line"></div>
          <div className="book8-grid-line"></div>
          <div className="book8-grid-line"></div>
          <div className="book8-grid-line"></div>
        </div>
      </section>

      {/* ส่วนเนื้อหาเกี่ยวกับหนังสือ */}
      <section className="book8-book-content">
        <header className="book8-header">
          <h1>อรรถศาสตร์และวัจนปฏิบัติศาสตร์ภาษาอังกฤษ</h1>
          <h2>English Semantics and Pragmatics</h2>
          <p className="book8-author">โดย ผู้ช่วยศาสตราจารย์ ดร.บูลย์จีรา ชิรเวทย์</p>
          <br />
          <img src="cover.jpg" alt="Book Cover" className="book8-cover-image" />
        </header>
        
        <main className="book8-main">
          <section className="book8-about-book">
            <h3 className="book8-section-heading">เกี่ยวกับหนังสือ</h3>
            <p>หนังสือเล่มนี้อภิปรายแนวคิดด้านอรรถศาสตร์ (semantics) และวัจนปฏิบัติศาสตร์ (pragmatics) ภาษาอังกฤษ นำเสนอทฤษฎีและแนวคิดหลักด้านการวิเคราะห์ความหมายในภาษาอังกฤษ พร้อมตัวอย่างและการประยุกต์ใช้ เหมาะสำหรับนักศึกษา อาจารย์ และบุคลากรสายวิทยาศาสตร์สุขภาพที่ต้องการเข้าใจแนวคิดทางภาษาศาสตร์เพื่อนำไปประยุกต์ใช้ในการสื่อสารทางการแพทย์</p>
            
            <div className="book8-button-container">
              <button 
                className={`book8-btn ${activeSection === 'toc' ? 'book8-active' : ''}`} 
                onClick={() => handleSectionChange('toc')}
              >
                สารบัญ
              </button>
              <button 
                className={`book8-btn ${activeSection === 'part1' ? 'book8-active' : ''}`}
                onClick={() => handleSectionChange('part1')}
              >
                อรรถศาสตร์คำศัพท์
              </button>
              <button 
                className={`book8-btn ${activeSection === 'part2' ? 'book8-active' : ''}`}
                onClick={() => handleSectionChange('part2')}
              >
                อรรถศาสตร์ประโยค
              </button>
              <button 
                className={`book8-btn ${activeSection === 'part3' ? 'book8-active' : ''}`}
                onClick={() => handleSectionChange('part3')}
              >
                วัจนปฏิบัติศาสตร์
              </button>
            </div>
          </section>
          
          <section 
            className="book8-content-section"
            style={{ display: activeSection === 'toc' ? 'block' : 'none' }}
          >
            <h3 className="book8-section-heading">สารบัญ</h3>
            <ul className="book8-toc-list">
              <li><span className="book8-chapter-title">บทนำ:</span> ความรู้พื้นฐานเกี่ยวกับความหมายในภาษา</li>
              <li>
                <span className="book8-chapter-title">ตอนที่ 1: อรรถศาสตร์คำศัพท์ (Lexical Semantics)</span>
                <ul>
                  <li>บทที่ 1: มิติของความหมาย (Dimensions of Meaning)</li>
                  <li>บทที่ 2: ความสัมพันธ์ทางความหมายระหว่างคำ (Meaning Relations between Words)</li>
                </ul>
              </li>
              <li>
                <span className="book8-chapter-title">ตอนที่ 2: อรรถศาสตร์ประโยค (Sentential Semantics)</span>
                <ul>
                  <li>บทที่ 3: บทบาททีตา (Theta Roles)</li>
                  <li>บทที่ 4: การณ์ลักษณะและทัศนภาวะ (Aspect and Modality)</li>
                  <li>บทที่ 5: ความสัมพันธ์ทางความหมายระหว่างประโยค (Meaning Relations between Sentences)</li>
                </ul>
              </li>
              <li>
                <span className="book8-chapter-title">ตอนที่ 3: วัจนปฏิบัติศาสตร์ (Pragmatics)</span>
                <ul>
                  <li>บทที่ 6: การบ่งบอกและการอ้างตาม (Deixis and Anaphora)</li>
                  <li>บทที่ 7: หลักความร่วมมือและความหมายบ่งชี้เป็นนัย (Cooperative Principle and Implicature)</li>
                  <li>บทที่ 8: วัจนกรรม (Speech Act)</li>
                  <li>บทที่ 9: ความสุภาพ (Politeness)</li>
                </ul>
              </li>
              <li><span className="book8-chapter-title">ภาคผนวก:</span> ตัวอย่างข้อสอบและการประยุกต์ใช้ทางคลินิก</li>
            </ul>
          </section>
          
          <section 
            className="book8-content-section"
            style={{ display: activeSection === 'part1' ? 'block' : 'none' }}
          >
            <h3 className="book8-section-heading">ตอนที่ 1: อรรถศาสตร์คำศัพท์ (Lexical Semantics)</h3>
            <div className="book8-chapter-content">
              <h4>มิติของความหมาย (Dimensions of Meaning)</h4>
              <div className="book8-concept-box">
                <p><span className="book8-concept-title">ความหมายตามตัวอักษร (Literal Meaning)</span></p>
                <p>ความหมายพื้นฐานของคำที่มักปรากฏในพจนานุกรม</p>
                <div className="book8-example">
                  <p>ตัวอย่าง: "heart" ในความหมายตามตัวอักษรคือ "อวัยวะที่ทำหน้าที่สูบฉีดเลือด"</p>
                </div>
              </div>
              
              <div className="book8-concept-box">
                <p><span className="book8-concept-title">ความหมายเปรียบเทียบ (Figurative Meaning)</span></p>
                <p>ความหมายที่ใช้เพื่อเปรียบเทียบหรือเป็นนัย</p>
                <div className="book8-example">
                  <p>ตัวอย่าง: "heart" ในความหมายเปรียบเทียบอาจหมายถึง "ศูนย์กลางของความรู้สึกหรืออารมณ์"</p>
                </div>
              </div>
            </div>
          </section>
          
          <section 
            className="book8-content-section"
            style={{ display: activeSection === 'part2' ? 'block' : 'none' }}
          >
            <h3 className="book8-section-heading">ตอนที่ 2: อรรถศาสตร์ประโยค (Sentential Semantics)</h3>
            <div className="book8-chapter-content">
              <h4>บทบาททีตา (Theta Roles)</h4>
              <div className="book8-concept-box">
                <p><span className="book8-concept-title">ผู้กระทำ (Agent)</span></p>
                <p>ผู้ที่กระทำการใดการหนึ่งในประโยค</p>
                <div className="book8-example">
                  <p>ตัวอย่าง: "<u>John</u> opened the door." (John เป็นผู้กระทำ)</p>
                </div>
              </div>
              
              <div className="book8-concept-box">
                <p><span className="book8-concept-title">ผู้รับ (Patient)</span></p>
                <p>ผู้หรือสิ่งที่ถูกกระทำ</p>
                <div className="book8-example">
                  <p>ตัวอย่าง: "John opened <u>the door</u>." (the door เป็นผู้รับ)</p>
                </div>
              </div>
            </div>
          </section>
          
          <section 
            className="book8-content-section"
            style={{ display: activeSection === 'part3' ? 'block' : 'none' }}
          >
            <h3 className="book8-section-heading">ตอนที่ 3: วัจนปฏิบัติศาสตร์ (Pragmatics)</h3>
            <div className="book8-chapter-content">
              <h4>หลักความร่วมมือและความหมายบ่งชี้เป็นนัย</h4>
              <div className="book8-concept-box">
                <p><span className="book8-concept-title">หลักความร่วมมือ (Cooperative Principle)</span></p>
                <p>หลักการของ Grice ที่ว่าผู้พูดควรให้ข้อมูลที่เพียงพอ เป็นจริง ตรงประเด็น และชัดเจน</p>
                <div className="book8-example">
                  <p>- หลักปริมาณ (Quantity): ให้ข้อมูลเพียงพอ ไม่มากหรือน้อยเกินไป</p>
                  <p>- หลักคุณภาพ (Quality): พูดในสิ่งที่เป็นจริง มีหลักฐาน</p>
                  <p>- หลักความสัมพันธ์ (Relation): พูดให้ตรงประเด็น</p>
                  <p>- หลักลักษณะ (Manner): พูดให้ชัดเจน ไม่คลุมเครือ</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="book8-footer">
          <p>สำนักพิมพ์มหาวิทยาลัยธรรมศาสตร์ © 2025</p>
          <p>ติดต่อ: publisher@tu.ac.th</p>
        </footer>
      </section>
    </div>
  );
};

export default Book8;