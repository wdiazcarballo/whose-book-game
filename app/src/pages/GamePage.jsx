import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlipCard from '../components/FlipCard';
import { useBooks } from '../context/BookContext';

const GameContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const GameHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const GameTitle = styled.h1`
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 0.5rem;
`;

const GameDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto 1.5rem;
`;

const ScoreDisplay = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const GameContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HintSection = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const HintTitle = styled.h2`
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const HintList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const HintItem = styled.li`
  padding: 1rem;
  background-color: ${({ theme, revealed }) => 
    revealed ? theme.colors.background : '#f0f0f0'};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: ${({ revealed }) => revealed ? 'default' : 'pointer'};
  opacity: ${({ revealed }) => revealed ? 1 : 0.7};
  
  &:hover {
    opacity: 1;
    transform: ${({ revealed }) => revealed ? 'none' : 'translateY(-2px)'};
  }
`;

const RevealButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

const GuessSection = styled.div``;

const GuessForm = styled.div`
  margin-top: 2rem;
`;

const GuessInput = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: white;
  font-size: 1rem;
  appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
  }
`;

const SelectArrow = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.textLight};
`;

const GuessButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

const ResultMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  
  ${({ result, theme }) => {
    if (result === 'correct') {
      return `
        background-color: rgba(76, 175, 80, 0.1);
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
      `;
    } else if (result === 'incorrect') {
      return `
        background-color: rgba(244, 67, 54, 0.1);
        color: ${theme.colors.error};
        border: 1px solid ${theme.colors.error};
      `;
    }
    return '';
  }}
`;

const ResultDetails = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const GameControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const NextRoundButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const ResetButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const IntroContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const IntroIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const BookReveal = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ViewBookLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const GamePage = () => {
  const { 
    books, 
    gameScore, 
    currentGameBook, 
    hintLevel, 
    getRandomBook, 
    showNextHint, 
    checkGuess, 
    resetGame 
  } = useBooks();
  
  const [guess, setGuess] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [result, setResult] = useState(null); // 'correct', 'incorrect', null
  const [roundCompleted, setRoundCompleted] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);
  
  // Start a new game round
  const startGame = () => {
    getRandomBook();
    setGameStarted(true);
    setResult(null);
    setRoundCompleted(false);
    setGuess('');
    setPointsEarned(0);
  };
  
  // Reveal next hint
  const handleRevealHint = () => {
    showNextHint();
  };
  
  // Submit guess
  const handleSubmitGuess = () => {
    if (!guess) return;
    
    const guessId = parseInt(guess);
    const isCorrect = checkGuess(guessId);
    
    // Calculate points based on number of hints used
    let points = 0;
    if (isCorrect) {
      points = 15 - (hintLevel * 5);
      setPointsEarned(points);
    }
    
    setResult(isCorrect ? 'correct' : 'incorrect');
    setRoundCompleted(true);
  };
  
  // Start next round
  const handleNextRound = () => {
    startGame();
  };
  
  // Reset the game
  const handleResetGame = () => {
    resetGame();
    setGameStarted(false);
    setResult(null);
    setRoundCompleted(false);
    setGuess('');
  };
  
  if (!gameStarted) {
    return (
      <GameContainer>
        <GameHeader>
          <GameTitle>Whose Book Is This?</GameTitle>
          <GameDescription>
            Test your knowledge of our student-created book collection with this fun guessing game!
          </GameDescription>
          {gameScore > 0 && (
            <ScoreDisplay>Current Score: {gameScore}</ScoreDisplay>
          )}
        </GameHeader>
        
        <IntroContainer>
          <IntroIcon>🎮</IntroIcon>
          <h2>How to Play</h2>
          <p>
            1. You'll be given hints about a book from our collection.<br />
            2. Use the hints to guess which book it is.<br />
            3. The fewer hints you need, the more points you earn!<br />
            4. Each correct guess can earn you up to 15 points.
          </p>
          <StartButton onClick={startGame}>Start Game</StartButton>
        </IntroContainer>
      </GameContainer>
    );
  }
  
  if (!currentGameBook) {
    return (
      <GameContainer>
        <p>Loading game...</p>
      </GameContainer>
    );
  }
  
  return (
    <GameContainer>
      <GameHeader>
        <GameTitle>Whose Book Is This?</GameTitle>
        <GameDescription>
          Use the hints to guess which book from our collection is being described.
        </GameDescription>
        <ScoreDisplay>Score: {gameScore}</ScoreDisplay>
      </GameHeader>
      
      <GameContent>
        <HintSection>
          <HintTitle>Book Hints</HintTitle>
          <HintList>
            <HintItem revealed={hintLevel >= 0}>
              {currentGameBook.hints[0]}
            </HintItem>
            <HintItem revealed={hintLevel >= 1}>
              {hintLevel >= 1 ? currentGameBook.hints[1] : "Reveal to see hint #2"}
            </HintItem>
            <HintItem revealed={hintLevel >= 2}>
              {hintLevel >= 2 ? currentGameBook.hints[2] : "Reveal to see hint #3"}
            </HintItem>
          </HintList>
          
          <RevealButton 
            onClick={handleRevealHint} 
            disabled={hintLevel >= 2 || roundCompleted}
          >
            Reveal Next Hint
          </RevealButton>
          
          {result === 'correct' && roundCompleted && (
            <BookReveal>
              <h3>The correct book was:</h3>
              <p><strong>{currentGameBook.title}</strong> by {currentGameBook.author}</p>
              <ViewBookLink to={`/book/${currentGameBook.id}`}>
                View this book &rarr;
              </ViewBookLink>
            </BookReveal>
          )}
        </HintSection>
        
        <GuessSection>
          <FlipCard
            frontTitle="Make Your Guess"
            frontIcon="🤔"
            backTitle="Select a Book"
            backSubtitle="Choose from our collection"
            height="350px"
          >
            <GuessForm>
              <GuessInput>
                <SelectWrapper>
                  <Select 
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    disabled={roundCompleted}
                  >
                    <option value="">-- Select a Book --</option>
                    {books.map((book) => (
                      <option key={book.id} value={book.id}>
                        {book.title} (#{book.id})
                      </option>
                    ))}
                  </Select>
                  <SelectArrow>▼</SelectArrow>
                </SelectWrapper>
                
                <GuessButton 
                  onClick={handleSubmitGuess} 
                  disabled={!guess || roundCompleted}
                >
                  Submit Guess
                </GuessButton>
              </GuessInput>
              
              {result && (
                <ResultMessage result={result}>
                  {result === 'correct' ? (
                    <>
                      Correct! You guessed the right book.
                      <ResultDetails>You earned {pointsEarned} points!</ResultDetails>
                    </>
                  ) : (
                    <>
                      Incorrect! Try again or reveal more hints.
                      <ResultDetails>
                        The correct book was: {currentGameBook.title}
                      </ResultDetails>
                    </>
                  )}
                </ResultMessage>
              )}
            </GuessForm>
          </FlipCard>
          
          {roundCompleted && (
            <GameControls>
              <NextRoundButton onClick={handleNextRound}>
                Next Round
              </NextRoundButton>
              <ResetButton onClick={handleResetGame}>
                Reset Game
              </ResetButton>
            </GameControls>
          )}
        </GuessSection>
      </GameContent>
    </GameContainer>
  );
};

export default GamePage;