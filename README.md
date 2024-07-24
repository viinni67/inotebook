# MERN Notes App

## Overview
This is a MERN-based web application designed to securely store your private notes. It supports full CRUD (Create, Read, Update, Delete) operations and ensures the safety of your account with JWT (JSON Web Tokens) and bcrypt libraries for password encryption.

## Features
- **User Authentication**: Secure login and registration using JWT and bcrypt.
- **CRUD Operations**: Create, read, update, and delete your personal notes.
- **Responsive Design**: Accessible on various devices with a user-friendly interface.

## Technologies Used
- **MongoDB**: Database for storing user data and notes.
- **Express.js**: Backend framework for building the server and API.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the backend server.
- **JWT**: For secure user authentication.
- **bcrypt**: For hashing and securing passwords.

## Installation
Available Scripts

In the project directory, you can run:
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
npm run eject



### Prerequisites
- Node.js
- MongoDB

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/viinni67/mern-notes-app.git
    cd mern-notes-app
    ```

2. **Install dependencies**:
    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```



4. **Run the application**:
    ```bash
    # Start the backend server
    cd backend
    npm nodemon

    # Start the frontend server
    cd ../frontend
    npm start
    ```

## Usage
1. **signup**: Create a new account.
2. **Login**: Access your account using your credentials.
3. **Create Notes**: Add new notes.
4. **View Notes**: See all your saved notes.
5. **Edit Notes**: Update existing notes.
6. **Delete Notes**: Remove notes you no longer need.


