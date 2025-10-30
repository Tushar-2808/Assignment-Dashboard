export default function Navbar({ role, currentUser }) {
  return (
    <nav className="bg-blue-500 bg-opacity-90 shadow-md text-white p-4 flex justify-between items-center rounded-xl mb-6" aria-label="Main Navigation Bar">
      <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-sm">Assignment Dashboard</h1>
      <div className="flex gap-2 items-center">
        <span
          tabIndex={0}
          aria-label={`Current role: ${role === 'student' ? 'Student' : 'Admin'}`}
          className="bg-white bg-opacity-90 text-blue-700 px-4 py-1.5 rounded-lg text-sm font-medium shadow-md border border-blue-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          Role: {role === "student" ? "Student" : "Admin"}
        </span>
        <span
          tabIndex={0}
          aria-label={`Logged in as user: ${currentUser}`}
          className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg text-xs font-semibold shadow border border-blue-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          User: {currentUser}
        </span>
      </div>
    </nav>
  );
}
