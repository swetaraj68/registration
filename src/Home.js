import React from 'react'
import didi from './didi.jpg'
import './home.css'

function Home() {
  return (
  <>
  
  <div className='image' >
  <h1 className='about'>About Us</h1>
  <p className='name'>Deepika Padukone Singh</p>
    <img className='img'src={didi} />
   
    <h6>Age: 36<br/>Location: India </h6>
    
<div className='mainDiv'>
    <div className='div1'>What are your skills <br/>
    spectacular acting skills in movies like Piku
    </div>
    <div className='div2 '> What are your hobbies <br/>
    Acting, dancing and cooking
    </div>
    <div className='div3'>What are your learning <br/> 
    Mantle peace
    </div>
  </div></div>
  <div></div>
    
  </> 
  )
}

export default Home
// style={{'height':200}}