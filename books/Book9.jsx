import React, { useState } from 'react';
import './Book9.css';

const Book9 = () => {
  const [tocVisible, setTocVisible] = useState(true);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book9-container">
      <header className="book9-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Autism_spectrum_infinity_awareness_symbol.svg" 
          alt="Book Cover" 
          className="book9-infinity-sign" 
        />
        <h1>ปลายทางที่ Infinity</h1>
        <h2>ความสวยงามอันเป็นนิรันดร์ของคณิตศาสตร์</h2>
        <p className="book9-author">พิพัฒน์ พสุธารชาติ</p>
      </header>
     
      <main className="book9-main">
        <section className="book9-about-book">
          <h3>About the Book</h3>
          <p>ความคิดทางคณิตศาสตร์เป็นสิ่งที่อยู่เหนือโลกทางประสาทสัมผัสนี้ออกไป</p>
          <p>ภาพวาดอาจมีสีจางลง สิ่งก่อสร้างชั้นเลิศต่างๆ มีวันที่จะแตกหักผุพัง</p>
          <p>กาลเวลาสามารถทำลายทุกสิ่งทุกอย่างได้</p>
          <p>แต่ความรู้ทางคณิตสาสตร์จะยังคงยืนยงต่อไปได้โดยไม่มีวันเปลี่ยนแปลง</p>
        </section>

        <img 
          src="cover.jpg" 
          alt="Cover of the book 'ปลายทางที่ Infinity'" 
          className="book9-cover-image" 
        />
        <button className="book9-bouncy" onClick={toggleTOC}>
          Table of Contents
        </button>
        
        <section className="book9-toc" style={{ display: tocVisible ? 'block' : 'none' }}>
          <h3>Table of Contents</h3>
          <ul>
            <li>Chapter 1: จุดเริ่มต้น</li>
            <li>Chapter 2: เส้นตรง</li>
            <li>Chapter 3: สมมติฐาน</li>
            <li>Chapter 4: เส้นโค้ง</li>
            <li>Chapter 5: การสังเกต</li>
            <li>Chapter 6: สัญลักษณ์</li>
            <li>Chapter 7: ภาษา</li>
            <li>Chapter 8: ความขัดแย้ง</li>
            <li>Chapter 9: จำนวน</li>
            <li>Chapter 10: เครื่องคำนวณ</li>
            <li>Chapter 11: มนุษย์</li>
            <li>Chapter 12: จุดสิ้นสุด</li>
          </ul>
        </section>
      </main>
     
      <footer className="book9-footer">
        <p>Project by Baitong for DTI103</p>
      </footer>
    </div>
  );
};

export default Book9;