# AdmitPath Backend

This is the backend for the AdmitPath platform, built with Node.js, Express, Prisma, and PostgreSQL.

## Features

- JWT-based authentication and role management (STUDENT, CONSULTANT)
- Student profile creation with GPA, SAT, university preferences
- Match score calculator
- Secure routes protected with middleware
- Prisma ORM with PostgreSQL

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create PostgreSQL database and .env file:
```env
DATABASE_URL="postgresql://youruser:password@localhost:5432/admitpath"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

3. Run Prisma migrations:
```bash
npx prisma migrate dev --name init
```

4. Start server:
```bash
npm run dev
```

## Endpoints

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Student
- `GET /students` - Get all students
- `POST /students/preference` - Add university preference
- `POST /students/calculate` - Get match score from GPA and SAT

## License
MIT