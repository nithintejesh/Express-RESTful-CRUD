# Node.js Express CRUD Application

This project is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, EJS templates, and the UUID package for generating unique identifiers.

## Project Overview

The application allows you to manage posts with the following endpoints:

1. **GET /posts**:
   - Fetches all posts and renders them on the index page (`index.ejs`).

2. **POST /posts**:
   - Creates a new post using data submitted through a form (`new.ejs`).

3. **GET /posts/add**:
   - Serves the form to add a new post.

4. **GET /posts/:id**:
   - Fetches and displays a single post based on its unique identifier (`id`).

5. **PATCH /posts/:id**:
   - Updates the content of a specific post identified by its `id`.

6. **GET /posts/:id/edit**:
   - Serves the form to edit a post with the specified `id`.

7. **DELETE /posts/:id**:
   - Deletes a post with the specified `id`.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- UUID (Universally Unique Identifier) for generating unique IDs

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd node-express-crud

2. Install Dependencies:
   ```bash
   npm install
