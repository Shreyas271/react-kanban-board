import React from 'react';
import { TaskProvider } from './context/TaskContext';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <KanbanBoard />
      </div>
    </TaskProvider>
  );
}

export default App;