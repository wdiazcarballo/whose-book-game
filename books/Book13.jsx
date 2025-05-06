import React, { useState } from 'react';
import './Book13.css';

const Book13 = () => {
  const [tableVisible, setTableVisible] = useState(false);

  const showText = () => {
    setTableVisible(!tableVisible);
  };

  return (
    <div className="book13-container">
      <div className="book13-video-container">
        <video autoPlay muted loop id="book13-myVideo">
          <source src="./videos.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="book13-main-container">
        <div className="book13-resize-text">
          <img src="./pngegg.png" alt="Harry Potter Logo" />
        </div>

        <div className="book13-book-section">
          <div className="book13-book-cover">
            <img className="book13-resize-image1" src="./images.jpeg" alt="Harry Potter Front Cover" />
            <div className="book13-author">
              <h3>Written By J.K. Rowling</h3>
            </div>
          </div>
        
          <div className="book13-book-description">
            <h3>Harry Potter And The Sorcerer's Stone</h3>
            <small>แฮร์รี่ พอตเตอร์ เด็กชายกำพร้าที่เติบโตมาในตู้ใต้บันไดของบ้านลุงป้าผู้ใจร้าย วันหนึ่งกลับได้รับจดหมายปริศนา ที่พาเขาเข้าสู่โลกเวทมนตร์ที่เขาไม่เคยรู้ว่ามีอยู่จริง เขาได้ค้นพบว่าแท้จริงแล้วเขาเป็นพ่อมด และมีที่เรียนที่รอเขาอยู่—โรงเรียนฮอกวอตส์ โรงเรียนสอนเวทมนตร์คาถาและเวทวิทยา</small>
            <small>ท่ามกลางปราสาทลึกลับ บันไดที่เคลื่อนไหวได้ และบทเรียนแปลกประหลาด แฮร์รี่พบทั้งมิตรภาพและศัตรู พร้อมกันนั้น เขาก็เริ่มไขปริศนาเกี่ยวกับหินวิเศษลึกลับ และเงามืดของพ่อมดผู้ชั่วร้ายที่เขาไม่เคยลืม… การผจญภัยที่เปลี่ยนชีวิตเริ่มต้นขึ้นที่นี่</small>
          </div>
        </div>
        
        <button className="book13-btn" onClick={showText}>
          Toggle Table Content
        </button>
        
        <div 
          className="book13-table-content" 
          id="displayText" 
          style={{ display: tableVisible ? 'block' : 'none' }}
        >
          <p>1. The Boy Who Lived</p>
          <p>2. The Vanishing Glass</p>
          <p>3. The Letters from No One</p>
          <p>4. The Keeper of the Keys</p>
          <p>5. Diagon Alley</p>
        </div>
        
        <div className="book13-author2">
          <small>Project by Premch Phaosatheanthanon DTI103</small>
        </div>
      </div>
    </div>
  );
};

export default Book13;