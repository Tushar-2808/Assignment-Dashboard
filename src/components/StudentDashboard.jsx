import AssignmentList from "./AssignmentList";

export default function StudentDashboard({ assignments, currentUser, updateSubmission }) {
  return (
    <div className="px-2 sm:px-6 md:px-12 py-4 w-full max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">Your Assignments</h2>
      <AssignmentList
        assignments={assignments}
        currentUser={currentUser}
        updateSubmission={updateSubmission}
      />
    </div>
  );
}
