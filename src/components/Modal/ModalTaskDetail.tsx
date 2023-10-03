import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, Center, HStack, Heading, Flex, Box, Progress } from "@chakra-ui/react"
import { useContext } from "react"
import { FaCheck, FaCube, FaTimes, FaTrash } from "react-icons/fa"
import { AuthContext } from "../../providers/Auth"
import { TaskContext } from "../../providers/Tasks"
import { theme } from "../../styles/theme"

interface Task{
    id:string,
    title:string,
    description:string,
    userId:string,
    completed:boolean
}

interface ModalTaskDetailProps{
    isOpen:boolean,
    onClose: () => void,
    task: Task
}
export const ModalTaskDetail = ({ isOpen, onClose, task}:ModalTaskDetailProps) =>{
    const { acessToken,user } = useContext(AuthContext)
    const { deleteTask,updateTask } = useContext(TaskContext)
    
    const handleCompleted = () =>{
        updateTask(task.id, user.id, acessToken)
        onClose()
    }

    const handleDelete = () =>{
        deleteTask(task.id, acessToken)
        onClose()
    } 

    return(
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding="2" bg="white" color="gray.800" width="80%" maxWidth="380px" >
                    <ModalHeader display="flex" justifyContent="space-between">
                        <Flex >
                            <Center mr="2" bg="purple.500" w="30px" h="30px" borderRadius="5px">
                                <FaCube color={theme.colors.white}/>
                            </Center>
                            <Text fontWeight="bold">Dale!</Text>
                        </Flex>
                        <HStack spacing="2">
                            <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white" onClick={handleDelete}>
                                <FaTrash color={theme.colors.gray["300"]}/>
                            </Center>
                            <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white" onClick={handleCompleted}>
                                <FaCheck color={theme.colors.gray["200"]}/ >
                            </Center>
                            <Center mr="2"  w="30px" h="30px" borderRadius="5px" bg="red.600" _hover={{cursor:"pointer"}}onClick={onClose}>
                                <FaTimes color={theme.colors.white}/>
                            </Center>
                        </HStack>
                    </ModalHeader>
                    <ModalBody>
                        <Heading as="h1" fontSize="2xl">{ task.title }</Heading>
                        <Text color="gray.400">{ task.description }</Text>
                    </ModalBody>
                    <ModalFooter flexDirection="column"> </ModalFooter>
                    <Box padding="6">
                        <Progress colorScheme="purple" value={task.completed ? 100 : 10}/>
                        <Text color="gray.200" mt="3">
                            23 Dez 2021 
                        </Text>
                    </Box>
                </ModalContent>
            </Modal>
    )
}