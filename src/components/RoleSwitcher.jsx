export default function RoleSwitcher({ role, setRole }) {
  return (
    <div className="p-4 text-center">
      <button
        onClick={() => setRole(role === "student" ? "admin" : "student")}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        aria-label={`Switch to ${role === 'student' ? 'Admin' : 'Student'} view`}
      >
        Switch to {role === "student" ? "Admin" : "Student"} View
      </button>
    </div>
  );
}
