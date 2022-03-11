import React from "react";
import Auth from "./Auth";
import { useState, useEffect } from "react";
import { firebase } from "../lib/firebase";
import Noentry from "./Noentry";
import Header from "../components/Header";
import Admin from "./Admin";
import Home from ".";
import { Center } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import NextLink from "next/link";
import { FcCancel } from "react-icons/fc";
import {toast} from 'react-toastify'
import 'react-toastify/dist/reactToastify.css'


Modal.setAppElement("#__next");

toast.configure()

const customStyles = {
  content: {
    top: "9%",
    left: "9%",
    right: "9%",
    bottom: "9%",
    backgroundColor: "#fdf9f0",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};



function Studio() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalnote, setModalnote] = useState(false);

  // start here
//notes state start here
const [formValue, setFormValue] = useState("");
const [des, setDes] = useState("");
const [link, setLink] = useState("");
const [notes, setNotes] = useState([]);
const admin = firebase.auth().currentUser;
//notes state end here

//notes function start here
const handleSubmit = () => {
  firebase.firestore().collection("notes").add({
    title: formValue,
    description: des,
    Link: link,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    user: firebase.auth().currentUser.displayName,
    userEmail: firebase.auth().currentUser.email,
    
    
    
  });

  setFormValue("");
  setDes("");
  setLink("");
  

};
//notes function end here

//course state start here
const [inputvalue, setinputvalue] = useState("");
const [description, setDescription] = useState("");
const [url, seturl] = useState("");
const [image, setImage] = useState(null);
const [course, setCourse] = useState([]);

//starting the photo pushing storage components


//end here


const coursesubmit = () => {
  firebase.firestore().collection("Courses").add({
    title: inputvalue,
    description: description,
    Link: url,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    user: firebase.auth().currentUser.displayName,
    userEmail: firebase.auth().currentUser.email,
    
    
    
  });

  setinputvalue("");
  setDescription("");
  seturl("");
  

};


// end here



  if (firebase.auth().currentUser === null) {
    return <Home />;
  } else {
    const user = firebase.auth().currentUser;
    console.log(user);

    if (user.email === "farhanibne860@gmail.com") {

      const notify = ()=>{
        toast("You are logged in as Admin")
      }
      return (

        <div style={{ overflow: "hidden" }}>
          <Header />
          <div style={{ marginTop: "10px" }}>
            
            <center>
              <img
                src="/server.svg"
                width="25%"
                height="20vh"
                alt="no access"
              />
              <h1 style={{ fontSize: "35px", marginTop: "25px" }} onClick={notify}>
                Upload Bar{" "}
              </h1>{" "}
              <br />
              <div className="inline-block md:flex  md:mx-16">
                <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-6 m-6 ">
                  <h2 className="text-gray-700 text-lg font-semibold">
                    Add New Course Video
                  </h2>
                  <div>
                    <button
                      type="submit"
                      className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      style={{ backgroundColor: "#487f63", marginTop: "10px" }}
                      onClick={() => setIsOpen(true)}
                      
                    >
                      Add Course
                    </button>
                  </div>

                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                  >
                    <div
                      className="flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h1 style={{ margin: "8px", fontSize: "20px" }}>
                        DZ academy{" "}
                      </h1>
                      <button
                        style={{ fontSize: "25px", margin: "10px" }}
                        onClick={() => setIsOpen(false)}
                      >
                        <FcCancel />
                      </button>
                    </div>
                    <div style={{ margin: "8px" }}>
                      <center>
                        <h2 style={{ fontSize: "25px", margin: "10px" }}>
                          Upload Course
                        </h2>
                        <input
                          type="text"
                          value={inputvalue}
                          onChange={(e) => setinputvalue(e.target.value)}
                          required
                          style={{
                            marginBottom: "13px",
                            background: "transparent",
                          }}
                          placeholder="Course Name"
                          className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
                        />{" "}
                        <br />
                        <input
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                          style={{
                            marginBottom: "13px",
                            background: "transparent",
                          }}
                          placeholder="Course Description"
                          className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
                        />{" "}
                        <br />
                        <input
                          type="url"
                          value={url}
                          onChange={(e) => seturl(e.target.value)}
                          required
                          style={{
                            marginBottom: "13px",
                            background: "transparent",
                          }}
                          placeholder="Course Link"
                          className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
                        />
                        <br />
                      
                        <br />
                        <button
                          type="submit"
                          className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          style={{
                            backgroundColor: "#487f63",
                            marginTop: "10px",
                          
                          }}
                          onClick={coursesubmit}
                        >
                          {" "}
                          Upload
                        </button>
                      </center>
                    </div>
                  </Modal>
                </div>

                <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-6 m-6">
                  <h2 className="text-gray-700 text-lg font-semibold">
                    Add New Note
                  </h2>
                  <div>
                    <button
                      type="submit"
                      className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      style={{ backgroundColor: "#487f63", marginTop: "10px" }}
                      onClick={() => setModalnote(true)}
                    >
                      Add Notes
                    </button>
                  </div>

                  <Modal
                    isOpen={modalnote}
                    onRequestClose={() => setModalnote(false)}
                    shouldCloseOnOverlayClick={false}
                    style={customStyles}
                  >
                    <div
                      className="flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h1 style={{ margin: "8px", fontSize: "20px" }}>
                        DZ academy{" "}
                      </h1>
                      <button
                        style={{ fontSize: "25px", margin: "10px" }}
                        onClick={() => setModalnote(false)}
                      >
                        <FcCancel />
                      </button>
                    </div>
                    <div style={{ margin: "8px" }}>
                      <center>
                        <h2 style={{ fontSize: "25px", margin: "10px" }}>
                          Upload Notes
                        </h2>
                        <input
                          type="text"
                          value={formValue}
                          onChange={(e) => setFormValue(e.target.value)}
                          required
                          style={{
                            marginBottom: "13px",
                            background: "transparent",
                          }}
                          placeholder="Notes Name"
                          className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
                        />{" "}
                        <br />
                        <input
                          type="text"
                          value={des}
                          onChange={(e) => setDes(e.target.value)}
                          required
                          style={{
                            marginBottom: "13px",
                            background: "transparent",
                          }}
                          placeholder="Notes Description"
                          className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
                        />{" "}
                        <br />
                        <input
                          type="url"
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                          required
                          style={{
                            marginBottom: "13px",
                            background: "transparent",
                          }}
                          placeholder="Notes Link"
                          className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
                        />
                        <br />
                        
                        <br />
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          style={{
                            backgroundColor: "#487f63",
                            marginTop: "10px",
                          }}
                        >
                          Upload
                        </button>
                      </center>
                    </div>
                  </Modal>
                </div>
              </div>
              <br />
              <br />
              <hr />
              <hr />
              <br />
              <h1 style={{ fontSize: "35px" }}>Manage Users</h1>
              <div className="inline-block md:flex  md:mx-16">
                <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-6 m-6 ">
                  <h2 className="text-gray-700 text-lg font-semibold">
                    View Users
                  </h2>
                  <div>
                    <a
                      type="submit"
                      className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      style={{ backgroundColor: "#487f63", marginTop: "10px" }}
                      href="https://console.firebase.google.com/u/0/project/dz-academy/authentication/users"
                      target="_blank"
                    >
                      View
                    </a>
                  </div>
                </div>

                <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-6 m-6">
                  <h2 className="text-gray-700 text-lg font-semibold">
                    Manage Database
                  </h2>
                  <div>
                    <a
                      type="submit"
                      className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      style={{ backgroundColor: "#487f63", marginTop: "10px" }}
                      href="https://console.firebase.google.com/u/0/project/dz-academy/firestore/data/~2F"
                      target="_blank"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </center>
          </div>
          <footer className={styles.footer}>
            <a
              href="https://farhanibnesaif.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by DZ
              <span className={styles.logo}></span>
            </a>
          </footer>
        </div>
      );
    } else {
      return <Noentry />;
    }
  }
}

export default Studio;
