import React from 'react';
import BookGallery from './BookGallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Whose Book - Student Collection</h1>
        <p>A gallery of books presented by students</p>
      </header>
      
      <main>
        <BookGallery />
      </main>
      
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Book Gallery Project</p>
      </footer>
    </div>
  );
}

export default App;