import React, { useState } from 'react';
import './Book12.css';

const Book12 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book12-container">
      <header className="book12-header">
        <img 
          src="https://image.makewebcdn.com/makeweb/m_1920x0/Z9S9L5BrM/DefaultData/Cover_why_has_nobody_told_me_this_before_final_1.jpg?v=202405291424" 
          alt="Book Cover" 
          className="book12-cover-image" 
        />
        <h1>Why Has Nobody Told Me this Before?</h1>
        <h2>วิชาสำคัญที่คุณควรรู้ก่อนที่ชีวิตจะสอนคุณ</h2>
        <p className="book12-author">By DR.JULIE SMITH</p>
        <button className="book12-button" onClick={toggleTOC}>
          Toggle Table of Contents
        </button>
      </header>
     
      <main className="book12-main">
        <section className="book12-about-book">
          <div className="book12-about-title">About the Book</div>
          <p>หนังเล่มนี้</p>
          <p>ได้รวบรวมชุดเครื่องมือ</p>
          <p>ที่ใช้กันโดยจิตแพทย์และนักจิตวิทบำบัด</p>
          <p>แต่มันไม่ใช่ทักษะสำหรับผู้ป่วยเท่านั้น ทว่า</p>
          <p>เป็นทักษะชีวิตที่จะช่วยนำทางพวกเราทุกคนให้</p>
          <p>ก้าวผ่านช่วงเวลาอันยากลำบาก เมื่อเราเข้าใจกลไก</p>
          <p>การทำงานของจิตใจและเรียนรู้วิธีที่เหมาะสมในการจัดการ</p>
          <p>กับอารมณ์ความรู้สึก เราไม่เพียงสร้างเบาะไว้รองรับจิตใจ</p>
          <p>ในวันที่พายุถาโถมเข้าใส่ แต่ยังสามารถเติบโตและรับมือกับโลก</p>
          <p>ได้ดีขึ้นในทุกๆวัน</p>
        </section>
     
        <section 
          className="book12-toc"
          style={{ display: tocVisible ? 'block' : 'none' }}
        >
          <h3>Table of Contents</h3>
          <ul>
            <li>Chapter 1: ด้านที่มืดมน</li>
            <li>Chapter 2: แรงจูงใจ</li>
            <li>Chapter 3: ความเจ็บปวดทางอารมณ์</li>
            <li>Chapter 4: ความโศกเศร้า</li>
            <li>Chapter 5: ความสงสัยในตัวเอง</li>
            <li>Chapter 6: ความกลัว</li>
            <li>Chapter 7: ความเครียด</li>
            <li>Chapter 8: ชีวิตที่เปี่ยมความหมาย</li>
          </ul>
        </section>
      </main>
     
      <footer className="book12-footer">
        <p>Project by [Arty] for DTI 132 ^.^</p>
      </footer>
    </div>
  );
};

export default Book12;