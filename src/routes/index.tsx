import { useContext } from "react"
import { Switch } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { PageNotFound } from "../pages/PageNotFound"
import { Register } from "../pages/Register"
import { AuthContext } from "../providers/Auth"
import { Route } from "./Route"
export const Routes = () =>{
    const { acessToken } = useContext(AuthContext)
    return(
    <Switch>
        <Route exact path='/' component={Login}/>   
        <Route exact path='/dashboard' component={Dashboard} isPrivate/>   
        <Route exact path="/register" component={Register} />
        <Route component={PageNotFound} isPrivate={!!acessToken}/>
    </Switch>

    )
}