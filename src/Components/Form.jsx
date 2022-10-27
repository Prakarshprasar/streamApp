import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToFree, addToPremium } from '../Store/Feed/feed.action'
import style from "../Styles/form.module.css"
const Form = () => {
  const [video, setvideo] = useState("")
  const [flag, setflag] = useState(false)
  let dispatch=useDispatch();
  return (
    <div>
      <h1>Upload Video</h1>
      <div>
        <input type="file" onChange={(e)=>setvideo(e.target.value)}/>
        <br />
        <br />
        <button onClick={()=>{dispatch(addToFree({file:video}))}}>Add to Free</button>
        <br />
        <br />
        <button onClick={()=>{dispatch(addToPremium({file:video}))}}>Add to Premium</button>
      </div>
      
    </div>
  )
}

export default Form