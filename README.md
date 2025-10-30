# Assignment Dashboard (React + Vite)

A clean, responsive dashboard for student-assignment management with clear role-based functionality.

- Students: view assignments, open Drive links, confirm submission via double verification, and see overdue badges.
- Admins: create assignments with Drive links, view progress bars, and see per-student submission chips with interactive status popovers.

## Features
- Role-based UI: Student and Admin views with a quick role switcher
- Double-verification submission flow with a polished confirmation modal
- Admin progress visualization with per-student status chips and tooltip details
- Overdue highlighting for pending, past-due assignments (student view)
- Empty states for no assignments (student/admin)
- Fully responsive (mobile → desktop)
- Accessible controls: aria-labels, focus-visible rings, keyboard-friendly
- Delightful animations: gentle fades and button pops
- Local persistence via `localStorage`

## Tech Stack
- React (Vite + HMR)
- Tailwind CSS
- Local storage (no backend)

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the dev server
   ```bash
   npm run dev
   ```
3. Open the app (Vite default): `http://localhost:5173`

## Available Scripts
- `npm run dev`: start the development server
- `npm run build`: production build
- `npm run preview`: preview the production build locally

## Usage
- Use the role switcher to toggle between Student and Admin views.
- Admin can click “Create Assignment” to add a new assignment with Title, Description, Due Date, and a Drive Link.
- Students can open the Drive link and then click “Mark as Submitted” → confirm via the modal.
- Admins see progress bars per assignment and clickable chips showing each student’s submission status.

## Data & Persistence
- Demo data is loaded from `src/data/sampleData.js` on first run.
- All subsequent changes are stored in `localStorage` using `src/services/storageService.js`.
- No external database is required for this demo.

## Project Structure (key folders)
- `src/components/`: UI components (dashboards, cards, modals, etc.)
- `src/data/`: sample seed data
- `src/services/`: local storage wrappers
- `src/utils/`: helpers (e.g., progress calculation)
- `src/index.css` and `src/App.css`: global styles and theme utilities

## Accessibility
- All interactive elements include `aria-label`s and keyboard focus states.
- Focus-visible rings and semantic roles are provided on key components (modal, buttons, chips).

## Responsiveness
- Layout and components adapt from small screens to desktops using Tailwind responsive classes.

## Notes
- This is a front-end demo. Replace `localStorage` with a real backend and auth for production.
- UI and behavior were improved without altering core logic contracts.

---
If you need deployment steps (e.g., Netlify, Vercel, or static hosting) or want to integrate authentication/real data, feel free to ask!
