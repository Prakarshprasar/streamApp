import React from 'react'
import { useNavigate } from 'react-router-dom'

const Susbcription = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>Choose Subscription Plan</h1>
        <div>
            <button onClick={()=>{alert("Going for Free Plan"); navigate("/free")}}>Buy Free Plan</button>
            <br />
            <br />
            <button onClick={()=>{alert("Going for Premium Plan"); navigate("/premium")}}>Buy Premium Plan</button>
        </div>
    </div>
  )
}

export default Susbcription