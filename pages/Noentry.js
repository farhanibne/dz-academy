import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import NextLink from 'next/link'


function Noentry() {
  return (

    <div style={{overflow:'hidden'}}>
    <Header/>

    <center>
        <div style={{marginTop:'25px'}}>
        <img src='/access.svg' width='40%' height='40vh' alt='no access'/>
        </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{fontSize:'30px',color:'black',marginTop:'15px',marginRight:'10px'}}>Access Denied  </h1>
        
        <NextLink  href='/'>
        <button style={{backgroundColor:'#487f63', padding:'10px',borderRadius:'8px',height:'50%',marginTop:'15px'}} type="submit">Back </button> 
        </NextLink>
        
        </div>
       
   
    </center>
   
    </div>
  
  )
}

export default Noentry
