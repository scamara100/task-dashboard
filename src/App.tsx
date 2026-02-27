import "./App.css";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";
import { useState } from "react";



function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filter, setFilter] = useState<{status?: TaskStatus, priority?:  "low" | "medium" | "high"}>({})
  
  function handleDelete(taksId: string) {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taksId));
  }

  function handleStatusChange(taksId: string, newStatus: TaskStatus) {
    setTaskList((prevTasks) => 
      prevTasks.map((task) =>
        task.id === taksId ? { ...task, status: newStatus } : task,
      )
    );
  }
  const filterTasks = taskList.filter((task) => {
    if (filter.status && task.status !== filter.status) return false
    if (filter.priority && task.priority !== filter.priority) return false
    return true
  })
  

  return (
    <>
      <TaskForm onSubmit={onsubmit}/>
      <TaskFilter onFilterChange={setFilter}/>
      <TaskList
        tasks={filterTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
