# 📋 React Kanban Board

A fully functional, interactive Kanban board built with React and Tailwind CSS. This application allows users to manage their workflow by creating tasks, editing descriptions, and dragging cards between different status columns.

## 🚀 Live Demo
**[Click here to view the live application](https://kanbanboa.netlify.app/)**

## ✨ Features
* **Drag and Drop Interface:** Built with `@dnd-kit/core` for smooth, collision-detected dragging between columns.
* **Persistent State:** Utilizes browser `localStorage` to save your tasks, ensuring you never lose your progress when the page refreshes.
* **Global State Management:** Uses React's Context API to seamlessly pass task data and status updates across the application without prop drilling.
* **Inline Editing:** Click on any task card to open a modal where you can edit the task description and seamlessly update its status.
* **Responsive Design:** Styled with Tailwind CSS to provide a clean, modern, and responsive user interface.

## 🛠️ Tech Stack
* **Frontend Framework:** React JS (via Vite)
* **Styling:** Tailwind CSS 
* **State Management:** Context API & React Hooks
* **Drag & Drop:** `dnd-kit`

## 💻 Local Installation & Setup

If you want to run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Shreyas271/react-kanban-board.git](https://github.com/Shreyas271/react-kanban-board.git)
