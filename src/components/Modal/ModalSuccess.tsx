import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Center } from "@chakra-ui/react"
import { FaExclamation } from "react-icons/fa"
import { theme } from "../../styles/theme"

interface ModalSuccessProps{
    isOpen:boolean,
    onClose: () => void,
    message: string,
    buttonMessage: string,
    onClick: () => void,
    secondaryText:string
}
export const ModalSuccess = ({ isOpen, onClose, message, buttonMessage, onClick, secondaryText }:ModalSuccessProps) =>{

    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent padding="2" bg="white" color="gray.800">
                <ModalHeader display="flex">
                    <Center mr="2" bg="purple.500" w="30px" h="30px" borderRadius="5px">
                        <FaExclamation color={theme.colors.white}/>
                    </Center>
                    <Text fontWeight="bold">Dale!</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text textAlign="center">{ message }</Text>
                </ModalBody>
                <ModalFooter flexDirection="column">
                <Button bg='purple.500' mr={3} color="white" w="100%" h="60px" _hover={{bg:"purple.600"}} onClick={onClick}>
                    { buttonMessage }
                </Button>
                <Text align="center" mt="4">
                    { secondaryText }
                </Text>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}