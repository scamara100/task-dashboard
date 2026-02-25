import { useState } from "react";
import type {TaskStatus, TaskFilterProps} from "../../types";

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

export default function TaskFilter({onFilterChange}: TaskFilterProps){
    const [status, setStatus] = useState<TaskStatus>()
    const [priority, setPriority] = useState<"low" | "medium" | "high">()

    function handleStatusChange(value: string){
        const typedStatus = value as TaskStatus;
        setStatus(typedStatus)

        onFilterChange({status: typedStatus, priority: priority})
    }

    function handlePriorityChange(value: string){
        const typedpriority = value as "low" | "medium" | "high";
        setPriority(typedpriority)

        onFilterChange({status: status, priority: typedpriority})
    
    }

    return(
        <>
        <div>
            <h3>Filter Tasks</h3>
            <div>
                <p>Status</p>
                <select value={status} onChange={(e) => handleStatusChange(e.target.value)}>
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <p>Priority</p>
                <select value={priority} onChange={(e) => handlePriorityChange(e.target.value)}>
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
        </>
    )
}