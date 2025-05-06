# Book Gallery - Styled Components Version

This project contains React components for a book gallery using styled-components, featuring webpages created by students to display books they have read.

## Structure

- `index.jsx` - Exports all book components
- `BookGallery.jsx` - Main gallery component that displays all books
- `Book1.jsx` through `Book16.jsx` - Individual book components using styled-components
- `App.jsx` - Main application component

## Advantages of Styled Components

This version of the book gallery uses styled-components instead of traditional CSS files, providing several benefits:

1. **Component-scoped styles**: Styles are scoped to their components, preventing style leaks
2. **Dynamic styling**: Styles can change based on props and state
3. **No class name conflicts**: Unique class names are generated automatically
4. **Easier maintenance**: Styles live alongside component logic
5. **Theme support**: Easier theming and global style management
6. **CSS-in-JS**: Full access to JavaScript features in styling

## Usage

To use these components in a React application:

1. Ensure styled-components is installed:
```bash
npm install styled-components
```

2. Import the BookGallery component:
```jsx
import BookGallery from './booksc/BookGallery';
```

3. Use it in your React application:
```jsx
function App() {
  return (
    <div className="App">
      <BookGallery />
    </div>
  );
}
```

4. To use individual book components:
```jsx
import { Book1, Book2 } from './booksc';

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
- Styled with styled-components for modern CSS-in-JS approach

## Requirements

- React 16.8+ (for hooks support)
- styled-components 5.0+
- A modern browser that supports CSS Grid and Flexbox

## Credits

Each book component was created based on student webpages showcasing books they've read. Original CSS designs were converted to styled-components while maintaining the same visual appearance and functionality.