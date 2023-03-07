import { REGISTER_USER } from "./registerTypes"
const initialState={
    registeredUser:[
            {
            username:'shivam',
            password:'shivam'
            }
        ]
    }
const registerReducer=(state=initialState,action)=>{
    switch(action.type){
        case REGISTER_USER:
            state.registeredUser.push(action.payload)    
        return {
            ...state
        }
        default:return state
    }
}
export default registerReducer;