import React, {useEffect,useState} from 'react'
import {firebase} from '../lib/firebase'


function Courses() {
  

  const [inputvalue, setinputvalue] = useState("");
  const [description, setDescription] = useState("");
  const [url, seturl] = useState("");
  
  const [course, setCourse] = useState([]);

  const admin = firebase.auth().currentUser;

  useEffect(() => {
    
    firebase.firestore().collection("Courses").onSnapshot((snapshot) => {
      setCourse(snapshot.docs.map((doc) => doc.data()));
    });
    
  
  }, []);


  
  return (
    <>

        <div>
            <h1 style={{fontSize:'40px',textAlign:'center',marginTop:'10px',marginBottom:'5px'}}>Courses</h1>
        </div>

        {course.map((course,pos) => (
       //note.title
       //note.description
       //note.link
       //create a note card with the above data
       
       <div className='md:mx-24 xl:w-[20vw] w-full inline-block sm:w-[70vw]  ' key={pos} >
        <div className=" bg-gray-200 rounded-lg shadow-lg p-6 m-6 " >
        <div className="font-semibold " style={{fontSize:"150%"}}>
        <h1>{course.title}</h1>
        </div>
        <div className="font-normal my-1">
        <p>{course.description}</p>
        </div>
        <div className="py-1 px-1 bg-[#487f63] rounded-lg w-[70%] my-2 ">
        <a href={course.Link} >Link To Course</a>
        </div>
        </div>
        </div>
        
       ))}
            

    </>
  )
}

export default Courses