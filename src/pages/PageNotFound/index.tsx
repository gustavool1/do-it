import { Flex, Heading, Text, Box, Button, Image } from "@chakra-ui/react"
import NotFoundImg from '../../assets/Notfound.svg'
export const PageNotFound = () =>{
    return(
        <Flex
            padding = { ["10px 15px", "10px 15px", "0px", "0px"] }
            height={["auto", "auto", "100vh", "100vh" ]}
            justifyContent="center"
            alignItems="center"
        >
            <Box mt="4" mr="2" w="50%">
                <Heading>
                    <Text mt="4">Não encontramos a página que você procurou, <br/><b>Vamos tentar novamente</b></Text>
                </Heading>
                <Button mt="4" bg="red.600" h="60px" color="white" w="80%" _hover={{bg:"red.400"}}>Ir para as minhas tarefas </Button>
            </Box>
                <Image src={NotFoundImg}/>
        </Flex>
    )
}