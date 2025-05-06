import React, { useState } from 'react';
import './Book11.css';

const Book11 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book11-container">
      <header className="book11-book-intro">
        <div className="book11-book-cover">
          <img src="Cover.JPG" alt="ปกหนังสือ The Race of Civilizations" />
        </div>
        <div className="book11-book-info">
          <h1>The Race of Civilizations</h1>
          <h2>อารยะแข่งขัน</h2>
          <p className="book11-author">โดย ดร.วิทย์ สิทธิเวคิน</p>
          <button 
            id="tocButton" 
            className="book11-button"
            onClick={toggleTOC}
          >
            Toggle Table of Contents
          </button>
        </div>
      </header>

      <main className="book11-main">
        <section className="book11-about-book">
          <h3>About the Book</h3>
          <p>
            ถอดประวัติศาสตร์ในฐานะวิศวกรรมย้อนกลับ มองอารยธรรมเป็นการแข่งกันระหว่างโลกตะวันตกกับตะวันออก <br />
            อะไรคือ "จุดเปลี่ยน" อะไรคือ "ตัวเร่งปฏิกิริยา" ที่ทำให้โลกทั้งสองซีกผลัดกันมีอารยธรรมระดับสูง <br />
            เส้นทางเดินทางของอารยธรรมผ่านการปฏิวัติทางวิทยาศาสตร์ สู่ยุคอุตสาหกรรม จาก "รุสโซ" ถึง "จอร์จ วอชิงตัน" จากรุ่งเรืองสูงสุดสู่ล่มสลาย <br />
            สิ่งสำคัญคือผู้มาก่อนกาลในโลกล้วนเดินหน้าหาความรู้ เพียงเพื่อกระหายที่จะได้รู้ และไม่ตั้งคำถามว่า "จะรู้ไปทำไม" หรือ "ไม่เห็นต้องรู้"
          </p>
        </section>

        <section 
          className="book11-toc"
          style={{ display: tocVisible ? 'block' : 'none' }}
        >
          <h3>Table of Contents</h3>
          <ul>
            <li>Chapter I    : GUTENBERG PRESS...ถ้าโลกนี้ไม่มีหนังสือ</li>
            <li>Chapter II   : THE AGE OF DISCOVERY...ออกเดินทางเพื่อรู้จักโลกของตัวเอง</li>
            <li>Chapter III  : SCIENTIFIC REVOLOTION...ยุคแห่งการปฎิวัติวิทยาศาสตร์</li>
            <li>Chapter IV   : AGE OF ENLIGHTENMENT...ยุคเรืองปัญญา</li>
            <li>Chapter V    : INDUSTRAIL REVOLOTION...การปฎิวัติอุตสาหกรรม</li>
            <li>Chapter VI   : THE FALL OF EMPIRE...จีนถดถอย ญี่ปุ่นทะเยอทะยาน</li>
            <li>Chapter VII  : THE GREATEST LOSS OF OTTOMAN...จากเกรียงไกร สู่ล่มสลาย</li>
            <li>Chapter VIII : THE NEW WORLD ORDER...ระเบียบโลกใหม่</li>
          </ul>
        </section>
      </main>

      <footer className="book11-footer">
        <p>Project by Thanat Vijitrakanlikit for DTI103</p>
      </footer>
    </div>
  );
};

export default Book11;