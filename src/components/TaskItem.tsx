import {Task} from "../types.ts";
import {FC} from "react";

type Props = {
    task: Task;
    onToggleComplete: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

const TaskItem: FC<Props> = ({ task, onToggleComplete, onDeleteTask })=>{
    return (
        <li>
            <div style={{display: 'flex',  alignItems: 'center'}}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                </span>
                <button onClick={() => onDeleteTask(task.id)}>Șterge</button>
            </div>
        </li>
    );
}

export default TaskItem;
