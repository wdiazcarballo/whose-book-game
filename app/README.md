# Whose Book Is This? - Interactive Book Game

An interactive React application that showcases student-created book presentations while offering an engaging guessing game to test users' knowledge of books.

## Project Overview

"Whose Book Is This?" is a React application that combines a book showcase with a fun interactive game. The app features:

1. **Book Collection** - Display of student-created book presentations
2. **Book Details** - Individual pages for each book
3. **Guessing Game** - Test knowledge by guessing books based on hints
4. **Scoring System** - Earn points for correct guesses

## Features

- **Responsive Design**: Works on all devices
- **React Router Navigation**: Smooth navigation between pages
- **Styled Components**: Modern CSS-in-JS styling approach
- **Interactive Flip Cards**: Engaging UI element for game interaction
- **Context API**: State management for game scores and book data
- **Dynamic Filtering**: Filter books by language and search terms
- **Engaging Game Mechanics**: Hint-based guessing game with scoring

## Project Structure

```
app/
├── public/              # Public assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── FlipCard.jsx # Interactive flip card component
│   │   ├── Footer.jsx   # App footer
│   │   ├── Navbar.jsx   # Navigation bar
│   │   └── styles/      # Global styles and theme
│   ├── context/         # React context
│   │   └── BookContext.jsx # Book and game state management
│   ├── pages/           # Application pages
│   │   ├── Home.jsx     # Landing page
│   │   ├── BookCollection.jsx # Book gallery
│   │   ├── BookDetails.jsx # Individual book view
│   │   ├── GamePage.jsx # Guessing game
│   │   └── NotFound.jsx # 404 page
│   ├── App.jsx          # Main app component with routes
│   └── index.js         # Entry point
└── README.md            # Project documentation
```

## Getting Started

1. **Clone the Repository**
   ```
   git clone https://github.com/yourusername/whose-book-game.git
   cd whose-book-game
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Development Server**
   ```
   npm start
   ```

4. **Build for Production**
   ```
   npm run build
   ```

## Technologies Used

- **React**: Frontend library
- **React Router**: Navigation
- **Styled Components**: CSS-in-JS styling
- **Context API**: State management

## Game Rules

1. A random book is selected from the collection
2. Players are given hints about the book one at a time
3. Players guess which book is being described
4. Points are awarded based on how few hints were needed:
   - 1 hint: 15 points
   - 2 hints: 10 points
   - 3 hints: 5 points

## Contributing

This project was created as a showcase for student work. If you'd like to add more books or features, please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All student contributors who created the book presentations
- React and Styled Components teams for the amazing tools