import React, { useState } from 'react';
import './Book3.css';

const Book3 = () => {
  const [showTOC, setShowTOC] = useState(false);

  const toggleTOC = () => {
    setShowTOC(!showTOC);
  };

  return (
    <div className="book3-container">
      <div className="page book-cover">
        <div className="publisher">springbooks</div>
        <div className="title">เราต่างเป็นพื้นที่ปลอดภัย<br />ของใครสักคน</div>
        <div className="illustration">
          <img 
            className="house-image" 
            src="https://kruball.com/wp-content/uploads/2025/04/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ-scaled.jpg" 
            alt="บ้านสีขาว" 
          />
        </div>
        <div className="subtitle">หากวันใดที่โลกไม่เป็นใจ หรือท้องฟ้าไม่สดใส<br />ฉันพร้อมจะเป็นพื้นที่ปลอดภัยให้เธอได้พักพิง</div>
        <div className="author">บ้านข้างๆ</div>
        <button className="toggle-toc-btn" onClick={toggleTOC}>Contents</button>
        
        <div className="table-of-contents" style={{ display: showTOC ? 'block' : 'none' }}>
          <div className="toc-title">Contents</div>
          <ul>
            <li>01: หน้าบ้าน</li>
            <li>02: ห้องรับแขก</li>
            <li>03: ห้องทำงาน</li>
            <li>04: ห้องครัว</li>
            <li>05: ห้องนอน</li>
            <li>06: ห้องน้ำ</li>
            <li>บทส่งท้าย: "บ้าน"</li>
          </ul>
        </div>
      </div>

      <div className="page book-blurb-page">
        <div className="blurb-full">
          หลายครั้ง<br />การเติบโตก็ทำให้เราเหนื่อยล้าโดยไม่รู้ตัว<br /><br />
          ซึ่งทุกครั้งที่รู้สึกเช่นนี้ เราก็เพียงต้องการ<br />
          'พื้นที่ปลอดภัยทางความรู้สึก'<br /><br />
          ที่เปรียบเสมือน 'บ้าน' ให้เราได้พักพิง<br />
          และเป็นตัวเองได้อย่างเต็มที่
        </div>
      </div>
    </div>
  );
};

export default Book3;