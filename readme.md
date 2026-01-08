# Real Estate Platform

A full-stack real estate application built with React, Node.js, Express, and Prisma, featuring property listings, user authentication, and interactive maps.

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Property Listings**: Create, view, and manage real estate listings
- **Interactive Maps**: Integrated Leaflet maps for property locations
- **Saved Properties**: Users can save favorite listings
- **Advanced Search & Filtering**: Filter properties by type, price, location, etc.
- **Rich Text Editor**: Detailed property descriptions with React Quill
- **Image Upload**: Cloudinary integration for property images
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Leaflet** - Interactive maps
- **Axios** - HTTP client for API requests
- **React Quill** - Rich text editor
- **Lucide React** - Icon library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Prisma** - Database ORM
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Cookie Parser** - HTTP cookie handling

## 📁 Project Structure

```
real-estate/
├── backend/
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Custom middleware
│   ├── prisma/         # Database schema
│   ├── routes/         # API routes
│   ├── generated/      # Prisma client
│   └── app.js          # Main server file
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── context/    # React context providers
│   │   ├── lib/        # Utility functions
│   │   └── routes/     # Routing configuration
│   └── vite.config.js  # Vite configuration
└── README.md
```

## 🗄 Database Schema

### User Model

- id, email, username, password, avatar
- Relationships: posts, savedPosts

### Post Model

- Basic property info: title, price, images, address, city
- Property details: bedrooms, bathrooms, type, property type
- Location: latitude, longitude
- Relationships: user, postDetail, savedPosts

### PostDetail Model

- Detailed description and amenities
- Nearby facilities: schools, bus stops, restaurants

### SavedPost Model

- User-property save relationships

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd real-estate
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL="mongodb://localhost:27017/real-estate"
JWT_SECRET="your-secret-key"
CLIENT_URL="http://localhost:5173"
PORT=3000
```

### Database Setup

1. **Generate Prisma Client**

   ```bash
   cd backend
   npx prisma generate
   ```

2. **Run Database Migrations**
   ```bash
   npx prisma db push
   ```

### Running the Application

1. **Start Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   Server will run on http://localhost:3000

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users

- `PUT /api/users/:id` - Update user profile

### Posts

- `GET /api/posts` - Get all posts (with filtering)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `POST /api/posts/save` - Save a post

## 🔧 Available Scripts

### Backend

- `npm run dev` - Start development server with nodemon

### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Components

### Frontend Components

- **Navbar** - Navigation and user menu
- **SearchBar** - Property search functionality
- **Filter** - Advanced filtering options
- **Card** - Property listing cards
- **Map** - Interactive property map
- **CloudinaryUploadWidget** - Image upload component

### Backend Controllers

- **authController** - Authentication logic
- **userController** - User management
- **postController** - Property CRUD operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ using React, Node.js, and Prisma
