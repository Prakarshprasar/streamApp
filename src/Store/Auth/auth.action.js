import { LOGIN, LOGOUT, SIGNUP } from "./auth.type";
import axios from "axios";




export const register=(cred,navigate)=>(dispatch)=>{
    axios.post("https://prakapp.herokuapp.com/auth/signup",cred,{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{
        console.log(res.data.user);
        dispatch({type:SIGNUP,payload:res.data})
        alert("signup Success")
        navigate("/login")
    })
    .catch((err) => {
        console.log("xxx")
        // dispatch({type:SIGNUP,payload:{err:"error"}})
        alert("Fill Up all required field")
    });
}

export const login=(obj,navigate)=>(dispatch)=>{
    axios.post("https://prakapp.herokuapp.com/auth/login",obj,{
        headers:{"Access-Control-Allow-Origin":"*"}
    })
    .then((res)=>{
        console.log(res.data,"login")
        alert("Login Successfull")
        let arr=res.data.email.trim().split("@");
        if(arr[1]=="admin.com"){
            alert("logged in as admin")
            navigate("/admin")
        }else{
            // navigate("/userlist")
            alert("logged in as customer")
            navigate("/chooseplan")
        }
        // navigate("/main")
        
        // dispatch({type:LOGIN,payload:{token:res.data.token,isAuth:true}})
        // localStorage.setItem("username",JSON.stringify({username:obj.username,isAuth:true}))

    }).catch((err) => {
        console.log(err)
        // dispatch({type:SIGNUP,payload:{err:"error"}})
        alert("Invalid Credentials")
    });
}
// export const logout=(navigate)=>(dispatch)=>{
//     dispatch({type:LOGOUT,payload:{}})
//     alert("Signed Out Successfully")
//     navigate("/login")
//     localStorage.setItem("username",JSON.stringify({}))
// }