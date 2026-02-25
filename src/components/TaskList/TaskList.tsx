import type { TaskListProps } from "../../types";
import { TaskItem } from "./TaskItem";

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }
  const taskElement = tasks.map((task) => (
    <li key={task.id} style={{ marginBottom: "10px" }}>
      <TaskItem
        task={task}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    </li>
  ));

  return (
    <>
      <ul style={{ listStyle: "none", padding: 0 }}>{taskElement}</ul>
    </>
  );
}

export { TaskList };
