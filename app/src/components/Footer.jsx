import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.headings};
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          &copy; {new Date().getFullYear()} Whose Book Is This? - Interactive Book Game
        </Copyright>
        <FooterLinks>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;