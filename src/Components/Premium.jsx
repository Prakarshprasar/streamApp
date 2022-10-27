import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPremium } from '../Store/Feed/feed.action';
import style from "../Styles/premium.module.css"
const Premium = () => {

    let dispatch=useDispatch();
    dispatch(getPremium())
  let arr=useSelector((state)=>state.feed.arr);
  
  return (
    <>
    <h1>Premium Plan Subscriber</h1>
    <div className={style.premmain}>
      
      {
        arr.map((e)=>(
            <div key={e._id}>
                <video width="320" height="240" controls>
                    <source src={e.file} type="video/mp4"/>
                </video>
            </div>
          
        ))
      }
    </div>
    </>
  )
}

export default Premium