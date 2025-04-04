import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ConsultantDashboard from './pages/ConsultantDashboard';
import StudentDashboard from './pages/StudentDashboard';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/consultant/dashboard" element={<ConsultantDashboard />} />
</Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);