import React, { useEffect, useState } from 'react';
import API from '../services/api';

const ConsultantDashboard: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [university, setUniversity] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [workflow, setWorkflow] = useState<string>("");

  const roadmapTemplates: Record<string, string[]> = {
    "UCAS UK": ["Write Personal Statement", "Choose 5 Universities", "Submit UCAS Form"],
    "Common App US": ["Write Common App Essay", "Request Recs", "Send Transcripts", "Submit Application"]
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await API.get('/students');
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  const handleAddPreference = async () => {
    if (!selectedStudent || !university) return;
    await API.post('/students/preference', {
      studentId: selectedStudent.id,
      university,
    });
    alert("University preference added.");
    setUniversity("");
  };

  const handleAssignWorkflow = () => {
    if (!workflow || !selectedStudent) return;
    alert(`Assigned '${workflow}' to ${selectedStudent.name}`);
  };

  const handleAddTask = () => {
    if (!task || !selectedStudent) return;
    alert(`Task '${task}' assigned to ${selectedStudent.name}`);
    setTask("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Consultant Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Students</h2>
          <ul className="border rounded p-4">
            {students.map(student => (
              <li
                key={student.id}
                className={`p-2 cursor-pointer ${selectedStudent?.id === student.id ? 'bg-blue-100' : ''}`}
                onClick={() => setSelectedStudent(student)}
              >
                {student.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedStudent && (
            <div className="p-4 border rounded space-y-4">
              <h3 className="text-lg font-semibold">{selectedStudent.name}'s Profile</h3>
              <p><strong>GPA:</strong> {selectedStudent.gpa}</p>
              <p><strong>SAT:</strong> {selectedStudent.sat}</p>
              <p><strong>Preferences:</strong> {selectedStudent.preferences.join(', ')}</p>

              <div>
                <h4 className="font-semibold mb-1">Add University Preference</h4>
                <input
                  type="text"
                  placeholder="University Name"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="border p-2 w-full mb-2"
                />
                <button
                  onClick={handleAddPreference}
                  className="bg-blue-600 text-white px-4 py-1"
                >
                  Add Preference
                </button>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Assign Workflow Template</h4>
                <select className="border p-2 w-full mb-2" onChange={(e) => setWorkflow(e.target.value)} defaultValue="">
                  <option value="" disabled>Select Template</option>
                  {Object.keys(roadmapTemplates).map(key => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
                <button
                  onClick={handleAssignWorkflow}
                  className="bg-green-600 text-white px-4 py-1"
                >
                  Assign Workflow
                </button>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Create Custom Task</h4>
                <input
                  type="text"
                  placeholder="Task Title"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="border p-2 w-full mb-2"
                />
                <button
                  onClick={handleAddTask}
                  className="bg-purple-600 text-white px-4 py-1"
                >
                  Add Task
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultantDashboard;