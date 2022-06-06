// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN9k_QyNs0m7GVsVOO_JgYVrMOD233wn8",
  authDomain: "red-onion-ff595.firebaseapp.com",
  projectId: "red-onion-ff595",
  storageBucket: "red-onion-ff595.appspot.com",
  messagingSenderId: "594666373347",
  appId: "1:594666373347:web:b6f21936e92b70513fc5d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;