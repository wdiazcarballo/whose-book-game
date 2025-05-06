import React, { useState } from 'react';
import './Book14.css';

const Book14 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book14-container">
      {/* หน้า 1: ปก */}
      <div className="book14-page book14-book-cover">
        <div className="book14-publisher">springbooks</div>
        <div className="book14-title">เราต่างเป็นพื้นที่ปลอดภัย<br />ของใครสักคน</div>
        <div className="book14-illustration">
          <img 
            className="book14-house-image" 
            src="https://kruball.com/wp-content/uploads/2025/04/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ-scaled.jpg" 
            alt="บ้านสีขาว"
          />
        </div>
        <div className="book14-subtitle">
          หากวันใดที่โลกไม่เป็นใจ หรือท้องฟ้าไม่สดใส<br />
          ฉันพร้อมจะเป็นพื้นที่ปลอดภัยให้เธอได้พักพิง
        </div>
        <div className="book14-author">บ้านข้างๆ</div>
        <button className="book14-toggle-toc-btn" onClick={toggleTOC}>
          Contents
        </button>
        <div 
          className="book14-table-of-contents" 
          id="toc"
          style={{ display: tocVisible ? 'block' : 'none' }}
        >
          <div className="book14-toc-title">Contents</div>
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

      {/* หน้า 2: คำโปรย */}
      <div className="book14-page book14-book-blurb-page">
        <div className="book14-blurb-full">
          หลายครั้ง<br />
          การเติบโตก็ทำให้เราเหนื่อยล้าโดยไม่รู้ตัว<br /><br />
          ซึ่งทุกครั้งที่รู้สึกเช่นนี้ เราก็เพียงต้องการ<br />
          'พื้นที่ปลอดภัยทางความรู้สึก'<br /><br />
          ที่เปรียบเสมือน 'บ้าน' ให้เราได้พักพิง<br />
          และเป็นตัวเองได้อย่างเต็มที่
        </div>
      </div>
    </div>
  );
};

export default Book14;