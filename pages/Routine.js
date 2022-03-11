import { Center } from '@chakra-ui/react'
import React, {useState,useEffect} from 'react'
import {FcFeedback} from 'react-icons/fc'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import {firebase} from '../lib/firebase'


function Routine() {

  const [formValue, setFormValue] = useState("");
  const [des, setDes] = useState("");
  const [link, setLink] = useState("");
  
  const [notes, setNotes] = useState([]);
  // const [user] = useAuthState(firebase.auth());
  const admin = firebase.auth().currentUser;

  useEffect(() => {
    
    firebase.firestore().collection("notes").onSnapshot((snapshot) => {
      setNotes(snapshot.docs.map((doc) => doc.data()));
    });
    
  
  }, []);


  return (
    <div>
      <Header/>
      <center>
    <div style={{marginTop:'10px'}}>
      <img src='/notes.svg' width='40%' height='40vh' alt='no access'/>
      <h1 style={{fontSize:'45px',textAlign:'center'}}>Notes</h1><br/> </div>

     
      </center>
      {notes.map((note,pos) => (
       //note.title
       //note.description
       //note.link
       //create a note card with the above data
       
       <div className='md:mx-24 xl:w-[20vw] w-full inline-block sm:w-[70vw]  ' key={pos}>
        <div className=" bg-gray-200 rounded-lg shadow-lg p-6 m-6 " >
        <div className="font-semibold " style={{fontSize:"150%"}}>
        <h1>{note.title}</h1>
        </div>
        <div className="font-normal my-1">
        <p>{note.description}</p>
        </div>
        <div className="py-1 px-1 bg-[#487f63] rounded-lg w-[70%] my-2 ">
        <a href={note.Link} target="_blank">Link To Note</a>
        </div>
        </div>
        </div>
        
       ))}
            



      <footer className={styles.footer} >
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

export default Routine