import React, { useEffect, useState } from 'react';
import API from '../services/api';

const StudentDashboard: React.FC = () => {
  const [profile, setProfile] = useState<any>({});
  const [score, setScore] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get('/students');
      if (res.data.length > 0) {
        setProfile(res.data[0]);
        const scoreRes = await API.post('/students/calculate', {
          gpa: res.data[0].gpa,
          sat: res.data[0].sat
        });
        setScore(scoreRes.data.matchScore);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {profile.name}</h1>
      <p><strong>GPA:</strong> {profile.gpa}</p>
      <p><strong>SAT:</strong> {profile.sat}</p>
      <p><strong>Preferred Universities:</strong> {profile.preferences?.join(', ')}</p>
      <p><strong>Match Score:</strong> {score}</p>
    </div>
  );
};

export default StudentDashboard;