import React, { createContext, useState, useContext } from 'react';

// Import all book components
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
} from '../../../booksc';

// Create book data with metadata
const bookData = [
  { 
    id: 1, 
    component: Book1, 
    title: "Financial Intelligence", 
    author: "Karen Berman, Joe Knight, John Case",
    language: "Thai",
    coverImage: "/images/covers/book1.jpg",
    hints: [
      "It's about managing money effectively",
      "It's from a prestigious university",
      "It teaches financial literacy for managers"
    ]
  },
  { 
    id: 2, 
    component: Book2, 
    title: "Do Hard Things", 
    author: "Steve Magness",
    language: "Thai",
    coverImage: "/images/covers/book2.jpg",
    hints: [
      "It's about perseverance and mental strength",
      "The author is an Olympic coach",
      "It explores the science of not giving up"
    ]
  },
  { 
    id: 3, 
    component: Book3, 
    title: "เราต่างเป็นพื้นที่ปลอดภัยของใครสักคน", 
    author: "บ้านข้างๆ",
    language: "Thai",
    coverImage: "/images/covers/book3.jpg",
    hints: [
      "It's about creating emotional safe spaces",
      "The title mentions safety and protection",
      "The book uses a house as a metaphor"
    ]
  },
  { 
    id: 4, 
    component: Book4, 
    title: "สำเร็จได้สไตล์คนขี้เกียจ", 
    author: "Unknown",
    language: "Thai",
    coverImage: "/images/covers/book4.jpg",
    hints: [
      "It's about achieving success with minimal effort",
      "The title mentions laziness",
      "It's about working smarter, not harder"
    ]
  },
  { 
    id: 5, 
    component: Book5, 
    title: "Do Hard Things", 
    author: "Steve Magness",
    language: "Thai",
    coverImage: "/images/covers/book5.jpg",
    hints: [
      "It's about mental toughness",
      "The author works with elite athletes",
      "The title suggests challenging yourself"
    ]
  },
  { 
    id: 6, 
    component: Book6, 
    title: "The Little Prince", 
    author: "Antoine de Saint-Exupéry",
    language: "English/Thai",
    coverImage: "/images/covers/book6.jpg",
    hints: [
      "It's a beloved children's classic",
      "It involves a character from space",
      "It contains philosophical messages"
    ]
  },
  { 
    id: 7, 
    component: Book7, 
    title: "Sherlock Holmes: The Sign of Four", 
    author: "Arthur Conan Doyle",
    language: "English",
    coverImage: "/images/covers/book7.jpg",
    hints: [
      "It's a famous detective story",
      "The protagonist is known for deduction",
      "It was written in the 19th century"
    ]
  },
  { 
    id: 8, 
    component: Book8, 
    title: "อรรถศาสตร์และวัจนปฏิบัติศาสตร์ภาษาอังกฤษ", 
    author: "Unknown",
    language: "Thai",
    coverImage: "/images/covers/book8.jpg",
    hints: [
      "It's about linguistics",
      "It focuses on English language semantics",
      "It's an academic text"
    ]
  },
  { 
    id: 9, 
    component: Book9, 
    title: "ปลายทางที่ Infinity", 
    author: "Unknown",
    language: "Thai",
    coverImage: "/images/covers/book9.jpg",
    hints: [
      "The title mentions infinity",
      "It's about a journey without end",
      "It has philosophical themes"
    ]
  },
  { 
    id: 10, 
    component: Book10, 
    title: "A Journey to the Centre of the Earth", 
    author: "Jules Verne",
    language: "English",
    coverImage: "/images/covers/book10.jpg",
    hints: [
      "It's a science fiction adventure classic",
      "The characters travel deep underground",
      "It was written by a famous French author"
    ]
  },
  { 
    id: 11, 
    component: Book11, 
    title: "The Race of Civilizations", 
    author: "Unknown",
    language: "English",
    coverImage: "/images/covers/book11.jpg",
    hints: [
      "It discusses societal development",
      "It compares different cultures",
      "It has historical themes"
    ]
  },
  { 
    id: 12, 
    component: Book12, 
    title: "Why Has Nobody Told Me this Before?", 
    author: "Julie Smith",
    language: "English",
    coverImage: "/images/covers/book12.jpg",
    hints: [
      "It's a self-help book",
      "The title poses a question",
      "It reveals little-known life insights"
    ]
  },
  { 
    id: 13, 
    component: Book13, 
    title: "Harry Potter and the Sorcerer's Stone", 
    author: "J.K. Rowling",
    language: "English",
    coverImage: "/images/covers/book13.jpg",
    hints: [
      "It's about a young wizard",
      "It takes place at a magical school",
      "It's the first book in a famous series"
    ]
  },
  { 
    id: 14, 
    component: Book14, 
    title: "เราต่างเป็นพื้นที่ปลอดภัยของใครสักคน", 
    author: "บ้านข้างๆ",
    language: "Thai",
    coverImage: "/images/covers/book14.jpg",
    hints: [
      "It uses a house metaphor",
      "It's about providing support to others",
      "The title mentions safety"
    ]
  },
  { 
    id: 15, 
    component: Book15, 
    title: "ชีวิตเรามีแค่สี่พันสัปดาห์", 
    author: "Unknown",
    language: "Thai",
    coverImage: "/images/covers/book15.jpg",
    hints: [
      "It's about time management",
      "The title mentions a specific number of weeks",
      "It discusses the finite nature of life"
    ]
  },
  { 
    id: 16, 
    component: Book16, 
    title: "Same as Ever", 
    author: "Morgan Housel",
    language: "English",
    coverImage: "/images/covers/book16.jpg",
    hints: [
      "It discusses timeless principles",
      "The author is a well-known financial writer",
      "The title suggests consistency over time"
    ]
  }
];

// Create context
const BookContext = createContext();

// Create provider
export const BookProvider = ({ children }) => {
  const [books] = useState(bookData);
  const [gameScore, setGameScore] = useState(0);
  const [currentGameBook, setCurrentGameBook] = useState(null);
  const [hintLevel, setHintLevel] = useState(0);

  // Get a random book for the game
  const getRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * books.length);
    setCurrentGameBook(books[randomIndex]);
    setHintLevel(0);
    return books[randomIndex];
  };

  // Show next hint
  const showNextHint = () => {
    if (hintLevel < 2) {
      setHintLevel(hintLevel + 1);
    }
  };

  // Check if guess is correct
  const checkGuess = (guessId) => {
    if (currentGameBook && guessId === currentGameBook.id) {
      // Calculate score based on hint level
      const hintPenalty = hintLevel * 5;
      const earnedPoints = 15 - hintPenalty;
      setGameScore(gameScore + earnedPoints);
      return true;
    }
    return false;
  };

  // Reset game
  const resetGame = () => {
    setGameScore(0);
    setCurrentGameBook(null);
    setHintLevel(0);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        gameScore,
        currentGameBook,
        hintLevel,
        getRandomBook,
        showNextHint,
        checkGuess,
        resetGame
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

// Custom hook for using the book context
export const useBooks = () => useContext(BookContext);