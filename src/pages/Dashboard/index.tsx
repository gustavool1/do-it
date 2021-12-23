import { Box, Grid, Heading, useDisclosure } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { SearchBox } from "../../components/Form/SearchBox"
import { Header } from "../../components/Header"
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail"
import { AuthContext } from "../../providers/Auth"
import { TaskContext } from "../../providers/Tasks"


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

    const { tasks, getTasks } = useContext(TaskContext)
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
        getTasks(user.id, acessToken)
        if(tasks.length !== 0 ){
            setLoading(false)
        }
    },[])


    return(
        <>
            <ModalTaskDetail isOpen={ isTaskDetailOpen } onClose={ onTaskDetailClose } task={ actualTask }/>
            <Box>
                <Header/>
                <SearchBox/>
                <Grid w="100%" templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap={10} paddingX="8">
                    {tasks.map((task, key)=>(
                        <Card key={ key } task={ task } onClick={handleClick}/>
                    ))}
                </Grid>
            </Box>
        </>
    )
}