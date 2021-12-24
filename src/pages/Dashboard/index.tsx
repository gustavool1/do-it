import { useDisclosure } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail"
import { AuthContext } from "../../providers/Auth"
import { TaskContext } from "../../providers/Tasks"
import { FirstTask } from "./FirstTask"
import { NotFound } from "./NotFound"
import { TaskList } from "./TaskList"


interface Task{
    id:string,
    title:string,
    description:string,
    userId:string,
    completed:boolean
}

export const Dashboard = () => {
    const [ loading, setLoading ] = useState(true)
    const [actualTask, setActualTask ] = useState<Task>({} as Task)

    const { tasks, getTasks, notFound } = useContext(TaskContext)
    const { user, acessToken } = useContext(AuthContext)
    
    const { 
        isOpen: isTaskDetailOpen,
        onClose: onTaskDetailClose,
        onOpen:onTaskDetailOpen
        } = useDisclosure()

   
    const handleClick = (task:Task) =>{
        setActualTask(task)
        onTaskDetailOpen()
    }


    useEffect(()=>{
        if(tasks.length === 0){
            getTasks(user.id, acessToken)
        }
        if(tasks.length !== 0 ){
            setLoading(false)
        }

        console.log('a')
    },[tasks])


    if(notFound){
        return(
           <NotFound isTaskDetailOpen={isTaskDetailOpen}  onTaskDetailClose={onTaskDetailClose} actualTask={actualTask}/>
        )
    }
    return(
        <>
            <ModalTaskDetail isOpen={ isTaskDetailOpen } onClose={ onTaskDetailClose } task={ actualTask }/>

            {tasks.length === 0 ? 
                (
                    <FirstTask/>
                ):
                (
                    <TaskList handleClick={handleClick} loading={loading} tasks={tasks}/>
                )
            }
        </>
    )
}