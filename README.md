# 🍕 Food Del — Full-Stack Food Delivery Platform

A complete food ordering and delivery web application built with the MERN stack. Customers can browse a menu, add items to cart, pay securely via Stripe, and track their order status. Restaurant admins manage the menu and fulfil orders through a separate admin panel.

**Live Demo**
- Customer App → https://food-del-frontend-8hq6.onrender.com/
- Admin Panel → https://food-del-admin-qw4r.onrender.com/

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)

---

## Overview

Food Del is a production-ready food delivery platform with three independently deployed applications sharing one backend API. Customers browse a categorized menu, manage a persistent cart, and complete purchases through Stripe's hosted checkout. Orders are saved to MongoDB only after payment is confirmed. Admins log into a separate panel to manage the menu and update order statuses in real time.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend (Customer) | React.js, Context API, Axios |
| Frontend (Admin) | React.js, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Payments | Stripe |
| Image Uploads | Multer |
| Authentication | JWT (JSON Web Token) |
| Deployment | Render |

---

## Features

### Customer Storefront
- Browse full menu organized by category (Burgers, Salads, Pasta, Desserts, etc.)
- Filter items by category with a single click
- Add, update quantity, and remove items from cart — state persists across pages
- Register and log in with JWT-based authentication
- Enter delivery address and complete purchase via Stripe hosted checkout
- Order saved to database only on confirmed payment — no orphaned records
- View full order history with real-time status updates

### Admin Panel
- Separate login with admin-only authentication
- Add food items — name, description, price, category, and image upload
- View all orders across all customers with full details
- Update order status: Food Processing → Out for Delivery → Delivered
- Status changes reflect immediately in the customer's order history

### System
- Stripe secret key never exposed to the client — payment intent created server-side only
- Cart state cleared only on confirmed payment success
- JWT middleware protects all user-specific and admin-specific routes
- Role-based access control — customer tokens cannot access admin endpoints
- Multer handles multipart image uploads; files served statically from the backend

---

## Project Structure
food-del/
│
├── backend/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # Route logic (food, user, cart, order)
│   ├── middleware/       # JWT auth middleware
│   ├── models/          # Mongoose schemas (User, Food, Order)
│   ├── routes/          # Express route definitions
│   ├── uploads/         # Stored food item images
│   └── server.js        # Entry point, Express app setup
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/  # Navbar, Footer, FoodItem, Cart, etc.
│       ├── context/     # StoreContext — cart and auth state
│       ├── pages/       # Home, Cart, PlaceOrder, MyOrders, Verify
│       └── App.jsx
│
└── admin/
├── public/
└── src/
├── components/  # Navbar, Sidebar
├── pages/       # Add, List, Orders
└── App.jsx

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Stripe account (test keys are fine for local dev)

### 1. Clone the repo

```bash
git clone https://github.com/Bhavya1307/food-del.git
cd food-del
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Admin
cd ../admin
npm install
```

### 3. Set up environment variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

In `frontend/src/context/StoreContext.jsx` and `admin/src/`, update the backend URL constant to:

```js
const url = "http://localhost:4000";
```

### 4. Run the apps

Open three separate terminals:

```bash
# Terminal 1 — Backend (runs on port 4000)
cd backend
npm run server

# Terminal 2 — Customer Frontend (runs on port 5173)
cd frontend
npm run dev

# Terminal 3 — Admin Panel (runs on port 5174)
cd admin
npm run dev
```

Open:
- Customer app → http://localhost:5173
- Admin panel → http://localhost:5174

### 5. Test Stripe payments locally

Use Stripe's test card:
Card number:  4242 4242 4242 4242
Expiry:       Any future date
CVC:          Any 3 digits

---

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret key (from Stripe dashboard) |

> The Stripe **publishable key** goes in the frontend. The **secret key** must only ever be on the backend.

---

## Deployment

All three services are deployed on **Render** as separate web services.

| Service | Type | Root Directory |
|---|---|---|
| Backend API | Web Service (Node) | `backend/` |
| Customer Frontend | Static Site | `frontend/` |
| Admin Panel | Static Site | `admin/` |

**Steps:**
1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. For the backend: set Root Directory to `backend`, Build Command to `npm install`, Start Command to `node server.js`
5. Add environment variables in the Render dashboard (same as `.env`)
6. For frontend and admin: set Root Directory to `frontend` or `admin`, Build Command to `npm run build`, Publish Directory to `dist`
7. Update the backend URL constant in frontend and admin from `localhost:4000` to your Render backend URL before deploying

---

## Screenshots

> Add screenshots of the customer storefront, cart, checkout, and admin panel here.

---

## Future Improvements

- **Real-time order tracking** — WebSocket or Server-Sent Events so status updates push to the customer instantly without polling
- **Email notifications** — Order confirmation and delivery notification emails via Nodemailer or Resend
- **Search and filtering** — Search by food name, filter by price range or dietary tags
- **User reviews** — Allow customers to rate and review items after delivery
- **Analytics dashboard** — Sales charts, most ordered items, and revenue tracking in the admin panel
- **Mobile app** — React Native version sharing the same backend API

---

## Author

**Bhavya Patel**
- Portfolio → https://bhavya-patel.framer.website/projects
- GitHub → https://github.com/Bhavya1307

---

## License

MIT — free to use as a reference or starting point.
