import { Flex, Heading, Text, Box, Button, Image } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import NotFoundImg from '../../assets/Notfound.svg'
export const PageNotFound = () =>{
    const history = useHistory()
    return(
        <Flex
            padding = { ["10px 15px", "10px 15px", "0px", "0px"] }
            height={["auto", "auto", "100vh", "100vh" ]}
            justifyContent="space-evenly"
            alignItems="center"
            flexDir={["column-reverse", "column-reverse", "row", "row"]}
        >
            <Box mt="4">
                <Heading>
                    <Text mt="4">Não encontramos a página que você procurou, <br/><b>Vamos tentar novamente</b></Text>
                </Heading>
                <Button mt="4" bg="red.600" h="60px" color="white" w="80%" _hover={{bg:"red.400"}} onClick={()=>history.push("/")}>Ir para as minhas tarefas </Button>
            </Box>
                <Image src={NotFoundImg}/>
        </Flex>
    )
}