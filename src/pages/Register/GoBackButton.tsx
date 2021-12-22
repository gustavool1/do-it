import { Center } from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa"
import { useHistory } from "react-router-dom"

interface GoBackButtonProps{
    top:string,
    left:string,

}
export const GoBackButton = ({top, left}:GoBackButtonProps) =>{
    const history = useHistory()
    return(
        <Center as="button"  
            onClick={()=>history.push("/")} 
            position="absolute"
            top={top}
            left={left}
            w={["60px", "80px"]}
            h={["60px", "60px"]}
            bgColor="purple.500"
            borderRadius="md"
            fontSize="2xl"
            _hover={{bg:"purple.600"}}
            >
            <FaArrowLeft/>
        </Center>
    )
}