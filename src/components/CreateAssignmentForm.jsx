import { useState } from "react";

export default function CreateAssignmentForm({ addAssignment }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [pop, setPop] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment(title, desc, date, link);
    setTitle("");
    setDesc("");
    setDate("");
    setLink("");
    setPop(true);
    setTimeout(() => setPop(false), 220);
  };

  return (
    <form onSubmit={handleSubmit} className="card mb-4 max-w-md w-full mx-auto animate-fadeIn" aria-label="Create new assignment form">
      <h3 className="text-xl font-bold mb-4 text-blue-700 text-center">Create New Assignment</h3>
      <div className="grid gap-3 mb-4">
        <input
          className="input focus-visible:ring-2 focus-visible:ring-blue-400"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Assignment title"
        />
        <textarea
          className="input focus-visible:ring-2 focus-visible:ring-blue-400"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          aria-label="Assignment description"
        />
        <input
          type="date"
          className="input focus-visible:ring-2 focus-visible:ring-blue-400"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Due date"
        />
        <input
          type="url"
          className="input focus-visible:ring-2 focus-visible:ring-blue-400"
          placeholder="Drive Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          aria-label="Assignment Drive link"
        />
      </div>
      <button className={`btn btn-primary w-full mt-2 focus-visible:ring-2 focus-visible:ring-blue-400 ${pop ? 'animate-pop' : ''}`} aria-label="Add assignment">
        Add Assignment
      </button>
    </form>
  );
}
