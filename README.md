# 🎓 AdmitPath: AI-Powered Admissions Strategy Platform

AdmitPath is a full-stack web platform designed to streamline, manage, and personalize the university admissions process for international applicants. Built for educational consultants and students, AdmitPath offers workflow automation, progress tracking, and AI-enhanced guidance—all in one place.

---

## 🌐 Live Demo 
> 🚧 Deploy in progress  
> https://admit-path.vercel.app/

---

## 📌 Key Features

### 👤 User Roles
- **Students**: Access personalized roadmaps, upload documents, track academic & application progress.
- **Consultants**: Manage multiple students, assign workflows (e.g., UCAS, Common App), track success metrics.

### ⚙️ Platform Features
- Secure **Authentication & Authorization** (JWT, role-based)
- Application **Workflow Engine** with templates for:
  - 🇺🇸 Common App (US)
  - 🇬🇧 UCAS (UK)
- **Document Management** (submission tracking, deadlines)
- **Academic Tracker** (IGCSE, SAT, GPA inputs, visualizations)
- **Scholarship Dashboard** (track deadlines, matches, decisions)
- Optional: **AI Essay Review** using OpenAI's GPT

---

## 🧰 Tech Stack

| Layer      | Tech                                         |
|------------|----------------------------------------------|
| Frontend   | React, TypeScript, TailwindCSS, Axios        |
| Backend    | Node.js, Express, TypeScript, Prisma ORM     |
| Database   | PostgreSQL                                   |
| Auth       | JWT, bcrypt, Role-based access control       |
| DevOps     | GitHub Actions, Vercel (frontend), Render (backend) |
| AI (opt.)  | OpenAI GPT-4 API (essay review module)       |

---

## 🏗️ Project Structure

AdmitPath/ ├── client/ # React frontend (TS + Tailwind) ├── server/ # Node.js backend (Express + Prisma) ├── prisma/ # Prisma schema & DB seed ├── .env # Environment variables ├── README.md # Project overview └── package.json
###2. Backend Setup
bash

cd server
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run dev  # or nodemon src/index.ts
Create .env file in /server/:

env

DATABASE_URL="postgresql://youruser:password@localhost:5432/admitpath"
JWT_SECRET="your_jwt_secret"
PORT=5000
###3. Frontend Setup
bash

cd ../client
npm install
npm start
##🧪 Demo Credentials (Seeded)
bash
# Consultant
email: consultant1@example.com
pass:  pass123

# Student
email: student1@example.com
pass:  pass123
