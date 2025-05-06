import React, { useState } from 'react';
import './Book4.css';

const Book4 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book4-container">
      <header className="book4-header">
        <img 
          src="https://storage.naiin.com/system/application/bookstore/resource/product/201610/203184/1000190973_front_XXL.jpg?imgname=%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B8%84%E0%B8%99%E0%B8%82%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%88" 
          alt="Book Cover" 
          className="book4-cover-image" 
        />
        <div>
          <div className="book4-text-title">สำเร็จได้</div>
        </div>
        <div className="book4-title">
          <div className="book4-text-title">สไตล์</div>
          <div>
            <p className="book4-author">เขียน นะโอะยุกิ ฮนดะ</p>
            <p>แปล สุธาสินี ขจร</p>
          </div>
        </div>
        <div>
          <div className="book4-text-title">คนขี้เกียจ</div>
        </div>
        <h2>เคล็ดวิธีให้คุณประสบความสำเร็จ</h2>
        <h2>แบบสบายกว่าใคร โดยไม่ต้องเลิกขี้เกียจ</h2>
        <button onClick={toggleTOC}>กดเพื่อดูสารบัญ</button>
      </header>
      
      <main className="book4-main">
        <section className="book4-about-book">
          <h3>About the Book</h3>
          <p>หยุดก่อน! ถ้าคุณกำลังมอง "ความขี้เกียจ"</p>
          <p>ในแง่ลบและอยากกำจัดทิ้งให้สิ้นซากเรามีวิธีที่ดีกว่านั้น</p>
          <p>ว่ากันว่าคนขยันมีจุดอ่อน และคนขี้เกียจก็มีจุดแข็งเช่นกัน นี่คือสุดยอดเคล็ดลับที่จะทำให้คุณมองเห็นจุดแข็งของความขี้เกียจและรู้จักนำมาใช้ให้เกิดประโยชน์สูงสุดด้วยการคิดพลิกแพลงเพียงเล็กน้อยแล้วคุณจะประสบความสำเร็จในทุกเรื่องได้แบบง่ายๆสบายๆโดยขี้เกียจได้อย่างเต็มภาคภูมิ กอดความขี้เกียจไว้ให้แน่นแล้วก้าวสู่จุดสูงสุดของชีวิตไปด้วยกัน!</p>
        </section>
        
        <section className="book4-toc" style={{ display: tocVisible ? 'block' : 'none' }}>
          <h3>Table of Contents</h3>
          <ul>
            <li>ลองปรับเปลี่ยนความคิด</li>
            <li>ลองปรับเปลี่ยนวิถีชีวิต</li>
            <li>ลองปรับเปลี่ยนการทำงาน</li>
          </ul>
        </section>
      </main>
      
      <footer className="book4-footer">
        <p>Project by Chayatat Bunharn for DTI103</p>
      </footer>
    </div>
  );
};

export default Book4;