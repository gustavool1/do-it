import { ChakraProvider } from "@chakra-ui/react"
import { ReactChild } from "react"
import { theme } from '../styles/theme'
import { AuthProvider } from "./Auth"
interface AppProviderProps{
    children: ReactChild
}
export const AppProvider = ({ children }: AppProviderProps) =>{
    return(
        <AuthProvider>
            <ChakraProvider theme={theme}> 
                { children } 
            </ChakraProvider>
        </AuthProvider>
    )
}