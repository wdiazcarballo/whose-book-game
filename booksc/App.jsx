import React from 'react';
import styled from 'styled-components';
import BookGallery from './BookGallery';

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const AppHeader = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 2rem 1rem;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  background-color: #f7f9fc;
`;

const AppFooter = styled.footer`
  background-color: #34495e;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <h1>Whose Book - Student Collection</h1>
        <p>A gallery of books presented by students</p>
      </AppHeader>
      
      <Main>
        <BookGallery />
      </Main>
      
      <AppFooter>
        <p>&copy; {new Date().getFullYear()} Book Gallery Project</p>
      </AppFooter>
    </AppContainer>
  );
}

export default App;