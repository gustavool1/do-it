import { createContext, ReactNode, useCallback, useState } from "react";
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
    getTasks: (id:string, acessToken:string) => Promise<void>,
    deleteTask: (taskId:string, acessToken:string) =>Promise<void>, 
    updateTask: (taskId:string, userId:string, acessToken:string) => Promise<void>,
    searchTask:(title:string, acessToken:string) => Promise<void>,
    notFound:boolean,
    taskNotFound:string
}


export const TaskContext = createContext<TaskContextData>({} as TaskContextData)
 
export const TaskProvider = ({ children }:TaskProviderProps ) =>{

    const [ tasks, setTasks ] = useState<Tasks[]>([])
    const [ notFound, setNotFound ] = useState(false)
    const [ taskNotFound, setTaskNotFound ] = useState('')
    
    const getTasks = async (id:string, acessToken:string) => {
         const response = await api.get(`/tasks?userId=${id}`, {
            headers:{
                Authorization:`Bearer ${acessToken}`
            }
        })
        setTasks([...response.data]);
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
            if (task) {
              task.completed = true 
              setTasks([...filteredTasks, task])  
            }
        })
    },[tasks])

    const searchTask = useCallback(async(title:string, acessToken:string)=>{
        const response = await api.get(`/tasks?title_like=${title}`,{
            headers:{
                Authorization:`Bearer ${acessToken}`
            }
        })
        if(!response.data.length){
            setTaskNotFound(title)
            return setNotFound(true)
        }
        setNotFound(false)
        setTasks(response.data)

    },[])
    return(
        <TaskContext.Provider value={{ createTask,tasks, getTasks, deleteTask, updateTask, searchTask, notFound,taskNotFound }}>
            { children }
        </TaskContext.Provider>
    )
}