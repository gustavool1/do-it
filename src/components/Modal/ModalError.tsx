import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Center } from "@chakra-ui/react"
import { FaExclamation } from "react-icons/fa"
import { theme } from "../../styles/theme"

interface ModalErrorProps{
    isOpen:boolean,
    onClose: () => void,
    error:string, 
    secondaryText:string
}
export const ModalError = ({ isOpen, onClose, error, secondaryText }:ModalErrorProps) =>{

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent color="gray.800">
                <ModalHeader display="flex">
                    <Center mr="1" bg="red.600" w="30px" h="30px" borderRadius="5px">
                        <FaExclamation color={theme.colors.white}/>
                    </Center>
                    <Text fontWeight="bold">Oops!</Text>
                </ModalHeader>
                <ModalCloseButton bg="red.600" color="white" _hover={{bg:"red.700"}}/>
                <ModalBody>
                    <Text>{error}</Text>
                </ModalBody>
    
                <ModalFooter display="column">
                    <Button bg='red.600' color="white" w="100%" _hover={{bg:"red.700"}} h="60px" onClick={onClose}>
                        Tentar Novamente
                    </Button>
                    <Text textAlign="center" mt="4" color="gray.400">
                        {secondaryText}
                    </Text>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}