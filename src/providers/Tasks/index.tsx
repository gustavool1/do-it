import { createContext, ReactChild, ReactNode, useCallback, useState } from "react";
import { api } from "../../services/api";


interface Tasks{
    id:string,
    title:string,
    description:string,
    userId:string,
    completed:boolean
}

interface TaskProviderProps{
    children: ReactNode,

}

interface TaskContextData{
    tasks: Tasks[],
    createTask: (data:Omit<Tasks, "id">, acessToken:string) => Promise<void>,
    getTasks: (id:string, acessToken:string) => void,
    deleteTask: (taskId:string, acessToken:string) =>Promise<void>, 
    updateTask: (taskId:string, userId:string, acessToken:string) => Promise<void>
}


export const TaskContext = createContext<TaskContextData>({} as TaskContextData)
 
export const TaskProvider = ({ children }:TaskProviderProps ) =>{

    const [ tasks, setTasks ] = useState<Tasks[]>([])

    const getTasks = (id:string, acessToken:string) =>{
        api.get(`/tasks?userId=${id}`, {
            headers:{
                Authorization:`Bearer ${acessToken}`
            }
        })
         .then((response)=>setTasks([...response.data]))
          .catch(err => console.log(err))
    }
    const createTask = useCallback(async(data:Omit<Tasks, "id">, acessToken:string)=>{
        api.post("/tasks", data, {
            headers:{
                Authorization:`Bearer ${acessToken}`
            }})
            .then((response)=> setTasks((oldTasks)=> [...oldTasks, response.data]))
             .catch((err)=> console.log(err))
    },[])

    const deleteTask = useCallback(async(taskId:string, acessToken:string)=>{
        api.delete(`tasks/${taskId}`,{
            headers:{
                Authorization:`Bearer ${ acessToken }`
            }
        }).then(()=>{
            const filteredTasks = tasks.filter((task) => task.id !== taskId)
            setTasks(filteredTasks)
        }).catch((err)=>console.log(err))
    },[tasks])

    const updateTask = useCallback(async(taskId:string, userId:string, acessToken:string)=>{
        await api.patch(`tasks/${taskId}`,{ completed:true, userId }, {
            headers:{
                Authorization:`Bearer ${acessToken}`
            }
        }).then((response)=>{
            const filteredTasks = tasks.filter((task) => task.id !== taskId)
            const task = tasks.find(task => task.id === taskId)
            if(task){
              task.completed = true 
              setTasks([...filteredTasks, task])  
            }
        })
    },[tasks])
    return(
        <TaskContext.Provider value={{ createTask,tasks, getTasks, deleteTask, updateTask}}>
            { children }
        </TaskContext.Provider>
    )
}