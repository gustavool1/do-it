import { FormControl, FormErrorMessage, FormLabel, Textarea as ChakraTextarea,  TextareaProps as ChakraTextareaProps, InputLeftElement, InputGroup} from "@chakra-ui/react"
import { ForwardRefRenderFunction, useCallback, useEffect, useState, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IconType } from "react-icons"

interface TextAreaProps extends ChakraTextareaProps{
    name?:string,
    label?:string,
    error?: FieldError | null,
    icon?: IconType,
}

type inputVariationOption = { 
    [key:string]:string
}
const inputVariation:inputVariationOption={
    error:"red.500",
    default:"gray.200",
    focus:"purple.800",
    filled:"green.500"
}
export const TextAreaBase:ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({name,error = null,icon:Icon,label, ...rest }, ref) =>{
    const [ variation, setVariation ] = useState('')
    const [ value, setValue ] = useState("")
    useEffect(()=>{
        if(error){
            return setVariation("error")
        }
    }, [error])

    const handleInputFocus = useCallback(()=>{
        if(!error){
           return setVariation("focus")
        }
    },[error])

    const handleInputBlur = useCallback(()=>{
        if(value.length > 1 && !error){
            return setVariation("filled")
        }
    },[error,value])
    return(
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel>{ label }</FormLabel>}
            <InputGroup flexDirection="column">
            {Icon &&
                <InputLeftElement mt="2.5" color={inputVariation[variation]}>
                    <Icon/>
                </InputLeftElement>
            }
                <ChakraTextarea 
                    name={name}
                    bg="gray.50"
                    variant="outline"
                    _hover={{bgColor:"gray.100"}}
                    _placeholder={{color:"gray.300"}}
                    size="lg"
                    h="60px"
                    color={inputVariation[variation]}
                    borderColor={inputVariation[variation]}
                    onFocus={handleInputFocus}
                    onBlurCapture={handleInputBlur}
                    onChangeCapture={(e:any)=> setValue(e.currentTarget.value)}
                    ref={ref}
                    {...rest }
                />
                {!!error && <FormErrorMessage>{ error.message }</FormErrorMessage>}
            </InputGroup>
        </FormControl>
    )
}
export const TextArea = forwardRef(TextAreaBase)