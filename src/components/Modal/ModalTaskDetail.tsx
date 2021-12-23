import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Center, HStack, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { FaCheck, FaExclamation, FaTrash } from "react-icons/fa"
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
    return(
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding="2" bg="white" color="gray.800">
                    <ModalHeader display="flex">
                        <Center mr="2" bg="purple.500" w="30px" h="30px" borderRadius="5px">
                            <FaExclamation color={theme.colors.white}/>
                        </Center>
                        <Text fontWeight="bold">Dale!</Text>
                        <HStack spacing="2">
                            <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white" onClick={()=> deleteTask(task.id,acessToken)}>
                                <FaTrash color={theme.colors.gray["300"]}/>
                            </Center>
                            <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white" onClick={()=> updateTask(task.id,user.id,acessToken)}>
                                <FaCheck color={theme.colors.gray["200"]}/ >
                            </Center>
                            <Center mr="2" bg="purple.500" w="30px" h="30px" borderRadius="5px">
                                <FaExclamation color={theme.colors.white}/>
                            </Center>
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading as="h1" fontSize="2xl">{ task.title }</Heading>
                        <Text textAlign="center">{ task.description }</Text>
                    </ModalBody>
                    <ModalFooter flexDirection="column"> </ModalFooter>
                   
                </ModalContent>
            </Modal>
    )
}