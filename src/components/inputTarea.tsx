import {useState } from "react";
import TareaList from "./tareaList";

export interface Task{
    id: number;
    name: string;
}
export default function InputTarea(){

        const [tasks, setTasks] = useState<Task[]>( () => {
        const storedTasks = localStorage.getItem('listTask');
        return storedTasks ? JSON.parse(storedTasks) : []});

        const [newTask, setNewTaks] = useState<string>('')


    

    const handleTaks = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if (newTask.trim() !== '') {
            const newTaskObject: Task = {
                id: tasks.length + 1,
                name: newTask.trim(),
            }
            setTasks([...tasks, newTaskObject])
            setNewTaks('')

            localStorage.setItem('listTask' , JSON.stringify([...tasks, newTaskObject]))

        }
    }

    function updateTask(id:number){
        
        const newtasks = tasks.filter(task => task.id !== id ) 
         
          setTasks(newtasks)
          console.log(newtasks);

          localStorage.setItem('listTask', JSON.stringify(newtasks))
          
      }
    // console.log('desde el estado',tasks);
    
    return (
        <div className="container-sm">
            <form onSubmit={handleTaks}>
                <div className="d-flex p-3 border-bottom px-2" >
                    <input className="form-control px-4" type="text" value={newTask} onChange={(e) => setNewTaks(e.target.value)} placeholder="Ingrese alguna tarea" aria-label="readonly input example" />
                    <button type="submit" className="btn btn-primary mx-2 px-4">Agregar</button>
                </div>
            </form>
            <div className="p-3">
                <TareaList tasks={tasks} updateTask={updateTask}/>
                
            </div>
       </div>
       
    )
}