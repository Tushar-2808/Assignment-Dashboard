export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-green-500 h-3 transition-all"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
