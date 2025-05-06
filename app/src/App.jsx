import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/GlobalStyles';
import { theme } from './components/styles/Theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import BookCollection from './pages/BookCollection';
import BookDetails from './pages/BookDetails';
import GamePage from './pages/GamePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<BookCollection />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;