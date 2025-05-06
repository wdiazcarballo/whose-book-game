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
│   └── images/          # Book cover images
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
│   ├── books/           # Book components using styled-components
│   ├── App.jsx          # Main app component with routes
│   └── index.js         # Entry point
└── README.md            # Project documentation
```

## Getting Started

### Option 1: Using the provided setup (Recommended)

1. **Install dependencies**
   ```bash
   cd app
   npm install
   ```

2. **Create books directory in src**
   ```bash
   mkdir -p src/books
   ```

3. **Copy book components**
   ```bash
   # From the repository root:
   cp -r booksc/* app/src/books/
   ```

4. **Update book component imports**
   - Open `src/context/BookContext.jsx`
   - Change the import path from `../../../booksc` to `../books`

5. **Start the development server**
   ```bash
   npm start
   ```

### Option 2: Starting from scratch with create-react-app

1. **Create a new React app**
   ```bash
   npx create-react-app whose-book-is-this
   cd whose-book-is-this
   ```

2. **Install required dependencies**
   ```bash
   npm install react-router-dom styled-components
   ```

3. **Copy source files**
   - Copy all files from `app/src` to your new project's `src` directory
   - Copy book components from `booksc` to `src/books`
   - Copy public assets from `app/public` to your new project's `public` directory

4. **Update import paths**
   - Make sure all import paths are correctly pointing to the new locations

5. **Start the development server**
   ```bash
   npm start
   ```

## Troubleshooting

If you encounter errors during setup or running:

1. **Missing dependencies**
   ```bash
   # Common dependencies that may need to be installed:
   npm install react-router-dom styled-components
   ```

2. **Image loading issues**
   - Make sure to create the directory structure:
   ```bash
   mkdir -p public/images/covers
   ```
   - Add book cover images to this directory if referenced in the components

3. **Path issues**
   - The most common issue is incorrect import paths. Make sure to check:
   ```jsx
   // In src/context/BookContext.jsx
   // Change this:
   import { Book1, Book2, ... } from '../../../booksc';
   
   // To this:
   import { Book1, Book2, ... } from '../books';
   ```

4. **Component render issues**
   - If you see errors about undefined components, check if all the imports are correct
   - Ensure all book components are properly exported from their respective files

## Running in Development Mode

```bash
npm start
```

This will start the development server and open the application in your default browser at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build
```

This will create a production-ready build in the `build` directory. You can serve it with any static server:

```bash
npx serve -s build
```

## Deploying on AWS EC2

To deploy this application on an AWS EC2 instance, follow these steps:

### 1. Set Up an EC2 Instance

1. **Launch an EC2 instance**
   - Log in to your AWS Management Console
   - Navigate to EC2 Dashboard
   - Click "Launch Instance"
   - Choose Amazon Linux 2 or Ubuntu Server (recommended)
   - Select t2.micro (free tier eligible) or larger as needed
   - Configure security groups to allow HTTP (port 80), HTTPS (port 443), and SSH (port 22)
   - Create or select an existing key pair for SSH access
   - Launch the instance

2. **Connect to your instance**
   ```bash
   ssh -i /path/to/your-key.pem ec2-user@your-instance-public-dns
   ```
   (Use `ubuntu` instead of `ec2-user` if you selected Ubuntu Server)

### 2. Install Dependencies

```bash
# Update the system
sudo yum update -y  # For Amazon Linux
# OR
sudo apt update && sudo apt upgrade -y  # For Ubuntu

# Install Node.js and npm
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -  # For Amazon Linux
sudo yum install -y nodejs  # For Amazon Linux
# OR
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -  # For Ubuntu
sudo apt-get install -y nodejs  # For Ubuntu

# Install Git
sudo yum install git -y  # For Amazon Linux
# OR
sudo apt install git -y  # For Ubuntu

# Install Nginx
sudo amazon-linux-extras install nginx1 -y  # For Amazon Linux
# OR
sudo apt install nginx -y  # For Ubuntu

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 3. Deploy the Application

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/whose-book-game.git
   cd whose-book-game/app
   ```

2. **Install dependencies and build**
   ```bash
   npm install
   npm run build
   ```

3. **Configure Nginx**
   Create an Nginx configuration file:
   ```bash
   sudo nano /etc/nginx/conf.d/whosebook.conf
   ```

   Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;  # Replace with your domain or public IP

       root /home/ec2-user/whose-book-game/app/build;  # Adjust path as needed
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
           expires 1y;
           add_header Cache-Control "public, max-age=31536000";
       }
   }
   ```

4. **Verify and restart Nginx**
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### 4. Set Up HTTPS (Optional but Recommended)

1. **Install Certbot**
   ```bash
   # For Amazon Linux
   sudo amazon-linux-extras install epel -y
   sudo yum install certbot python-certbot-nginx -y
   
   # For Ubuntu
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Obtain and configure SSL certificate**
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

3. **Set up auto-renewal**
   ```bash
   sudo certbot renew --dry-run
   ```

### 5. Continuous Deployment (Optional)

For automatic deployment when you push changes:

1. **Create a deployment script**
   ```bash
   nano ~/deploy.sh
   ```

   Add the following content:
   ```bash
   #!/bin/bash
   cd ~/whose-book-game
   git pull
   cd app
   npm install
   npm run build
   ```

   Make it executable:
   ```bash
   chmod +x ~/deploy.sh
   ```

2. **Set up a GitHub webhook or use AWS CodeDeploy for more advanced CI/CD workflows**

### 6. Updating the Application

To update the application with new changes:

```bash
cd ~/whose-book-game
git pull
cd app
npm install
npm run build
```

Your application should now be accessible via your EC2 instance's public IP address or your domain name if you've configured DNS to point to your instance.

## Project Organization

This repository contains several key directories:

- `/app` - The React application (you are here)
- `/books` - React components with traditional CSS
- `/booksc` - React components with styled-components (recommended for use)
- `/bookhtml` - Original HTML versions of the student book presentations

## Game Rules

1. A random book is selected from the collection
2. Players are given hints about the book one at a time
3. Players guess which book is being described
4. Points are awarded based on how few hints were needed:
   - 1 hint: 15 points
   - 2 hints: 10 points
   - 3 hints: 5 points

## License

This project is licensed under the MIT License.

## Acknowledgments

- All student contributors who created the book presentations
- React and Styled Components teams for the amazing tools