// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf_qjN7svhVnP-0mBFuvZiWUJ4Jo7xoAw",
  authDomain: "dz-academy.firebaseapp.com",
  projectId: "dz-academy",
  storageBucket: "dz-academy.appspot.com",
  messagingSenderId: "594602150801",
  appId: "1:594602150801:web:99b85bc5e5dfea05e46830",
  measurementId: "G-MTS9HSSQGW"
};

// Initialize Firebase
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}


// const analytics = getAnalytics(app); 

// export const auth = firebase.auth()
// export default app 

export {firebase}