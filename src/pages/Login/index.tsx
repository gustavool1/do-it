import { Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/Auth"
import { LoginInfo } from "./LoginInfo"
import { LoginForm } from "./LoginForm"

interface SignInInterface{
    email:string,
    password:string,    
}
export const Login = () =>{
    
    const { signIn } = useContext(AuthContext)
    const [ loading, setLoading ] = useState(false)

    const signInSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("É necessário ser um email válido"),
        password:yup.string().required("Senha obrigatória")
    })


    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(signInSchema)
    })


    const handleSignIn = (data:SignInInterface) =>{
        setLoading(true)
        const { email, password } = data
        signIn({email, password})   
        .then(()=> setLoading(false))
         .catch(()=> setLoading(false))
    }


    return(
        <Flex 
            padding = { ["10px 15px", "10px 15px", "0px", "0px"] }
            height={["auto", "auto", "100vh", "100vh" ]}
            justifyContent="center"
            bgGradient={[
                    "linear(to-b, purple.800 65%, white 35%)",
                    "linear(to-b, purple.800 65%, white 35%)",
                    "linear(to-r, purple.800 65%, white 35%)",
                    'linear(to-r, purple.800 65%, white 35%)'
            ]}
            color="white"
            >
            <Flex 
                w={["100%", "100%", "90%", "55%"]}
                justifyContent="center" 
                flexDirection={["column", "column", "row", "row" ]}
                alignItems="center"
            > 
               <LoginInfo/>
                <LoginForm errors={errors} handleSignIn={handleSubmit(handleSignIn)} loading={loading} register={register} />
            </Flex>
        </Flex>
    )
}