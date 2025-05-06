# Book Gallery - React Components

This project contains React components for a book gallery, featuring webpages created by students to display books they have read.

## Structure

- `index.jsx` - Exports all book components
- `BookGallery.jsx` - Main gallery component that displays all books
- `Book1.jsx` through `Book16.jsx` - Individual book components
- Associated CSS files for styling

## Usage

To use these components in a React application:

1. Import the BookGallery component:
```jsx
import BookGallery from './books/BookGallery';
```

2. Use it in your React application:
```jsx
function App() {
  return (
    <div className="App">
      <BookGallery />
    </div>
  );
}
```

3. To use individual book components:
```jsx
import { Book1, Book2 } from './books';

function App() {
  return (
    <div className="App">
      <Book1 />
      <Book2 />
    </div>
  );
}
```

## Features

- Responsive design
- Interactive gallery with grid layout
- Individual book components with unique styling
- Table of contents toggle functionality
- Easy navigation between books

## Requirements

- React 16.8+ (for hooks support)
- A modern browser that supports CSS Grid and Flexbox

## Credits

Each book component was created based on student webpages showcasing books they've read.