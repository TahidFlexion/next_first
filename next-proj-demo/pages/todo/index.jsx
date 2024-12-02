"use client";
import { useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingTask(tasks[index]);
  };

  const saveTask = () => {
    if (editingTask.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? editingTask : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditingTask("");
    }
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditingTask("");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="w-1/2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
          >
            {editingIndex === index ? (
              <div className="flex w-full items-center">
                <input
                  className="border p-2 rounded w-full mr-2"
                  type="text"
                  value={editingTask}
                  onChange={(e) => setEditingTask(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={saveTask}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-black px-2 py-1 rounded"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <span>{task}</span>
                <div className="flex">
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => startEditing(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
