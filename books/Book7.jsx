import React, { useState } from 'react';
import './Book7.css';

const Book7 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book7-container">
      <header className="book7-header">
        <nav className="book7-navbar">
          <div className="book7-nav-container">
            <img src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/book-open.svg" alt="Book Icon" style={{ width: '50px', height: 'auto' }} />
            <a href="#my-book-my-web" className="book7-nav-logo">My Book My Web</a>
            <ul className="book7-nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about-book">About the Book</a></li>
              <li><a href="#search">Search</a></li>
            </ul>
          </div>
        </nav>
        <h1>Sherlock Holmes</h1>
        <h2>เชอร์ล็อก โฮล์มส์</h2>
        <img src="https://amarinbooks.com/wp-content/uploads/2017/06/2-01.png" alt="Book Cover" className="book7-cover-image" />
        <h3>ตอน จัตวาลักษณ์</h3>
        <h4>THE SIGN OF FOUR</h4>
        <p className="book7-author">by เซอร์อาร์เทอร์ โคแนน ดอยล์</p>
        <button onClick={toggleTOC}>Toggle Table of Contents</button>
      </header>

      <main className="book7-main">
        <section className="book7-about-book">
          <h5>About the Book</h5>
          <p>เกิดคดีที่มีสาเหตุมาจากการทรยศหักหลัง สมบัติที่ถูกขโมยคำมั่นสัญญาลับของอดีตนักโทษสี่คน และประวัติศาสตร์การเมืองของอินเดียที่โฮล์มส์ได้ทำการสืบสวนและวางอุบายเพื่อจับตัวคนร้าย เป็นปริศนาซ้อนปริศนาที่มีแต่โฮล์มส์เท่านั้นที่สามารถคลี่คลายได้</p>
        </section>
        
        <section className="book7-toc" style={{ display: tocVisible ? 'block' : 'none' }}>
          <h6>Contents</h6>
          <ul>
            <li>Chapter 1: ศาสตร์แห่งการอนุมาน</li>
            <li>Chapter 2: วาทะแถลงคดี</li>
            <li>Chapter 3: เสาะแสวงข้อไข</li>
            <li>Chapter 4: เรื่องของชายหัวล้าน</li>
            <li>Chapter 5: เหตุสลดใจที่ปอนดิเชอร์รีลอดจ์</li>
            <li>Chapter 6: เชอร์ล็อก โฮล์มส์ ให้อรรถาธิบาย</li>
            <li>Chapter 7: ตอนที่เกี่ยวกับถัง</li>
            <li>Chapter 8: กองหนุนสำนักถนนเบเกอร์</li>
            <li>Chapter 9: สบช่องคืบหน้า</li>
            <li>Chapter 10: วาระสุดท้ายของชาวเกาะ</li>
            <li>Chapter 11: สมบัติอัคระมหาศาล</li>
            <li>Chapter 12: เรื่องประหลาดของโจนาทาน สมอลล์</li>
          </ul>
        </section>
      </main>
      
      <footer className="book7-footer">
        <p>Project by Natkritta Thanatnan for DTI103</p>
      </footer>
    </div>
  );
};

export default Book7;