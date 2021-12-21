import { ChakraProvider } from "@chakra-ui/react"
import { ReactChild } from "react"
import { theme } from '../styles/theme'
interface AppProviderProps{
    children: ReactChild
}
export const AppProvider = ({ children }: AppProviderProps) =>{
    return(
        <ChakraProvider theme={theme}> { children } </ChakraProvider>
    )
}