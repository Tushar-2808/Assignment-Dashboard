export default function ConfirmModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity animate-fadeIn" aria-modal="true" role="dialog" aria-label="Confirm assignment submission">
      <div className="bg-white rounded-2xl p-7 pt-6 pb-8 shadow-xl text-center w-full max-w-xs md:max-w-sm relative border border-yellow-400">
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center justify-center rounded-full bg-yellow-100 h-10 w-10">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 17h.01M21 12c0 4.97-4.03 9-9 9-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9z"/></svg>
          </span>
        </div>
        <h3 className="font-bold text-lg text-yellow-700 mb-2">Are you absolutely sure?</h3>
        <p className="text-sm text-gray-700 mb-4">By confirming, you state that you have submitted your assignment. <span className="text-red-600 font-semibold">This action cannot be undone.</span></p>
        <div className="flex flex-col gap-2 sm:flex-row justify-center gap-x-5 mt-4">
          <button
            onClick={onConfirm}
            className="btn btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-300 px-4 py-2 w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-green-400"
            aria-label="Confirm submission"
          >
            Yes, I have submitted
          </button>
          <button
            onClick={onClose}
            className="btn btn-secondary px-4 py-2 w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-blue-300"
            aria-label="Cancel submission confirmation"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
