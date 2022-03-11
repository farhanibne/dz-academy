import { auth } from 'firebase';
import React, { useRef } from 'react'
import {firebase} from '../lib/firebase'
import {FcGoogle} from 'react-icons/fc'

function Dashboard() {

  
  const emailref = useRef('farhanibne860@dz.com');
  const passwordref = useRef('dzacademy@1230');

  //login with firebase
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
               
                
            
<h1 style={{fontSize:'40px', marginTop:'5px',textAlign:'center'}}>Proof You're an Admin</h1>
<div className='bg-[#fdf9f0]'>

    <center>
    <div style={{   marginTop:'15%'}}>
        <h1 style={{fontSize:'40px'}}><a style={{color:'black',textDecoration:'none'}} href="https://farhanibnesaif.vercel.app/"></a> </h1>  <br/>
    
    <button onClick={signin} style={{margin:'35px', display:'flex',border:'1px solid black',padding:'9px',borderRadius:'10px'}} > <FcGoogle style={{marginTop:'1px',fontSize:'30px',marginRight:'5px'}}/>Sign in WIth Google </button>

   

       
    </div>
    </center>
       

    </div>
</>

                
              )
             
              
            

            
                

      
       
    


}

export default Dashboard