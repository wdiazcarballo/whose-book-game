import React, { useState } from 'react';
import './Book1.css';

const Book1 = () => {
  const [showTOC, setShowTOC] = useState(false);

  const toggleTOC = () => {
    setShowTOC(!showTOC);
  };

  return (
    <div className="book1-container">
      <header>
        <img src="https://ff.lnwfile.com/_webp_max_images/600/600/cc/fa/bf.webp" alt="Book Cover" className="cover-image" />
        <div className="image-wrapper">
          <h2>สุดยอดคัมภีร์</h2>
          <h1>การเงิน</h1>
          <h3>จาก</h3>
          <h1>ฮาร์วาร์ด</h1>
          <h3>=====ฉบับปรับปรุง=====</h3>
          <h2>สุดยอดคัมภัร์การเงิน</h2>
          <h4>สำหรับผู้จัดการ ผู้บริหาร</h4>
          <h4>เเละนักลงทุนหุ้นพื้นฐานทุกคน</h4>
        </div>
        <span className="gold-title">FINANCIAL INTELLIGENCE</span>
        <p className="highlight-text">KAREN BERMAN, JOEKNIGHT เเละ JOHN CASE</p>
      </header>

      <main>
        <section className="about-book">
          <h3>About the Book</h3>
          <button onClick={toggleTOC}>My contend</button>
          <p>ความเข้าใจในเรื่องตัวเลขทางการเงิน ความสำคัญ</p>
          <p>เเละความหมายที่ซ่อนอยู่เบื้องหลังตัวเลขต่างๆ </p>
          <p>ที่ผู้จัดการเเละนักลงทุนทุกคนจำเป็นต้องรู้</p>
        </section>
        
        <section className="toc" style={{ display: showTOC ? 'block' : 'none' }}>
          <h3>Table of Contents</h3>
          <ul>
            <li>Chapter 1 : ศิลปะทางการเงิน (ทำไมถึงสำคัญ?)</li>
            <li>Chapter 2 : คุณสมบัติเฉพาะตัว (หลายๆอย่าง) ของงบกำไรขาดทุน</li>
            <li>Chapter 3 : งบดุลบอกเรื่องราวต่างๆได้มากที่สุด</li>
            <li>Chapter 4 : เงินสดคือพระราชา</li>
            <li>Chapter 5 : อัตราการเรียนรู้ว่าจริงๆเเล้ว ตัวเลขต่างๆ บอกอะไรเเก่คุณได้บ้าง</li>
            <li>Chapter 6 : คำนวณ เเละ ทำความเข้าใจอย่างเเท้จริง ในเรื่องผลตอบเเทนต่อการลงทุน</li>
            <li>Chapter 7 : การใช้ความฉลาดรู้ทางการเงินที่สำคัญ การบริหารเงินทุนหมุนเวียน</li>
            <li>Chapter 8 : การทำให้ทั้งองค์กรมีความฉลาดด้านการเงิน</li>
          </ul>
        </section>
      </main>
      
      <footer>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png" 
          alt="logo" 
          className="logo" 
        />
        <span className="yellow">Havard University</span>
      </footer>
    </div>
  );
};

export default Book1;