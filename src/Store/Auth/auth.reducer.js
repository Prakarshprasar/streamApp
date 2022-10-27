import { LOGIN, LOGOUT, SIGNUP } from "./auth.type"





export const authReducer=(state={credArr:[]},{type,payload})=>{
switch(type){
    case SIGNUP:{
        state.credArr.push(payload)
        return {
            ...state,
        }
    }
    case LOGIN:{
        return {
            ...state,
            
        }
    }
    case LOGOUT:{
        return {
            ...state,
            
        }
    }
    default:{
        return state
    }
}
}