import AssignmentCard from "./AssignmentCard";

export default function AssignmentList({ assignments, currentUser, updateSubmission }) {
  if (!assignments.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-blue-700 opacity-85">
        <div className="text-5xl mb-2">📄</div>
        <div className="font-semibold text-lg mb-1">No assignments found</div>
        <div className="text-sm text-gray-500 max-w-xs">Looks like you don’t have any assignments assigned yet. Please check back later!</div>
      </div>
    );
  }
  return (
    <div className="grid gap-4">
      {assignments.map((a) => (
        <AssignmentCard
          key={a.id}
          assignment={a}
          currentUser={currentUser}
          updateSubmission={updateSubmission}
        />
      ))}
    </div>
  );
}
