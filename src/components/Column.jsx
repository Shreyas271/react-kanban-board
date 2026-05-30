import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';

export default function Column({ title, status, tasks }) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div className="flex flex-col bg-gray-100 rounded-xl w-full md:w-80 flex-shrink-0">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-gray-700">{title} ({tasks.length})</h2>
      </div>
      <div ref={setNodeRef} className={`flex-1 p-4 min-h-[500px] transition-colors ${isOver ? 'bg-blue-50' : ''}`}>
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
}