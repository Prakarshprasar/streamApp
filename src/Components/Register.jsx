import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Store/Auth/auth.action';
import style from "../Styles/register.module.css"
const Register = () => {
    const [nme, setnme] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    let dispatch=useDispatch();
  let auth=useSelector((state)=>state.auth.credArr);
  
  let navigate=useNavigate()
    
  return (
    <div>
      <h1>SignUp Page</h1>
         <form className={style.regform} onSubmit={(e)=>{e.preventDefault();dispatch(register({name:nme,email:email,password:pass},navigate))}}>
            <p>Enter Name :-</p>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setnme(e.target.value)}/>
            <p>Enter E-mail :- </p>
            <input type="email" placeholder='Enter E-mail'  onChange={(e)=>setemail(e.target.value)}/>
            <p>Create Password :- </p>
            <input type="password" placeholder='Enter Password' onChange={(e)=>setpass(e.target.value)} /><br />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Register