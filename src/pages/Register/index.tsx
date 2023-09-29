import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"
import { RegisterInfo } from "./RegisterInfo"
import { RegisterForm } from "./RegisterForm"
import { GoBackButton } from "./GoBackButton"
import { api } from "../../services/api"
import { ModalSuccess } from "../../components/Modal/ModalSuccess"
import { ModalError } from "../../components/Modal/ModalError"
import { useHistory } from "react-router-dom"

interface RegisterInterface{
    name:string,
    email:string,
    password:string,
}
export const Register = () =>{

    const history = useHistory()


    const isWideVersion = useBreakpointValue({
        base:false,
        md:true
    })

    const [ loading, setLoading ] = useState(false)

    const registerSchema = yup.object().shape({
        name:yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("É necessário ser um email válido"),
        password:yup.string().required("Senha obrigatória"),
        confirmPassword: yup.string().required("Confirmação de senha obrigatório").oneOf([yup.ref("password")], "Senhas Diferentes")
    })


    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(registerSchema)
    })

    const { isOpen:isModalSuccessOpen, onOpen:onModalSuccessOpen, onClose:onModalSuccessClose } = useDisclosure()
    const { isOpen:isModalErrorOpen, onOpen:onModalErrorOpen, onClose:onModalErrorClose } = useDisclosure()

    const handleRegister = ({ name,password,email }:RegisterInterface) =>{
        setLoading(true)

        api.post("users", { name, email, password })
         .then((response)=>{
             setLoading(false)
             onModalSuccessOpen()
         }).catch((err)=>{
            console.log("catch ", err)
            onModalErrorOpen()
            setLoading(false)
         })
    }
    
    return(
       <>
        <ModalSuccess 
            isOpen={isModalSuccessOpen}
            onClose={onModalSuccessClose} 
            buttonMessage="Ir para o login agora " 
            message="Seu cadastro deu super certo "
            onClick={()=> history.push("/")} 
            secondaryText="Você ja pode começar a fazer suas listas de tarefas agora mesmo"
        /> 
        <ModalError isOpen={isModalErrorOpen} onClose={onModalErrorClose} error="ops" secondaryText="Você já pode tentar novamente,clicando no botão acima ou aguarde alguns minutos"/>
        <Flex 
            padding = { ["10px 15px", "10px 15px", "0px", "0px"] }
            alignItems="center"
            height={["auto", "auto", "100vh", "100vh" ]}
            justifyContent="center"
            bgGradient={[
                    "linear(to-b, purple.800 65%, white 35%)",
                    "linear(to-b, purple.800 65%, white 35%)",
                    "linear(to-l, purple.800 65%, white 35%)",
                    'linear(to-l, purple.800 65%, white 35%)'
            ]}
            color="white"
            >
            <Flex 
                w={["100%", "100%", "90%", "55%"]}
                justifyContent="center" 
                flexDirection={["column", "column", "row", "row" ]}
            > 
            { isWideVersion ? 
            (   
                <>
                    <GoBackButton top="75" left="25"/>
                    <RegisterForm errors={errors} handleRegister={handleSubmit(handleRegister)} loading={loading} register={register} />
                    <RegisterInfo/>
                </>
            ):
            (
                <>
                    <GoBackButton top="10" left="75vw"/>
                    <RegisterInfo/>
                    <RegisterForm errors={errors} handleRegister={handleSubmit(handleRegister)} loading={loading} register={register} />
                </>
            )
            }
            
            </Flex>
        </Flex>
       </>
    )
}