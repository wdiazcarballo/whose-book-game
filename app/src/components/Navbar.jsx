import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useBooks } from '../context/BookContext';

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    gap: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
    }
    
    &:hover:after,
    &.active:after {
      width: 100%;
    }
    
    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ScoreBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  margin-left: 0.5rem;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { gameScore } = useBooks();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>
          Whose <span>Book</span> Is This?
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavList isOpen={isMenuOpen}>
          <NavItem>
            <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/collection" onClick={() => setIsMenuOpen(false)}>
              Book Collection
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/game" onClick={() => setIsMenuOpen(false)}>
              Play the Game
              {gameScore > 0 && <ScoreBadge>{gameScore}</ScoreBadge>}
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;