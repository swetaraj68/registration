import React, { useState } from 'react'
import {Link } from "react-router-dom";
import style from'./Main.module.css'

function Main() {
  const[show,setShow]=useState(true)
  return (
    <>
      <nav className={style.nav}>
        <div className={style.links} id={show? ' ':style.Menu}>
        
                <Link to="/home"> Home </Link>
           
           {/* <a href='./home'> Home</a> */}
                <Link to="/login">Login</Link>
           
                <Link to="/registration">
               Registration
                </Link>
                </div>
             
                <div className={style.mobile}>
               {show?
                <span className={style.equal}onClick={()=>{setShow(false)}}>&#8801;</span>:
                <span className={style.cross}onClick={()=>{setShow(true)}}>X</span>}
                </div>
      </nav>
     <h1>Welcome to</h1>
      
    </>
  )
}

export default Main;
