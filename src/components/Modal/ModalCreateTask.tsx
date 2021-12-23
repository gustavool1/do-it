import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Center, VStack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { FaClipboard, FaExclamation } from "react-icons/fa"
import { theme } from "../../styles/theme"
import { Input } from "../Form/Input"
import { TextArea, TextAreaBase } from "../Form/TextArea"
import { useContext } from "react"
import { TaskContext } from "../../providers/Tasks"
import { AuthContext } from "../../providers/Auth"

interface ModalCreateTaskProps{
    isOpen:boolean,
    onClose: () => void,
}
interface FormData{
    title:string,
    description:string
}
export const ModalCreateTask = ({ isOpen, onClose }:ModalCreateTaskProps) =>{

    const { createTask } = useContext(TaskContext)
    const { acessToken, user   } = useContext(AuthContext)
    const createTaskSchema = yup.object().shape({
        title:yup.string().required("Titulo obrigatório"),
        description:yup.string().required("Descrição obrigatória").max(100, "Máximo de 100 caracteres")
    })
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(createTaskSchema)
    })

    const onSubmit = (data:FormData) =>{
        const newData = { ...data, userId:user.id, completed:false }
        createTask(newData, acessToken).then(()=>onClose())
    }
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent padding="2" bg="white" color="gray.800"  as="form"  onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader display="flex">
                    <Center mr="2" bg="purple.500" w="30px" h="30px" borderRadius="5px">
                        <FaClipboard color={theme.colors.white}/>
                    </Center>
                    <Text fontWeight="bold">Adicionar</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign="center">
                   <VStack spacing="5">
                        <Input label="Titulo" error={errors.title} {...register("title")} placeholder="Digite o titulo"/>
                        <TextArea label="Descrição" error={errors.description} {...register("description")} placeholder="Digite o Descrição"/>
                   </VStack>
                </ModalBody>
                <ModalFooter flexDirection="column">
                <Button bg='purple.500' mr={3} color="white" w="100%" h="60px" _hover={{bg:"purple.600"}} type="submit">
                    Adicionar Tarefa
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}

