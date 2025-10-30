import { useState } from "react";
import CreateAssignmentForm from "./CreateAssignmentForm";
import ProgressBar from "./ProgressBar";
import { calculateProgress } from "../utils/helpers";
import { sampleStudents } from "../data/sampleData";

export default function AdminDashboard({ assignments, addAssignment }) {
  const [showForm, setShowForm] = useState(false);
  const [activeStudent, setActiveStudent] = useState(null);

  return (
    <div className="px-2 sm:px-4 md:px-8 py-4 max-w-3xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-3">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Assignments Created</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={showForm ? "Close assignment form" : "Open assignment creation form"}
        >
          {showForm ? "Close" : "Create Assignment"}
        </button>
      </div>

      {showForm && <CreateAssignmentForm addAssignment={addAssignment} />}

      {!assignments.length ? (
        <div className="flex flex-col items-center justify-center py-14 text-center text-gray-700 opacity-90">
          <div className="text-5xl mb-2">📝</div>
          <div className="font-semibold text-lg mb-1">No assignments created yet</div>
          <div className="text-sm text-gray-500 max-w-xs mb-2">Start by creating a new assignment for your students. Click "Create Assignment" above!</div>
        </div>
      ) : (
        <div className="grid gap-4 md:gap-6 mt-4 grid-cols-1 md:grid-cols-2" aria-label="Assignment list for admin">
          {assignments.map((a) => (
            <div key={a.id} className="card h-full flex flex-col justify-between">
              <h3 className="font-semibold text-blue-700 text-lg md:text-xl">{a.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{a.description}</p>
              <p className="text-xs text-gray-400 mb-2">Due: {a.dueDate}</p>
              <ProgressBar value={calculateProgress(a.submissions)} />
              <div className="flex flex-wrap gap-2 mt-3 relative">
                {sampleStudents.map((student) => (
                  <button
                    key={student}
                    type="button"
                    onClick={() => setActiveStudent(activeStudent === `${a.id}:${student}` ? null : `${a.id}:${student}`)}
                    onBlur={() => setActiveStudent(null)}
                    className={`px-3 py-1 rounded-full text-xs font-medium shadow border transition focus-visible:ring-2 focus-visible:ring-blue-400 outline-none relative ${
                      a.submissions[student]
                        ? "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                        : "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200"
                    }`}
                    aria-label={`${student}: ${a.submissions[student] ? 'Submitted' : 'Not submitted'} (click for details)`}
                    tabIndex={0}
                  >
                    {student} {a.submissions[student] ? "✓" : "•"}
                    {activeStudent === `${a.id}:${student}` && (
                      <span className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-xl p-2 text-xs animate-fadeIn z-10 text-blue-900 w-max min-w-[130px]">
                        <strong>{student}</strong>
                        <br />
                        Status: {a.submissions[student] ? <span className="text-green-700 font-semibold">Submitted</span> : <span className="text-red-600 font-semibold">Not submitted</span>}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
