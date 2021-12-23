import { Box, Center, Flex, Heading, HStack, Text, theme, Progress} from "@chakra-ui/react"
import { useContext } from "react"
import { FaCheck, FaTrash } from "react-icons/fa"
import { AuthContext } from "../../providers/Auth"
import { TaskContext } from "../../providers/Tasks"
interface Task{
    id:string,
    title:string,
    description:string,
    userId:string,
    completed:boolean
}

interface CardProps{
    task:Task,
    onClick: (task:Task) => void
}
export const Card = ({ task, onClick }:CardProps) =>{
    const { deleteTask, updateTask } = useContext(TaskContext)
    const { acessToken, user } = useContext(AuthContext)

    return(
        <Box 
            cursor="pointer"
            _hover={{transform:"translateY(-7px)", borderColor:"gray.100"}}
            transition="border 0.8s ease 0s, transform 0.2s"
            borderWidth="1px"
            borderColor="gray.50"
            boxShadow="base"
            padding="7px"
            w={[ "330px", "auto" ]}
        >
            <Flex justifyContent="space-between">
                <Heading as="h1" size="md">{ task.title }</Heading>
                <HStack spacing="4">
                    <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white" onClick={()=> deleteTask(task.id,acessToken)}>
                        <FaTrash color={theme.colors.gray["300"]}/>
                    </Center>
                    <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white" onClick={()=> updateTask(task.id,user.id,acessToken)}>
                        <FaCheck color={theme.colors.gray["200"]}/ >
                    </Center>
                </HStack>
            </Flex>
            <Box w="100%" mt="4" onClick={()=> onClick(task)}>
                <Text>{ task.description }</Text>
                <Progress colorScheme="purple" mt="2.5" value={task.completed ? 100 : 10}/>
                <Text>07 Dez 2021</Text>
            </Box>
        </Box>
    )
}