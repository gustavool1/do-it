import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FaSearch } from "react-icons/fa"
import { AuthContext } from "../../providers/Auth"
import { TaskContext } from "../../providers/Tasks"
import { theme } from "../../styles/theme"
import { ModalCreateTask } from "../Modal/ModalCreateTask"
import { Input } from "./Input"

interface SearchData{
    title:string,
}
export const SearchBox = () =>{
    
    const { isOpen, onClose, onOpen } = useDisclosure()
    const {register, handleSubmit } = useForm()

    const { searchTask, notFound, taskNotFound } = useContext(TaskContext)
    const { acessToken } = useContext(AuthContext)


    const handleSearch = (title: SearchData) =>{
        searchTask(title.title, acessToken)
    }

    return(
        <>
            <ModalCreateTask isOpen={ isOpen } onClose={ onClose }/>
            <Flex mt="6" w="100%" paddingX={["4", "8"]} paddingY="2" flexDir={["column", "column", "row", "row"]}>
                <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
                    <Input  placeholder="Pesquisar por tarefa" w={["99%","99%","35vw","35vw"]} {...register("title")}  />
                    <Center borderRadius="8px" as="button" ml={[ "0","0","2", "2"]} w="64px" h="60px" fontSize="2xl" bg="purple.600" _hover={{bg:"purple.800"}}>
                        <FaSearch color={ theme.colors.white }/>
                    </Center>
                </Flex>
                <Button bg="purple.600" mt={["4","4","0","0"]}color="white" paddingX="16" ml={["0","0","4","4"]} h="60px" borderRadius="8px" _hover={{ bg:"purple.800" }} onClick={ onOpen }>Adicionar uma nova tarefa</Button>
            </Flex>
        </>
    )
}