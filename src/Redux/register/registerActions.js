import { REGISTER_USER } from "./registerTypes"
export const registerUser=(loginData)=>{
    return {
        type:REGISTER_USER,
        payload:loginData
    }
}