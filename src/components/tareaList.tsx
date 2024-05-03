import { useEffect,useState } from "react";

export default function TareaList({tasks, updateTask}){
        const [completedTasks, setCompletedTasks] = useState([]);
    
        useEffect(() => {
            const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks'));
            if (storedCompletedTasks) {
                setCompletedTasks(storedCompletedTasks);
            }
        }, []);
    
        useEffect(() => {
            localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
        }, [completedTasks]);
    
        
        const handleCheckboxChange = (taskId:number) => {
            if (completedTasks.includes(taskId)) {
                setCompletedTasks(completedTasks.filter(id => id !== taskId));
            } else {
                setCompletedTasks([...completedTasks, taskId]);
            }
        };
    
        return (
            <div className="container">
                {tasks.length === 0 ? (
                    <p>No hay tareas pendientes</p>
                ) : (
                    <ul className="list-group d-flex number">
                        {tasks.map(task =>
                            <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${completedTasks.includes(task.id) ? 'bg-success' : ''}`}>
                                <label className="form-check-label">{task.name}</label>
                                <div className="d-flex justify-content-end align-items-center px-2">
                                    <input
                                        className="form-check-input me-1 mx-2"
                                        type="checkbox"
                                        
                                        id={`checkbox-${task.id}`}
                                        onChange={() => handleCheckboxChange(task.id)}
                                        checked={completedTasks.includes(task.id)}
                                    />
                                    <button
                                        type="submit"
                                        onClick={() => updateTask(task.id)}
                                        className="btn btn-danger mx-2"
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        );
    
}

