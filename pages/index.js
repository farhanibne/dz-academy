// import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import Auth from './Auth'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import {useState} from 'react';
import {firebase} from '../lib/firebase'
import Admin from './Admin'
import Courses from '../components/Courses'
import Welcome from '../components/Welcome'



export default function Home() {

  

  const [userb , setUserb] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      return setUserb(true);
    }
    setUserb(false);
  })

 
  

  

  if(userb === true){

  


  
    return (
      <div className='bg-[#fdf9f0]'>
        <Header/>
        <Welcome/>
        <Courses/>

        <hr/>
        
      <Contact/>
      <footer className={styles.footer}>
          <a
            href="https://farhanibnesaif.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '} DZ
            <span className={styles.logo}>      
            </span>
          </a>
        </footer>
      </div>
    )
  }

  else{
    return(
      <Auth/>
    )
  }



  
}
