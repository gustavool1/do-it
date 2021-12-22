import { Flex, Heading, Image } from "@chakra-ui/react"
import logoMin from '../../assets/logo-min.svg'
export const Header = () =>{
    return(
       <Flex borderBottom="#f5f5f5" paddingX="8" paddingY="2">
           <Flex align="center">
                <Image src={logoMin}/>
                <Heading ml="4" size="lg">Dashboard</Heading>
           </Flex>
       </Flex>
    )
}