import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

export default function TaskModal({ task, onClose }) {
  const { updateTask, deleteTask } = useTaskContext();
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState(task.description);

  const handleStatusChange = (e) => updateTask(task.id, { status: e.target.value });
  
  const saveDescription = () => {
    updateTask(task.id, { description });
    setIsEditingDesc(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold">✕</button>
        <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select value={task.status} onChange={handleStatusChange} className="w-full border-gray-300 rounded-md shadow-sm p-2 border">
            <option value="TODO">To Do</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          {isEditingDesc ? (
            <div>
              <textarea className="w-full border p-2 rounded-md min-h-[100px]" value={description} onChange={(e) => setDescription(e.target.value)} autoFocus />
              <div className="flex gap-2 mt-2">
                <button onClick={saveDescription} className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700">Save</button>
                <button onClick={() => setIsEditingDesc(false)} className="bg-gray-200 px-3 py-1 rounded cursor-pointer hover:bg-gray-300">Cancel</button>
              </div>
            </div>
          ) : (
            <div onClick={() => setIsEditingDesc(true)} className="w-full border border-transparent hover:border-gray-300 p-2 rounded-md cursor-pointer min-h-[100px] bg-gray-50">
              {task.description || <span className="text-gray-400 italic">Click to add a description...</span>}
            </div>
          )}
        </div>

        <div className="flex justify-end border-t pt-4">
          <button onClick={() => { deleteTask(task.id); onClose(); }} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600">Delete Task</button>
        </div>
      </div>
    </div>
  );
}