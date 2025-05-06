import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const flipBackAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: ${props => props.width || '300px'};
  height: ${props => props.height || '350px'};
  perspective: 1000px;
  margin: 0 auto;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  animation: ${props => props.flipped ? flipAnimation : flipBackAnimation} 0.8s forwards;
  cursor: pointer;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardFront = styled(CardSide)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  transform: rotateY(0deg);
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const CardBack = styled(CardSide)`
  background-color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
`;

const FrontContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const FlipInstructions = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  text-align: center;
`;

const BackContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BackHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const BackTitle = styled.h3`
  color: ${({ theme }) => theme.colors.headings};
  margin-bottom: 0.5rem;
`;

const BackSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

const BackBody = styled.div`
  flex: 1;
`;

const BackFooter = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const FlipCard = ({ 
  frontTitle = "Click to Flip", 
  frontIcon = "📚", 
  backTitle = "Card Back",
  backSubtitle = "",
  width,
  height,
  children,
  footer = "Click to flip back"
}) => {
  const [flipped, setFlipped] = useState(false);
  
  const flipCard = () => {
    setFlipped(!flipped);
  };
  
  return (
    <CardContainer width={width} height={height}>
      <CardInner flipped={flipped} onClick={flipCard}>
        <CardFront>
          <FrontContent>
            <CardIcon>{frontIcon}</CardIcon>
            <CardTitle>{frontTitle}</CardTitle>
            <FlipInstructions>Click to flip</FlipInstructions>
          </FrontContent>
        </CardFront>
        <CardBack>
          <BackContent>
            <BackHeader>
              <BackTitle>{backTitle}</BackTitle>
              {backSubtitle && <BackSubtitle>{backSubtitle}</BackSubtitle>}
            </BackHeader>
            <BackBody>{children}</BackBody>
            <BackFooter>{footer}</BackFooter>
          </BackContent>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default FlipCard;