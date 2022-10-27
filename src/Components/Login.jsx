import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Store/Auth/auth.action'
import style from "../Styles/login.module.css"

const Login = () => {

  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  let dispatch=useDispatch();
  let navigate=useNavigate();

  
  return (
    <div>
      <h1>Login Page</h1>
        <form className={style.logform} onSubmit={(e)=>{e.preventDefault();dispatch(login({email:email,password:pass},navigate))}}>
            <p>Enter E-mail :- </p>
            <input type="email" placeholder='Enter E-mail' onChange={(e)=>setemail(e.target.value)}/>
            <p>Enter Password :- </p>
            <input type="password" placeholder='Enter Password' onChange={(e)=>setpass(e.target.value)}/><br />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login