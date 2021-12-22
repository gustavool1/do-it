import { Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Flex, Center, theme, Box, Heading, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../../providers/Auth"
import { FiLogOut } from 'react-icons/fi'
interface MenuProps{
    isOpen:boolean,
    onClose: () => void
}
export const Menu = ({isOpen, onClose}:MenuProps) =>{
    const { user,signOut } = useContext(AuthContext)

    return(
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay mt="8vh"/>
        <DrawerContent ml="auto" mt="60px" w={["450px", "350px"]}>
          <DrawerHeader borderBottomWidth='1px' borderColor="gray.50" color="gray.400">{ user.name }</DrawerHeader>
          <DrawerBody>
            <Flex align="center" onClick={signOut} _hover={{cursor:"pointer"}}>
                <Center w="60px" h="60px" bg="red.600" fontSize="2xl" borderRadius="md" >
                    <FiLogOut color={theme.colors.white}/>
                </Center>
                <Box ml="4">
                    <Heading as="h2" fontSize="lg">Sair da minha conta</Heading>
                    <Text color="gray.300" fontSize="sm">
                        Sair da minha conta
                    </Text>
                </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}