import React, { useState } from 'react';
import './Book6.css';

const Book6 = () => {
  const [summaryVisible, setSummaryVisible] = useState(false);

  const toggleSummary = () => {
    setSummaryVisible(!summaryVisible);
  };

  return (
    <div className="book6-container">
      <header className="book6-header">
        <h1>The Little Prince</h1>
        <h2>by Antoine de Saint-Exupéry</h2>
      </header>

      <main className="book6-main">
        <section className="book6-cover">
          <img src="cover.jpg" alt="The Little Prince book cover" />
        </section>

        <section className="book6-summary">
          <button onClick={toggleSummary}>ดูคำโปรย</button>
          <p id="blurb" className={summaryVisible ? 'book6-visible' : 'book6-hidden'}>
            "All grown-ups were once children... but only few of them remember it."
          </p>
        </section>

        <section className="book6-toc">
          <h3>สารบัญ</h3>
          <ul>
            <li>Chapter 1 – การพบกันในทะเลทราย</li>
            <li>Chapter 2 – ดาว B-612 และดอกกุหลาบ</li>
            <li>Chapter 3 – การเดินทางผ่านดาวทั้งหก</li>
            <li>Chapter 4 – การพบกับสุนัขจิ้งจอก</li>
            <li>Chapter 5 – การกลับบ้านและคำร่ำลา</li>
          </ul>
        </section>
      </main>

      <footer className="book6-footer">
        <p>Inspired by the book cover • Created by Nanthawat</p>
      </footer>
    </div>
  );
};

export default Book6;