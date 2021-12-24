import { Box, Center, Heading, Text, Button, useDisclosure } from "@chakra-ui/react"
import { FaClipboard } from "react-icons/fa"
import { Header } from "../../components/Header"
import { ModalCreateTask } from "../../components/Modal/ModalCreateTask"

export const FirstTask = () =>{
    const {
        isOpen:isOpenCreateTask,
        onClose:onCloseCreateTask,
        onOpen:onCreateTaskOpen

    } = useDisclosure()
    return(
        <>
            <ModalCreateTask isOpen={isOpenCreateTask} onClose={onCloseCreateTask}/>
            <Header/>
            <Box mt="4" w="90vw" paddingY="16" ml="5vw" justifyContent="center" textAlign="center" borderWidth="2px" borderColor="gray.200" borderStyle="dashed">
                <Center fontSize="5xl">
                    <FaClipboard color="#bdbdbd"/>
                </Center>
                <Heading fontSize="2xl" as="h1" mt="4">
                    Vamos criar sua primeira tarefa ? 
                </Heading>
                <Text mt="6">
                    Insira sua meta e mostre a você mesmo sua capacidade em cumprir suas atividades 
                </Text>
                <Button padding="6" mt="6" bgColor="purple.800" color="white" _hover={{bg:"purple.900"}} onClick={onCreateTaskOpen}>Criar sua primeira tarefa</Button>
            </Box>
        </>
    )
}