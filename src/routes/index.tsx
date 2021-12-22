import { Switch } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Route } from "./Route"
export const Routes = () =>{
    return(
    <Switch>
        <Route exact path='/' component={Login}/>   
        <Route exact path='/dashboard' component={Dashboard} isPrivate/>   
        <Route exact path="/register" component={Register} />
    </Switch>

    )
}