import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      const { token } = res.data;
      setToken(token);
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role === 'STUDENT') navigate('/student/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="mb-2 p-2 border w-full" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="mb-4 p-2 border w-full" onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;