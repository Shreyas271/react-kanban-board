import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import TaskModal from './TaskModal';

export default function TaskCard({ task }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: task.id, data: { task } });

  const style = { transform: CSS.Translate.toString(transform), opacity: isDragging ? 0.5 : 1 };

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes} onClick={() => !isDragging && setIsModalOpen(true)} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-3 cursor-grab active:cursor-grabbing hover:shadow-md touch-none">
        <h4 className="font-semibold text-gray-800">{task.title}</h4>
        {task.description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{task.description}</p>}
      </div>
      {isModalOpen && <TaskModal task={task} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}