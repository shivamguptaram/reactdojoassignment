import { LOGIN_USER } from "./loginTypes"
export const loginUser=(loginData)=>{
    return {
        type:LOGIN_USER,
        payload:loginData
    }
}