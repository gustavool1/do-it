import { ComponentType, useContext } from "react";
import { Redirect,  Route as ReactRoute, RouteProps } from "react-router-dom";
import { AuthContext } from "../providers/Auth";

interface Props extends RouteProps{
    isPrivate?: boolean,
    component: ComponentType
}
export const Route = ({ isPrivate=false, component:Component, ...rest }: Props) =>{
    const { acessToken } = useContext(AuthContext)
    return(

        <>
            <ReactRoute {...rest} render={()=> 
                isPrivate === !!acessToken ? 
                    <Component/>
                 : 
                    <Redirect to={ isPrivate ? "/" : "/dashboard"}/>}/>
        </>
    )
}