import { ChakraProvider } from "@chakra-ui/react"
import { ReactChild } from "react"
import { theme } from '../styles/theme'
import { AuthProvider } from "./Auth"
import { TaskProvider } from "./Tasks"
interface AppProviderProps{
    children: ReactChild
}
export const AppProvider = ({ children }: AppProviderProps) =>{
    return(
        <AuthProvider>
            <TaskProvider>
                <ChakraProvider theme={theme}> 
                    { children } 
                </ChakraProvider>
            </TaskProvider>
        </AuthProvider>
    )
}