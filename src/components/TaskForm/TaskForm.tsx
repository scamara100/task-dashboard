import React, { useState } from "react";
import type { TaskFormData, TaskFormProps } from "../../types";

export function TaskForm({ onSubmit, initialData }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>(
    initialData || {
    title: "",
    description: "",
    status: "pending",
    priority: "low",
    dueDate: ""
    },
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
            <select value={formData.status} onChange={(e) => handleChange(e)}>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
        </div>
        <div>
            <select value={formData.priority} onChange={(e) => handleChange(e)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
        </div>
        <div>
            <input type="date" value={formData.dueDate} onChange={handleChange} />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
