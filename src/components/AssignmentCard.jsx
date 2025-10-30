import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function AssignmentCard({ assignment, currentUser, updateSubmission }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const hasSubmitted = assignment.submissions[currentUser];
  // Determine if overdue: dueDate < today and not submitted
  const today = new Date();
  const due = new Date(assignment.dueDate);
  const isOverdue = !hasSubmitted && due < today.setHours(0,0,0,0);

  return (
    <div className={`card flex flex-col gap-1 text-left w-full max-w-md mx-auto md:mx-0 ${isOverdue ? 'ring-2 ring-red-300' : ''} animate-fadeIn`}>
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-lg md:text-xl text-blue-700 mb-1 flex-1">{assignment.title}</h3>
        {isOverdue && (
          <span className="ml-auto bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">Overdue</span>
        )}
      </div>
      <p className="text-sm md:text-base text-gray-600 mb-1">{assignment.description}</p>
      <p className={`text-xs md:text-sm mb-2 ${isOverdue ? 'text-red-500 font-bold' : 'text-gray-500'}`}>Due: {assignment.dueDate}</p>
      <a
        href={assignment.driveLink}
        target="_blank"
        rel="noreferrer"
        className="btn btn-secondary text-xs md:text-sm mb-3 w-fit cursor-pointer hover:underline hover:bg-blue-50 transition focus-visible:ring-2 focus-visible:ring-blue-400"
        aria-label={"Open submission link for " + assignment.title}
      >
        Open Submission Link
      </a>
      <button
        disabled={hasSubmitted}
        onClick={() => setConfirmOpen(true)}
        className={`btn btn-primary ${hasSubmitted ? "bg-green-500 hover:bg-green-500 cursor-not-allowed opacity-70" : ""} w-full md:w-auto focus-visible:ring-2 focus-visible:ring-blue-500 ${confirmOpen ? 'animate-pop' : ''}`}
        aria-label={hasSubmitted ? "Assignment already marked as submitted" : "Mark this assignment as submitted"}
      >
        {hasSubmitted ? "Submitted" : "Mark as Submitted"}
      </button>
      {confirmOpen && (
        <ConfirmModal
          onClose={() => setConfirmOpen(false)}
          onConfirm={() => {
            updateSubmission(assignment.id, currentUser);
            setConfirmOpen(false);
          }}
        />
      )}
    </div>
  );
}
