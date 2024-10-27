# Glamour

The **Glamour Project** is a full-stack web application built with the **MERN** stack (MongoDB, Express, React, Node.js) and leverages **Redux** for state management. This application allows users to manage skincare products through a comprehensive interface, enabling operations such as adding, viewing, updating, and deleting products. With centralized state management through Redux, the app ensures efficient communication between frontend and backend, providing a smooth user experience.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Setup Instructions](#setup-instructions)
5. [Application Workflow](#application-workflow)
6. [API Endpoints](#api-endpoints)
7. [Redux State Management](#redux-state-management)
8. [License](#license)

---

## Technologies Used

- **Frontend**: React, Redux, Redux Thunk, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT for secure token-based authentication, bcrypt for password hashing
- **Database**: MongoDB
- **Styling**: CSS or styled-components (optional)

## Project Structure

```plaintext
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── app.js
├── frontend
│   ├── components
│   ├── screens
│   ├── actions
│   ├── reducers
│   └── store.js
├── README.md
└── package.json
