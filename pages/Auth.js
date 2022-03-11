import { Center } from '@chakra-ui/react';
import React from 'react'
import {firebase} from '../lib/firebase'
import {FcGoogle} from 'react-icons/fc'


function Auth() {


    const signin = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider(); 
        firebase.auth().signInWithPopup(google_provider).then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <>

    <div className='bg-[#fdf9f0]'>

    <center>
    <div style={{   marginTop:'15%'}}>
        <h1 style={{fontSize:'40px'}}><a style={{color:'black',textDecoration:'none'}} href="https://farhanibnesaif.vercel.app/">DZ Academy</a> </h1>  <br/>
    
    <button style={{margin:'35px', display:'flex',border:'1px solid black',padding:'9px',borderRadius:'10px'}} onClick={signin}> <FcGoogle style={{marginTop:'1px',fontSize:'30px',marginRight:'5px'}}/>Sign in WIth Google </button>

   

       
    </div>
    </center>
       

    </div>

    </>
  )
}

export default Auth