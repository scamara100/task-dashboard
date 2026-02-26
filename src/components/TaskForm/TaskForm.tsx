import React, { useState } from "react"
import type { TaskFormProps } from "../../types"

export function TaskForm({onSubmit, initialData}: TaskFormProps){
    const [formData, setFormData] = useState<TaskFormProps>(initialData || { 
        title: "",
        decription: "",
        status: "Pending",
        priority: "Medium",
        dueDate: ""})
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log("Submitting", {title, description})
   }
  
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={formData.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={formData.decription} onChange={handleChange}/>
            </div>
        </form>
        </>
    )
}}