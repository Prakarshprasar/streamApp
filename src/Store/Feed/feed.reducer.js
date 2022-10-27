import { ADD_TO_FREE, ADD_TO_PREMIUM, GET_FREE, GET_PREMIUM } from "./feed.type"


export const feedReducer=(state={arr:[]},{type,payload})=>{
    switch(type){
        case ADD_TO_FREE:{
            state.arr.push(payload)
            return {
                ...state,
            }
        }
        case ADD_TO_PREMIUM:{
            state.arr.push(payload)
            return {
                ...state,
            }
        }
        case GET_FREE:{
            return {
                ...state,
                arr:payload
                
            }
        }
        case GET_PREMIUM:{
            return {
                ...state,
                arr:payload
                
            }
        }
        default:{
            return state
        }
    }
    }