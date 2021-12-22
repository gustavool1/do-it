import { Button, Center, Flex } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import { theme } from "../../styles/theme"
import { Input } from "./Input"

export const SearchBox = () =>{
    return(
        <Flex mt="6" w="100%" paddingX={["4", "8"]} paddingY="2">
            <Flex as="form">
                <Input name="title" placeholder="Pesquisar por tarefa" w="35vw"/>
                <Center borderRadius="8px" as="button" ml="2" w="64px" h="60px" fontSize="2xl" bg="purple.600" _hover={{bg:"purple.800"}}>
                    <FaSearch color={theme.colors.white}/>
                </Center>
            </Flex>
            <Button bg="purple.600" color="white" paddingX="16" ml="4" h="60px" borderRadius="8px" _hover={{bg:"purple.800"}}>Adicionar uma nova tarefa</Button>
        </Flex>
    )
}