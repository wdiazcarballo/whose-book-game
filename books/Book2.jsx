import React, { useState } from 'react';
import './Book2.css';

const Book2 = () => {
  const [showTOC, setShowTOC] = useState(false);

  const toggleTOC = () => {
    setShowTOC(!showTOC);
  };

  return (
    <div className="book2-container">
      <header>
        <img src="/images/book2-cover.jpg" alt="Book Cover" className="cover-image" />
        <h1>Do Hard Things</h1>
        <h2>วิทยาศาสตร์ของการไม่ยอมแพ้</h2>
        <p className="author">by Steve Magness</p>    
      </header>

      <main>
        <section className="about-book">
          <h3>About the Book</h3>
          <p>
            อะไรทำให้คนคนหนึ่ง<br />
            ยอมแพ้ง่ายกว่าอีกคน?<br />
            ในยามที่ใกล้จะถอดใจ<br />
            อะไรคือปัจจัยที่ทำให้เรากลับมาฮึดสู้?<br />
          </p>
          <h4>
            คำตอบอาจไม่ใช่อย่างที่คุณคิด
          </h4>
          <p>
            Steve magness นักวิทยาศาสตร์การกีฬาและโค้ชโอลิมปิก<br />
            จะพาคุณออกไปสำรวจสนามแข่งโอลิมปิก เวทีผู้นำระดับโลก<br />
            สมรภูมิรบ ห้องประชุมผู้บริหาร ตลอดจนกลางทะเลลุก<br />
            เพื่อค้นหาความลับที่อยู่เบื้องหลัง "จิตใจที่แข็งแกร่ง"<br />
            และมอบแนวทางที่จะช่วยให้คุณสร้างมันขึ้นมา<br /><br />
          </p>
          <button onClick={toggleTOC}>Toggle Table of Contents</button>
        </section>

        <section className="toc" style={{ display: showTOC ? 'block' : 'none' }}>
          <h3>Table of Contents</h3>
          <ul>
            <li>Chapter 1: จากโค้ชสายโหด ผู้ปกครองจองเฮี้ยมและคนแข็งแกร่งสู่การค้นหาความเข้มแข็งภายในที่แท้จริง</li>
            <li>Chapter 2: จมน้ำหรือว่ายน้ำ เรารับเอาบทเรียนจากกองทัพมาใช้แบบผิดเพี้ยนได้อย่างไร</li>
            <li>Chapter 3: ยอมรับความสามารถของตนเอง</li>
          </ul>      
        </section>
      </main>

      <footer>
        <p>Project by [Student Name] for DTI101</p>
      </footer>
    </div>
  );
};

export default Book2;