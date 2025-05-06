import React, { useState } from 'react';
import './Book10.css';

const Book10 = () => {
  const [tocVisible, setTocVisible] = useState(false);
  
  const toggleTOC = () => {
    setTocVisible(!tocVisible);
  };

  return (
    <div className="book10-container">
      <div className="book10-inner-container">
        <header className="book10-header">
          <div className="book10-book-header">
            <img src="103book.jpg" alt="Book Cover" className="book10-cover-image" />
            <div className="book10-book-title">
              <h1>A Journey to the Centre of the Earth</h1>
              <h2>A Classic Science Fiction Adventure</h2>
              <p className="book10-author">By Jules Verne</p>
            </div>
          </div>
          <div className="book10-toggle-container">
            <button 
              className="book10-toggle-btn" 
              onClick={toggleTOC}
            >
              {tocVisible ? "Hide Chapters" : "Explore Chapters"}
            </button>
          </div>
        </header>

        <main className="book10-main">
          <section 
            className={`book10-toc ${tocVisible ? 'book10-active' : ''}`}
          >
            <div className="book10-corner-decoration book10-top-left"></div>
            <div className="book10-corner-decoration book10-top-right"></div>
            <div className="book10-corner-decoration book10-bottom-right"></div>
            <div className="book10-corner-decoration book10-bottom-left"></div>
            <h3>Table of Contents</h3>
            <ul>
              <li>Chapter I: My Uncle Makes a Great Discovery</li>
              <li>Chapter II: The Mysterious Parchment</li>
              <li>Chapter III: An Astounding Discovery</li>
              <li>Chapter IV: We Start on the Journey</li>
              <li>Chapter V: First Lessons in Climbing</li>
              <li>Chapter VI: Our Voyage to Iceland</li>
              <li>Chapter VII: Conversation and Discovery</li>
              <li>Chapter VIII: The Eider-Down Hunter—Off at Last</li>
              <li>Chapter IX: Our Start—We Meet with Adventures</li>
              <li>Chapter X: Traveling in Iceland</li>
            </ul>
          </section>

          <section className="book10-about-book">
            <div className="book10-corner-decoration book10-top-left"></div>
            <div className="book10-corner-decoration book10-top-right"></div>
            <div className="book10-corner-decoration book10-bottom-right"></div>
            <div className="book10-corner-decoration book10-bottom-left"></div>
            <h3>About the Book</h3>
            <p>The intrepid Professor Lidenbrock embarks upon the most incredible adventure of the nineteenth century. After decoding a scrap of paper in runic script, the professor and his nephew, Axel, embark on a journey to Iceland in search of a passage to the center of the earth.</p>
            <p>Along with their Icelandic guide, Hans, they travel down the crater of a volcano, encountering many dangers along the way, including prehistoric animals and natural hazards. Eventually, they surface again in southern Italy. The novel is filled with detailed descriptions of geological formations and ancient life forms, showcasing Verne's extensive research and imagination.</p>
            <p>First published in 1864, <span className="book10-highlight">A Journey to the Centre of the Earth</span> remains one of Jules Verne's most beloved works and a pioneering example of science fiction literature. The novel demonstrates Verne's uncanny ability to predict scientific developments while crafting an enthralling adventure story.</p>
          </section>
        </main>
        <footer className="book10-footer">
          <p>&copy; project by Natakorn</p>
        </footer>
      </div>
    </div>
  );
};

export default Book10;