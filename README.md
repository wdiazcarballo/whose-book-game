# Whose Book Is This? - Interactive Book Game

![Book Game Banner](https://img.shields.io/badge/Interactive-Book%20Game-4361ee)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.0.0-db7093)

An interactive React application that showcases student-created book presentations while offering an engaging guessing game to test users' knowledge of books.

## 📚 Project Overview

"Whose Book Is This?" is a multi-faceted project that combines:

1. A collection of student-created book presentations in HTML
2. React components with traditional CSS styling
3. React components with modern styled-components
4. A complete interactive React application with a book guessing game

The project demonstrates the evolution from basic HTML presentations to fully interactive React components, showcasing different styling approaches and modern web development techniques.

## 🗂️ Repository Structure

This repository is organized into four main directories:

| Directory | Description |
|-----------|-------------|
| `/app` | Complete React application with the book guessing game |
| `/books` | React components with traditional CSS |
| `/booksc` | React components with styled-components |
| `/bookhtml` | Original HTML versions of student book presentations |

## ✨ Key Features

- **Book Collection**: Browse through student-created book presentations
- **Interactive Game**: Guess books based on hints and earn points
- **Multiple Styling Approaches**: Compare traditional CSS vs styled-components
- **Responsive Design**: Works on all devices
- **React Router Navigation**: Smooth navigation between pages

## 🎮 The Game

The "Whose Book Is This?" game challenges players to identify books based on hints:

1. A random book is selected from the collection
2. Players are given hints about the book one at a time
3. The fewer hints needed to guess correctly, the higher the score
4. Points awarded: 1 hint (15 points), 2 hints (10 points), 3 hints (5 points)

## 🚀 Getting Started

### Quick Start (View HTML Versions)

To explore the original HTML book presentations:

```bash
cd bookhtml
# Open index.html in your browser
```

### Running the React App

To run the complete React application with the guessing game:

```bash
cd app
npm install
mkdir -p src/books
cp -r ../booksc/* src/books/
npm start
```

For detailed setup instructions, see the [App README](/app/README.md).

## 💻 Development and Contribution

This project serves as an educational resource demonstrating different approaches to web development:

1. **HTML/CSS/JS**: Basic web presentations in the `/bookhtml` directory
2. **React + CSS**: Component-based approach with traditional CSS in `/books`
3. **React + styled-components**: Modern CSS-in-JS styling in `/booksc`
4. **Complete React App**: Full-featured application with routing, context, and hooks in `/app`

## 🌐 Deployment

The application can be deployed to various platforms:

- **Static Hosting**: Build the React app and deploy to services like GitHub Pages, Netlify, or Vercel
- **AWS EC2**: Follow detailed EC2 deployment instructions in the [App README](/app/README.md#deploying-on-aws-ec2)
- **Local Server**: Use tools like `serve` to host the built application locally

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- All student contributors who created the original book presentations
- React and styled-components teams for their excellent libraries