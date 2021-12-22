import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { api } from "../../services/api";



interface AuthProviderProps{
    children:ReactNode
}

interface User{
    email:string,
    id:string,
    name:string,
}

interface SignIn{
    email:string,
    password:string
}
interface AuthState{
    accessToken: string,
    user:User
}

interface AuthContextData{
    user: User,
    acessToken: string, 
    signIn: (credintials : SignIn) => Promise<void>,
    signOut: () => void
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const useAuth = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth must be used wihtin an AuthProvider")
    }
}

const AuthProvider = ({ children } : AuthProviderProps) =>{

    const [ data, setData ] = useState<AuthState>(()=>{
        const accessToken = localStorage.getItem("@Doit:accessToken")
        const user = localStorage.getItem("@Doit:user")

        if(accessToken && user){
            return {accessToken, user:JSON.parse(user)}
        }
        return {} as AuthState
    })

    
    const signIn = useCallback( async ({ email, password }: SignIn) =>{
        const response = await api.post('/login', { email, password })

        const { accessToken , user } = response.data

        localStorage.setItem("@Doit:accessToken", accessToken)
        localStorage.setItem("@Doit:user", JSON.stringify(user))

        setData({ accessToken, user })
    }, [])

    const signOut = useCallback(()=>{
        localStorage.removeItem("@Doit:accessToken")
        localStorage.removeItem("@Doit:user")
        setData({} as AuthState)
    }, [])

    
    return(
        <AuthContext.Provider value={{ signIn, acessToken: data.accessToken, user:data.user, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth, AuthContext}