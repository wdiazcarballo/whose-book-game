import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.headings};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  button, .button {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.disabled};
      cursor: not-allowed;
      transform: none;
    }
  }

  .main-content {
    min-height: calc(100vh - 140px);
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-center {
    text-align: center;
  }

  .section {
    margin: 3rem 0;
  }

  .card {
    background-color: white;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .main-content {
      padding: 1.5rem 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    body {
      font-size: 0.9rem;
    }

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .main-content {
      padding: 1rem;
    }
  }
`;

export default GlobalStyle;