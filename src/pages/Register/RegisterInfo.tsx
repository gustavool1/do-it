import { Grid, Image, Heading, Text, VStack, Flex, Center, theme, Box } from "@chakra-ui/react"
import { FaForward } from "react-icons/fa"
import LogoSecondary from "../../assets/logo-primary.svg"

export const RegisterInfo = () =>{
    return(
        <Grid 
        w={["100%","100%" ,"50%", "50%"]}
        paddingLeft={["0","0","150px"]}
        >
            <Image src={LogoSecondary} alt="doitLogo" boxSize={["120px", "120px", "150px", "150px"]}/>
            <VStack>
                <Flex w="100%">
                    <Center borderRadius="5px" bg="white" w="50px" h="50px">
                        <FaForward color={theme.colors.purple["800"]} size={25}/>
                    </Center>
                    <Box ml="4">
                        <Heading size="lg">Agilidade</Heading>
                        <Text>Agilize seus projetos com rapidez <br/> e muita perfomance</Text> 
                    </Box>
                </Flex>
                <Flex w="100%">
                    <Center borderRadius="5px" bg="white" w="50px" h="50px">
                        <FaForward color={theme.colors.purple["800"]} size={25}/>
                    </Center>
                    <Box ml="4" mt="4">
                        <Heading size="lg">Simplicidade</Heading>
                        <Text>Armazene seus projetos em uma <br/>interface altamente usual</Text> 
                    </Box>
                </Flex>
            </VStack>               
        </Grid>
    )
}