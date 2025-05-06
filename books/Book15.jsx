import React, { useState } from 'react';
import './Book15.css';

const Book15 = () => {
  const [tocVisible, setTocVisible] = useState(false);

  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book15-container">
      <header className="book15-header">
        <p className="book15-howto">howto</p>
        <h4 className="book15-bestseller">AN INSTANT NEW YORK TIMES BESTSELLER</h4>
        <div className="book15-info-container">
          <img src="Cover.png" alt="Book Cover" className="book15-book-image" />
          <div className="book15-info-text">
            <h3 className="book15-oliver">
              Oliver <br /> Burkeman <br /> <p className="book15-writer">เขียน</p>
            </h3>
            <p className="book15-translator">
              วาดฝัน <br /> คุณาวงศ์ <br /> แปล
            </p>
          </div>
        </div>
        <h2 className="book15-book-title-en">Four Thousand Weeks</h2>
        <h3 className="book15-book-subtitle">Time Management for Mortals</h3>
        <h1 className="book15-book-title-th">ชีวิตเรามีแค่สี่พันสัปดาห์</h1>
        <p className="book15-tagline">
          วิธีบริหารเวลาสำหรับมนุษย์ทุกคน <br /> เพราะเราไม่ได้ "มี" เวลา <span style={{ fontWeight: 600 }}>แต่เรา "คือ" เวลา</span>
        </p>
        <p className="book15-quote-1">
          "นี่คือหนังสือเกี่ยวกับการบริหารเวลาที่สำคัญที่สุดที่เคยมีมา" <br />
          <span style={{ fontWeight: 900 }}>- Adam Grant</span> นักจิตวิทยา ผู้เขียน <span style={{ fontStyle: 'italic' }}>THINK AGAIN</span>
        </p>
      </header>

      <main className="book15-main">
        <section className="book15-about-book">
          <h1 className="book15-book-title-th-page1">ชีวิตเรามีแค่สี่พันสัปดาห์</h1>
          <h1 className="book15-book-title-en-page1">Four Thousand Weeks</h1>
          <h1 className="book15-book-subtitle-page1">Time Management for Mortals</h1>
          <h3 className="book15-oliver-page1">Oliver Burkeman</h3>
          <p className="book15-writer-page1">เขียน</p>
          <h3 className="book15-translator-page1">วาดฝัน คุณาวงศ์</h3>
          <p className="book15-translat">แปล</p>
          <p className="book15-title-quote-2">การอ่านคือรากฐานที่สําคัญ</p>
          <p className="book15-quote-2">
            ผู้คนบ่นว่าไม่มี"เวลาอ่านหนังสือ"อีกต่อไป <br /> แต่ในความเป็นจริง ไม่ใช่ว่าพวกเรายุ่งเกินไป <br /> หรือสมาธิหลุดง่ายเกินไป แต่พวกเราใจร้อนเกินไป <br /> 
            พวกเราไม่เต็มใจจะยอมรับว่าการอ่านเป็นกิจกรรมที่ดำเนินไปจามเวลาของตัวมันเอง <br /> -โอลิเวอร์ เบิร์กแมน
          </p>
          <p className="book15-heter">แด่เฮเทอร์และโรแวน</p>
          <p className="book15-quote-douglas">
            การเกิดขึ้นมาเป็นสิ่งสุดท้ายที่เรารู้สึกขอบคุณไม่ใช่หรือ <br /> คุณรู้ว่าคุณไม่จำเป็นต้อง <span style={{ fontStyle: 'italic' }}>เกิดขึ้นมา</span><br /> คุณไม่จำเป็นต้องเกิดขึ้นมา แต่คุณก็เกิดขึ้นมาแล้ว
          </p>
          <p className="book15-douglas">-ดักลาส ฮาร์ดิง</p>
          <p className="book15-quote-charlotte">
            สิ่งที่ทำให้มันสุดจะทนคือความเชื่อผิดๆ <br />ของคุณว่ามันเป็นสิ่งที่รักษาได้
          </p>
          <p className="book15-charlotte">-ชาร์ลอต โจโค เบค</p>
          <button className="book15-button" onClick={toggleTOC}>สารบัญ</button>
        </section>

        <section 
          className="book15-toc"
          style={{ display: tocVisible ? 'block' : 'none' }}
        >
          <div className="book15-listOfContents"> 
            <p className="book15-page-header">บทนำ : ในระยะยาวเราทุกคนก็ตายอยู่ดี <span className="book15-page-number">1</span></p>
            <h2 className="book15-header-1">ส่วนที่ 1 : เลือกที่จะเลือก</h2>
            <ol className="book15-toc-list">
              <li>1. ชีวิตที่ยอมรับการมีขีดจำกัด <span className="book15-page-number">13</span></li>
              <li>2. กับดักของการมีประสิทธิภาพ <span className="book15-page-number">32</span></li>
              <li>3. เผชิญหน้ากับการมีจุดสิ้นสุด <span className="book15-page-number">51</span></li>
              <li>4. เป็นผู้ผัดวันประกันพรุ่งที่ดีกว่าเดิม <span className="book15-page-number">64</span></li>
              <li>5. ปัญหาเรื่องแตงโม <span className="book15-page-number">81</span></li>
              <li>6. ผู้รบกวนที่ใกล้ชิด <span className="book15-page-number">92</span></li>
            </ol>
            <h2 className="book15-header-2">ส่วนที่2 : เหนือการควบคุม</h2>
            <ol className="book15-toc-list">
              <li>7. เราไม่เคยมีเวลาจริงๆหรอก <span className="book15-page-number">101</span></li>
              <li>8. คุณอยู่ตรงนี้ <span className="book15-page-number">112</span></li>
              <li>9. ค้นพบการพักผ่อนอีกครั้ง <span className="book15-page-number">128</span></li>
              <li>10.วังวนของความใจร้อน <span className="book15-page-number">149</span></li>
              <li>11.อยู่บนรถบัสต่อไป <span className="book15-page-number">159</span></li>
              <li>12.ความโดดเดี่ยวของดิจิทัลโนแมด <span className="book15-page-number">170</span></li>
              <li>13.การบําบัดด้วยการตระหนักว่าเราไม่ได้สําคัญในจักรวาล <span className="book15-page-number">186</span></li>
              <li>14.โรคมนุษย์ <span className="book15-page-number">197</span></li>
              <li className="book15-postscript">บทส่งท้าย : เหนือไปกว่าความหวัง <span className="book15-page-number">210</span></li>
              <li>ภาคผนวก : เครื่องมือสิบชิ้นสําหรับการเปิดใจรับขีดจํากัดของคุณ <span className="book15-page-number">215</span></li>
              <li className="book15-about-writter">เกี่ยวกับผู้เขียน <span className="book15-page-number">226</span></li>
            </ol>
          </div>
        </section>

        <div className="book15-blurb">
          <p>ปลดแอกตัวเองจาก "คำสาปของยุคนี้" ที่เรียกร้องให้เรายัดทุกอย่างลงในเวลาที่มี<br /></p>
          <p><br />เลิกหมกมุ่นกับการเช็กอีเมล เลิกไล่ตามกับรายการสิ่งที่ต้องทำจนหัวหกก้นขวิด<br />
            และที่สำคัญที่สุดคือ เลิกหลอกตัวเองว่ายิ่งทำมากก็ยิ่งโปรดักทีฟมาก</p>
          <p><br />โอลิเวอร์ เบิร์กแมน คอลัมนิสต์ชื่อดังของ<span style={{ fontStyle: 'italic' }}>เดอะการ์เดียน</span>
            <br /> จะพาคุณสำรวจปรัชญาน่าทึ่งเกี่ยวกับเวลาและการบริหารเวลา<br />
            ที่จะช่วยให้คุณมองเวลาในชีวิตที่มีอยู่แค่ราวๆ 4,000 สัปดาห์เปลี่ยนไปโดยสิ้นเชิง<br />
            เขาสะท้อนให้เห็นว่าคนเรามีความคิดผิดๆเกี่ยวกับเวลา<br />
            และนั่นคือต้นตอของหายนะที่แท้จริงที่ทำให้การบริหารเวลาของเราล้มเหลวไม่เป็นท่า</p>
          <p><br />เบิร์กแมนได้มอบเครื่องมือที่จะช่วยให้คุณได้สร้างชีวิตที่มีความหมาย<br />
            ด้วยการยินดีโอบรับขีดจำกัดของชีวิต<br />
            และคุณจะไปถึงจุดสูงสุดของการมีผลิตภาพ<br />
            ความสำเร็จ และความรู้สึกเติมเต็ม</p>
        </div>

        <div className="book15-blurb-2">
          <p>"เราต่างรู้ว่าเวลาของเรามีจำกัด แต่สิ่งที่เราไม่รู้ และโอลิเวอร์ เบิร์กแมน กำลังจะมาบอกเราคือ<br />
            อำนาจในการควบคุมเวลาของเราก็มีจำกัดด้วยเช่นกัน หนังสือที่มีเนื้อหาลึกซึ้ง (และชวนหัว)<br />
            เล่มนี้จะกระตุ้นให้คุณทบทวนการบูชาความมีประสิทธิภาพเสียใหม่<br />
            และปฏิเสธความเชื่อผิดๆเกี่ยวกับความยุ่ง<br />
            พร้อมทั้งออกแบบชีวิตของคุณใหม่ ให้ใส่ใจเริ่องที่สำคัยจริงๆ "</p>
          <h4>— Daniel H. Pink นักเขียนขายดีจาก<span style={{ fontStyle: 'italic' }}>New York Times</span></h4>
        </div>
      </main>
    </div>
  );
};

export default Book15;