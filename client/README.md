# 🎓 AdmitPath Frontend

This is the React + TypeScript frontend for the AdmitPath platform. It enables students and consultants to manage university admissions workflows, profiles, and recommendations.

## ✨ Features

### 🔐 Authentication
- JWT-based login
- Role-based dashboard (Student, Consultant)

### 👨‍🎓 Student Dashboard
- View GPA, SAT, university preferences
- Calculate match score using academic profile

### 🧑‍💼 Consultant Dashboard
- View list of students
- View academic data and preferences
- Add university preferences
- Assign roadmap templates (UCAS UK, Common App US)
- Create and assign custom tasks

## 🚀 Getting Started

```bash
cd client
npm install
npm run dev
```

Make sure the backend is running on `http://localhost:5000`.

## 📁 Project Structure

```
client/
├── pages/
│   ├── Login.tsx
│   ├── StudentDashboard.tsx
│   └── ConsultantDashboard.tsx
├── services/
│   └── api.ts
├── context/
│   └── AuthContext.tsx
├── main.tsx
├── index.html
```

## 📌 Requirements
- Node.js v18+
- Backend running on port 5000

## 🧠 Roadmap (Next)
- Khan Academy API integration
- Task progress tracking
- Email notifications
- Admin analytics dashboard

## 📄 License
MIT