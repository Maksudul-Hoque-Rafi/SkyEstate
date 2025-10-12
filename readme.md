# Full Stack Web Application

This is a full stack web application with a Node.js/Express backend and a React frontend. The backend uses Prisma as an ORM and supports authentication, user management, and post management.

## Project Structure

```
backend/
  app.js
  package.json
  controllers/
  generated/
  lib/
  middleware/
  prisma/
  routes/
frontend/
  index.html
  package.json
  public/
  src/
```

## Backend

- **Framework:** Node.js, Express
- **ORM:** Prisma
- **Authentication:** JWT
- **Key Directories:**
  - `controllers/` – Route handlers for authentication, users, posts, and tests
  - `middleware/` – Custom middleware (e.g., JWT verification)
  - `routes/` – Express route definitions
  - `prisma/` – Prisma schema and migrations
  - `lib/` – Prisma client setup

### Setup

1. Install dependencies:

   ```sh
   cd backend
   npm install
   ```

2. Configure environment variables in `.env`.

3. Run database migrations:

   ```sh
   npx prisma migrate dev
   ```

4. Start the backend server:

   ```sh
   npm run dev
   ```

## Frontend

- **Framework:** React (Vite)
- **Key Directories:**
  - `src/components/` – React components
  - `src/context/` – React context providers
  - `src/Layout/` – Layout components
  - `src/lib/` – Utility libraries

### Setup

1. Install dependencies:

   ```sh
   cd frontend
   npm install
   ```

2. Start the frontend development server:

   ```sh
   npm run dev
   ```

3. The app will be available at `http://localhost:5173` by default.

## Development

- The backend runs on its own server (default: `http://localhost:3000`).
- The frontend communicates with the backend via API calls.
- Update the frontend API URLs if you change the backend port.

## Scripts

- **Backend**

  - `npm run dev` – Start the backend server
  - `npx prisma migrate dev` – Run database migrations

- **Frontend**
  - `npm run dev` – Start the frontend dev server
  - `npm run build` – Build the frontend for production
