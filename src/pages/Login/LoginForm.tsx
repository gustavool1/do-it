import { Grid, Heading, VStack, Box, Text, Button } from "@chakra-ui/react"
import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import { Input } from "../../components/Form/Input"
interface LoginFormProps{
    handleSignIn: () => void,
    errors: DeepMap<FieldValues, FieldError>,
    register:UseFormRegister<FieldValues>,
    loading:boolean
}


export const LoginForm = ({ handleSignIn, errors, register, loading}: LoginFormProps) => {
    const history = useHistory()
    return(
        <Grid as="form"
            onSubmit={handleSignIn}
            mt={["4", "4", "0"]}
            padding="30px 15px"
            border="3px solid"
            borderColor="gray.100"
            bg="white"
            color="gray.900"
            w={["100%", "100%", "40%", "40%"]}
                >
                <Heading size="lg"> Bem vindo de  volta</Heading>
                <VStack mt="5" spacing="5">
                    <Box w="100%">
                        <Input   placeholder="Digite seu login" type="email" icon={ FaEnvelope } { ...register("email") } error={ errors.email }/>
                        {!errors.email && (
                            <Text ml="1" mt="1" color="gray.300">Exemplo: nome@email.com</Text>
                        )}
                    </Box>
                    <Box w="100%">
                        <Input   placeholder="Digite sua senha" type="password" icon={ FaLock } { ...register("password") } error={ errors.password }/>
                        {!errors.password && (
                            <Text ml="1" mt="1" color="gray.300">Exemplo: nome@email.com</Text>
                        )}
                    </Box>
                </VStack>
                <VStack mt="4" spacing="5">
                    <Button  isLoading={loading} type="submit" bg="purple.800" w="100%" color="white" h="60px" borderRadius="8px" _hover={{background:"purple.900"}}>Entrar</Button>
                    <Text color="gray.400">Ainda não possui uma conta ? </Text>
                    <Button  type="submit" bg="gray.100" w="100%" color="gray.300" h="60px" borderRadius="8px" _hover={{background:"gray.200"}} onClick={()=> history.push("/register")}>Cadastrar</Button>
                </VStack>
        </Grid>
    )
}