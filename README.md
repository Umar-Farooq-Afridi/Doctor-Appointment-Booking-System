# Doctor Appointment Booking Web App (MERN Stack)

## About the Project

A full-stack Doctor appointment platform built with MERN stack, featuring user/patient facing UI to book an appointment, dedicated admin panel and secure REST API backend. User can browse doctor on specility base, manage profile and book/cancel appointment, while admins can add new doctor and change availability of doctors all from a separate admin dashboard, also doctor can manage profile and accept/reject appointment request and change availability from a separate admin dashboard.

## Features

*User/Patient (Frontend)*
- User registration and login (JWT-based authentication)
- Browse and book an appointment on the base of speciality
- Manage profile and book or cancel appointment

*Admin Panel*
- Separate admin authentication, isolated from customer accounts
- Add new dcotors with single image uploads (1 image per doctor)
- Change availability of doctors
- View all doctors, patients and all appointments details

*Backend*
- RESTful API built with Express 5
- MongoDB database via Mongoose
- Image uploads handled with Multer and stored on Cloudinary
- Password hashing with bcrypt

## Tech Stack 

| Layer | Technologies |
|---|---|
| Frontend (Store) | React 19, Vite, Tailwind CSS, React Router, Axios, React Toastify |
| Admin Panel | React 19, Vite, Tailwind CSS, React Router, Axios, React Toastify |
| Backend | Node.js, Express 5, MongoDB, Mongoose |
| Auth | JSON Web Tokens (JWT), bcrypt |
| File Storage | Multer, Cloudinary |

## Project Structure

```bash
Doctor-Appointment-Booking-System/
├── frontend/     # Customer-facing storefront (React + Vite)
├── admin/        # Admin dashboard (React + Vite)
└── backend/      # REST API (Express + MongoDB)
```

## Getting Started

### Prerequisites
- Node.js installed
- A MongoDB database (local or Atlas)
- A Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/Umar-Farooq-Afridi/Doctor-Appointment-Booking-System.git
cd Doctor-Appointment-Booking-System
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a .env file in backend/ with:

```bash
DABS_MONGO_DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
```


Run the backend:
```bash
npm run server
```

### 3. Frontend setup (store)
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin panel setup
```bash
cd ../admin
npm install
npm run dev
```

## API Endpoints

| Route | Method | Description | Auth |
|---|---|---|---|
| /api/user/register | POST | Register a new user | Public |
| /api/user/login | POST | Login user | Public |
| /api/user/update-profile | POST | Update user profile (with image) | User |
| /api/user/book-appointment | POST | Book a doctor appointment | User |
| /api/user/cancel-appointment | POST | Cancel a booked appointment | User |
| /api/user/get-profile | GET | Get logged-in user's profile | User |
| /api/user/appointments | GET | Get logged-in user's appointments | User |
| /api/doctor/login | POST | Doctor login | Public |
| /api/doctor/list | GET | List all doctors | Public |
| /api/doctor/complete-appointment | POST | Mark appointment as completed | Doctor |
| /api/doctor/cancel-appointment | POST | Cancel an appointment | Doctor |
| /api/doctor/update-profile | POST | Update doctor profile | Doctor |
| /api/doctor/appointments | GET | Get doctor's appointments | Doctor |
| /api/doctor/dashboard | GET | Get doctor dashboard stats | Doctor |
| /api/doctor/profile | GET | Get doctor's own profile | Doctor |
| /api/admin/login | POST | Admin login | Public |
| /api/admin/add-doctor | POST | Add a new doctor (with image) | Admin |
| /api/admin/all-doctors | POST | Get all doctors | Admin |
| /api/admin/change-availability | POST | Toggle a doctor's availability | Admin |
| /api/admin/cancel-appointment | POST | Cancel an appointment | Admin |
| /api/admin/appointments | GET | Get all appointments | Admin |
| /api/admin/dashboard | GET | Get admin dashboard stats | Admin |

## Author

### *Umar Farooq: Software Engineer | Web Developer | MERN Stack Developer*
- GitHub: [@Umar-Farooq-Afridi](https://github.com/Umar-Farooq-Afridi)
- Portfolio: [umar-farooq-portfolio.vercel.app](https://umar-farooq-portfolio.vercel.app)