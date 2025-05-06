import React, { useState } from 'react';
import styled from 'styled-components';
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

// Styled Components
const BookGalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const GalleryTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 2.5rem;
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const BookCard = styled.div`
  position: relative;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    min-height: 120px;
    padding: 15px;
  }
`;

const BookNumber = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4a6fa5;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const BookTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BookDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.button`
  background-color: #4a6fa5;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a5a8f;
  }
`;

const SelectedBook = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

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
    <BookGalleryContainer>
      {selectedBook === null ? (
        <>
          <GalleryTitle>Book Gallery</GalleryTitle>
          <BookGrid>
            {bookComponents.map((book) => (
              <BookCard 
                key={book.id} 
                onClick={() => handleBookClick(book.id)}
              >
                <BookNumber>{book.id}</BookNumber>
                <BookTitle>{book.title}</BookTitle>
              </BookCard>
            ))}
          </BookGrid>
        </>
      ) : (
        <BookDisplay>
          <BackButton onClick={handleBackClick}>
            Back to Gallery
          </BackButton>
          <SelectedBook>
            {React.createElement(bookComponents.find(book => book.id === selectedBook).component)}
          </SelectedBook>
        </BookDisplay>
      )}
    </BookGalleryContainer>
  );
};

export default BookGallery;