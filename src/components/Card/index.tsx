import { Box, Center, Flex, Heading, HStack, Text, theme, Progress} from "@chakra-ui/react"
import { FaCheck, FaTrash } from "react-icons/fa"

export const Card = () =>{
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
                <Heading as="h1" size="md">Estudando Chakra-UI</Heading>
                <HStack spacing="4">
                    <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white">
                        <FaTrash color={theme.colors.gray["200"]}/>
                    </Center>
                    <Center as="button" w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white">
                        <FaCheck color={theme.colors.gray["200"]}/>
                    </Center>
                </HStack>
            </Flex>
            <Box w="100%" mt="4">
                <Text>Start study  adlkasldkal akldkalsd sakld</Text>
                <Progress colorScheme="purple" mt="2.5" value={10}/>
                <Text>07 Dez 2021</Text>
            </Box>
        </Box>
    )
}