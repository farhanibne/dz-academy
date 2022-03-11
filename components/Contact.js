import { Center } from '@chakra-ui/react'
import React from 'react'

function Contact() {
  return (
   <>
   <div className='bg-[#fdf9f0]'  style={{marginTop:'100px'}}>
<center><h1  style={{fontSize:'40px', color:'#212121'}}>Contact US </h1></center>
    
    <form action="https://formsubmit.co/farhanibne760@gmail.com" method="POST" style={{width:'100vw',height:'40vh'}}> <br/>
    <center>
     
     <input type="text" name="name" placeholder='Name' required style={{backgroundColor:'transparent',marginBottom:'10px',width:'80%',height:'auto',borderBottom:' 1px solid #f0b86c'}}/><br/> <br/><br/>
  
     <input type="email" name="email" placeholder='Email' required style={{backgroundColor:'transparent',marginBottom:'10px',width:'80%',height:'auto',borderBottom:' 1px solid #f0b86c'}}/> <br/><br/><br/>
    
     <input type="text" name="Question" placeholder='Ask me' required style={{backgroundColor:'transparent',marginBottom:'10px',width:'80%',height:'auto',borderBottom:' 1px solid #f0b86c'}}/> <br/><br/><br/>
     <button style={{backgroundColor:'#487f63', padding:'10px',marginBottom:'15px',borderRadius:'8px'}} type="submit">Contact</button> 
     </center>
    </form>

   </div>
   
   </>
  )
}

export default Contact