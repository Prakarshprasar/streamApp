import React from 'react';
import style from "../Styles/free.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getFree } from '../Store/Feed/feed.action';

const Free = () => {
  let dispatch=useDispatch();
  dispatch(getFree())
  let arr=useSelector((state)=>state.feed.arr);

  return (
    <>
    <h1>Free Plan Subscriber</h1>
    <div className={style.freemain}>
      
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

export default Free