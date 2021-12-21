import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import LogoSecondary from "../../assets/logo-primary.svg"
import  { Input }  from "../../components/Form/Input"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"

interface SignInInterface{
    email:string,
    password:string,    
}
export const Login = () =>{
    
    const [ loading, setLoading ] = useState(false)

    const signInSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("É necessário ser um email válido"),
        password:yup.string().required("Senha obrigatória")
    })


    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(signInSchema)
    })


    const handleSignIn = (data:SignInInterface) =>{
        console.log(data)
    }


    return(
        <Flex 
            padding="10px 15px"
            alignItems="center"
            height="100vh"
            bgGradient='linear(to-r, purple.800 65%, white 35%)'
            color="white"
            >
            <Flex 
                w="100%" 
                justifyContent="center" 
                flexDirection="row"
                alignItems="center"
            > 
                <Grid 
                    w="100%"
                    paddingRight="100px"
                >
                    <Image src={LogoSecondary} alt="doitLogo" boxSize="120px"/>
                    <Heading as="h1"> O jeito fácil, gratis</Heading>
                    <Text>Flexivel e atrativo de gerenciar <b>seus projetos em uma única plataforma</b></Text>
                </Grid>
                <Grid as="form"
                    onSubmit={handleSubmit(handleSignIn)}
                    mt="4"
                    w="50%"
                    padding="30px 15px"
                    border="3px solid"
                    borderColor="gray.100"
                    bg="white"
                    color="gray.900"
                >
                    <Heading size="lg"> Bem vindo de de volta</Heading>
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
                        <Button  type="submit" bg="gray.100" w="100%" color="gray.300" h="60px" borderRadius="8px" _hover={{background:"gray.200"}}>Cadastrar</Button>
                    </VStack>
                </Grid>
            </Flex>
        </Flex>
    )
}