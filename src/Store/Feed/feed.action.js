import axios from "axios";
import { ADD_TO_FREE, ADD_TO_PREMIUM, GET_FREE, GET_PREMIUM } from "./feed.type";




export const addToFree=(obj)=>(dispatch)=>{
    axios.post("https://prakapp.herokuapp.com/plan/free",obj,{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{

        alert("added to free")
        console.log(res.data.feed);
        dispatch({type:ADD_TO_FREE,payload:res.data.feed})
        
    })
    .catch((err) => {
        console.log("error")
    });
}
export const addToPremium=(obj)=>(dispatch)=>{
    axios.post("https://prakapp.herokuapp.com/plan/premium",obj,{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{
        alert("added to premium")
        dispatch({type:ADD_TO_PREMIUM,payload:res.data.feed})
    })
    .catch((err) => {
        console.log("error")
    });
}

export const getFree=()=>(dispatch)=>{
    axios.get("https://prakapp.herokuapp.com/plan/free",{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{

        console.log(res.data);
        dispatch({type:GET_FREE,payload:res.data})
        
    })
    .catch((err) => {
        console.log("error")
    });
}

export const getPremium=()=>(dispatch)=>{
    axios.get("https://prakapp.herokuapp.com/plan/premium",{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{

        console.log(res.data);
        dispatch({type:GET_PREMIUM,payload:res.data})
        
    })
    .catch((err) => {
        console.log("error")
    });
}
