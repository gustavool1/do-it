import { Grid, Image, Heading, Text } from "@chakra-ui/react"
import LogoSecondary from "../../assets/logo-primary.svg"

export const LoginInfo = () =>{
    return(
        <Grid 
        w={["100%","100%" ,"50%", "50%"]}
        paddingRight="100px"
        >
            <Image src={LogoSecondary} alt="doitLogo" boxSize={["120px", "120px", "150px", "150px"]}/>
            <Heading as="h1" mt='4'> O jeito fácil, gratis</Heading>
            <Text w='350px'>Flexivel e atrativo de gerenciar <b>seus projetos em uma única plataforma</b></Text>
        </Grid>
    )
}