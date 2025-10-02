# Expense Tracker

A full-stack Expense Tracker web application built with React (frontend) and Express/MongoDB (backend). This project allows users to manage their expenses, view reports, and maintain budget lists with authentication and modern UI.

---

## Features

- **User Authentication**: Sign up, login, logout, and profile management.
- **Expense Management**: Add, view, and delete expenses. Expenses are categorized and can be either Income or Expense.
- **Budget Lists**: Create, update, and delete custom budget lists/tasks.
- **Dashboard & Reports**: Visualize income vs. expenses, recent transactions, and summary charts.
- **Responsive UI**: Built with React, TailwindCSS, and Lucide icons for a modern look.
- **API Integration**: Frontend communicates with backend via RESTful APIs.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cloudinary (for profile images)
- dotenv, cookie-parser, cors

### Frontend
- React
- React Router
- Zustand (state management)
- Axios
- TailwindCSS
- Lucide React Icons
- Recharts (data visualization)
- React Hot Toast (notifications)

---

## Folder Structure

```
Expense Tracker/
├── backend/
│   ├── src/
│   │   ├── controllers/        # API controllers (auth, expense)
│   │   ├── libs/               # DB connection, cloudinary, utils
│   │   ├── middleware/         # Auth middleware
│   │   ├── models/             # Mongoose models (User, Expense, BudgetList)
│   │   ├── routes/             # Express routes
│   │   └── index.js            # App entry point
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── page/               # Page-level components
│   │   ├── store/              # Zustand stores
│   │   ├── libs/               # Axios instance
│   │   └── App.jsx             # Main app
│   ├── public/
│   ├── package.json
│   └── README.md
```

---

## How to Run

### 1. Backend Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file with your MongoDB URI and JWT secret:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
3. Start the backend server:
   ```bash
   npm run dev
   # or
   npm start
   ```
   The backend runs on `http://localhost:5001`.

### 2. Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   # or
   pnpm install
   ```
2. Start the frontend dev server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   The frontend runs on `http://localhost:5173`.

---

## API Endpoints

### Auth
- `POST /api/auth/signup` — Register new user
- `POST /api/auth/login` — Login
- `POST /api/auth/logout` — Logout
- `GET /api/auth/check` — Check authentication
- `PUT /api/auth/update-profile` — Update profile

### Expenses
- `GET /api/expenses/get/:id` — Get expenses for user
- `POST /api/expenses/add/:id` — Add expense
- `DELETE /api/expenses/title-delete:id` — Delete expense

### Budget Lists
- `GET /api/expenses/title-fetch` — Fetch budget lists
- `POST /api/expenses/title` — Add budget list
- `PUT /api/expenses/title-update/:id` — Update budget list
- `DELETE /api/expenses/title-delete/:id` — Delete budget list

---

## Assignment Notes
- All code is modular and follows best practices for separation of concerns.
- State management is handled via Zustand in the frontend.
- Backend uses Mongoose for schema validation and Express for routing.
- Authentication is JWT-based and protected via middleware.
- UI is fully responsive and user-friendly.

---

## License
This project is for educational purposes. You may use, modify, and distribute as needed for your assignment.

---

## Author
Tushar (tushar981146)
