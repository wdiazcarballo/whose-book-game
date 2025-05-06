import React, { useState } from 'react';
import {
  Book1,
  Book2,
  Book3,
  Book4,
  Book5,
  Book6,
  Book7,
  Book8,
  Book9,
  Book10,
  Book11,
  Book12,
  Book13,
  Book14,
  Book15,
  Book16
} from './index';
import './BookGallery.css';

const BookGallery = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const bookComponents = [
    { id: 1, component: Book1, title: "การเงินจากฮาร์วาร์ด" },
    { id: 2, component: Book2, title: "Do Hard Things" },
    { id: 3, component: Book3, title: "เราต่างเป็นพื้นที่ปลอดภัยของใครสักคน" },
    { id: 4, component: Book4, title: "สำเร็จได้สไตล์คนขี้เกียจ" },
    { id: 5, component: Book5, title: "Do Hard Things" },
    { id: 6, component: Book6, title: "The Little Prince" },
    { id: 7, component: Book7, title: "Sherlock Holmes: The Sign of Four" },
    { id: 8, component: Book8, title: "อรรถศาสตร์และวัจนปฏิบัติศาสตร์ภาษาอังกฤษ" },
    { id: 9, component: Book9, title: "ปลายทางที่ Infinity" },
    { id: 10, component: Book10, title: "A Journey to the Centre of the Earth" },
    { id: 11, component: Book11, title: "The Race of Civilizations" },
    { id: 12, component: Book12, title: "Why Has Nobody Told Me this Before?" },
    { id: 13, component: Book13, title: "Harry Potter and the Sorcerer's Stone" },
    { id: 14, component: Book14, title: "เราต่างเป็นพื้นที่ปลอดภัยของใครสักคน" },
    { id: 15, component: Book15, title: "ชีวิตเรามีแค่สี่พันสัปดาห์" },
    { id: 16, component: Book16, title: "Same as Ever" }
  ];

  const handleBookClick = (id) => {
    setSelectedBook(id);
  };

  const handleBackClick = () => {
    setSelectedBook(null);
  };

  return (
    <div className="book-gallery">
      {selectedBook === null ? (
        <>
          <h1 className="gallery-title">Book Gallery</h1>
          <div className="book-grid">
            {bookComponents.map((book) => (
              <div 
                key={book.id} 
                className="book-card" 
                onClick={() => handleBookClick(book.id)}
              >
                <span className="book-number">{book.id}</span>
                <h3 className="book-title">{book.title}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="book-display">
          <button className="back-button" onClick={handleBackClick}>
            Back to Gallery
          </button>
          <div className="selected-book">
            {React.createElement(bookComponents.find(book => book.id === selectedBook).component)}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookGallery;