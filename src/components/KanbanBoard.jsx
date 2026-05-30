import React, { useState } from 'react';
import { DndContext, closestCorners, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useTaskContext } from '../context/TaskContext';
import Column from './Column';

export default function KanbanBoard() {
  const { tasks, addTask, moveTask } = useTaskContext();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // FIX: Configure the pointer sensor to require 5px of movement before dragging
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, 
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) moveTask(active.id, over.id);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Kanban Board</h1>
        <form onSubmit={handleAddTask} className="flex gap-2">
          <input 
            type="text" 
            value={newTaskTitle} 
            onChange={(e) => setNewTaskTitle(e.target.value)} 
            placeholder="New task title..." 
            className="border border-gray-300 p-2 rounded-md focus:ring-blue-500 outline-none w-64 bg-white" 
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
            Add Task
          </button>
        </form>
      </header>
      
      {/* FIX: Add the sensors prop to DndContext */}
      <DndContext 
        sensors={sensors} 
        collisionDetection={closestCorners} 
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
          <Column title="To Do" status="TODO" tasks={tasks.filter(t => t.status === 'TODO')} />
          <Column title="In Progress" status="IN_PROGRESS" tasks={tasks.filter(t => t.status === 'IN_PROGRESS')} />
          <Column title="Done" status="DONE" tasks={tasks.filter(t => t.status === 'DONE')} />
        </div>
      </DndContext>
    </div>
  );
}