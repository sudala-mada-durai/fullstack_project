# Full-Stack TODO App

This is a complete full-stack TODO application built with the MERN stack, using a monorepo structure.

## Features

- User registration and login with JWT authentication
- CRUD functionality for TODOs
- Protected routes for authenticated users
- Clean, modern UI with Tailwind CSS

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Monorepo:** npm Workspaces, Concurrently

## Project Structure

```
/
├── client/         # Frontend (React + Vite)
├── server/         # Backend (Node.js + Express)
└── package.json    # Root package.json for monorepo management
```

## Prerequisites

- Node.js (v14 or later)
- npm (v7 or later)
- MongoDB (local or remote instance)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/fullstack-todo-app.git
    cd fullstack-todo-app
    ```

2.  **Install dependencies:**

    Run the following command from the root directory to install dependencies for both the client and server:

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the `server/` directory and add the following variables:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4.  **Run the application:**

    Run the following command from the root directory to start both the backend and frontend servers concurrently:

    ```bash
    npm run dev
    ```

    The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## API Endpoints

### Auth

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user and get a JWT

### Todos (Protected)

- `GET /api/todos`: Get all todos for the logged-in user
- `POST /api/todos`: Create a new todo
- `PUT /api/todos/:id`: Update a todo
- `DELETE /api/todos/:id`: Delete a todo
