import { Box, Center, Heading, Text, Skeleton, Stack } from "@chakra-ui/react"
import { useContext } from "react"
import { SearchBox } from "../../components/Form/SearchBox"
import { Header } from "../../components/Header"
import { ModalTaskDetail } from "../../components/Modal/ModalTaskDetail"
import { TaskContext } from "../../providers/Tasks"


interface Task{
    id:string,
    title:string,
    description:string,
    userId:string,
    completed:boolean
}

interface NotFoundProps{
    isTaskDetailOpen:boolean,
    onTaskDetailClose:()=>void,
    actualTask: Task
}
export const NotFound = ({ isTaskDetailOpen, onTaskDetailClose, actualTask }:NotFoundProps) =>{

    const { taskNotFound } = useContext(TaskContext)
    return(
        <>
        <ModalTaskDetail isOpen={ isTaskDetailOpen } onClose={ onTaskDetailClose } task={ actualTask }/>
       <Box>
           <Header/>
           <SearchBox/>
           <Center mt="4" textAlign="center" display="flex" flexDir="column">
               <Heading  size="md">Não encontramos resultados para :</Heading>
               <Text fontSize="xl" color="gray.300" fontWeight="bold">{ taskNotFound }</Text>
               <Box mt="6" w={["80%", "40%"]} padding="6" boxShadow="base" bg="white">
                   <Stack>
                       <Skeleton startColor="gray.100" endColor="gray.200" h="20px"  w="80%" borderRadius="20px"/>
                       <Skeleton startColor="gray.100" endColor="gray.200" h="20px" w="60%"  borderRadius="20px"/>
                       <Stack mt="8">
                           <Skeleton startColor="gray.100" endColor="gray.200" h="20px"w="50%" borderRadius="20px"/>
                           <Skeleton startColor="gray.100" endColor="gray.200" h="20px" w="60%"borderRadius="20px"/>
                       </Stack>
                   </Stack>
               </Box>
           </Center>
           
       </Box>
       </>
    )
}