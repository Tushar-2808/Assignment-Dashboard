import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import RoleSwitcher from "./components/RoleSwitcher";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";
import { getData, saveData } from "./services/storageService";
import { sampleAssignments } from "./data/sampleData";

export default function App() {
  const [role, setRole] = useState("student");
  const [currentUser, setCurrentUser] = useState("student1");
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const stored = getData("assignments", sampleAssignments);
    setAssignments(stored);
  }, []);

  useEffect(() => {
    saveData("assignments", assignments);
  }, [assignments]);

  const updateSubmission = (id, user) => {
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, submissions: { ...a.submissions, [user]: true } }
          : a
      )
    );
  };

  const addAssignment = (title, description, dueDate, driveLink) => {
    const newAssignment = {
      id: Date.now(),
      title,
      description,
      dueDate,
      driveLink,
      createdBy: "prof.john",
      submissions: { student1: false, student2: false }
    };
    setAssignments((prev) => [...prev, newAssignment]);
  };

  return (
    <div>
      <Navbar role={role} currentUser={currentUser} />
      <RoleSwitcher role={role} setRole={setRole} />
      {role === "student" ? (
        <StudentDashboard
          assignments={assignments}
          currentUser={currentUser}
          updateSubmission={updateSubmission}
        />
      ) : (
        <AdminDashboard assignments={assignments} addAssignment={addAssignment} />
      )}
    </div>
  );
}
