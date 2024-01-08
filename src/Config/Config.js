// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult,signInWithRedirect, GoogleAuthProvider,  onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwGqUBrKkif1Q8z8_Xak_9bJOiTbdT0I8",
  authDomain: "altschool-ba68d.firebaseapp.com",
  projectId: "altschool-ba68d",
  storageBucket: "altschool-ba68d.appspot.com",
  messagingSenderId: "551535057245",
  appId: "1:551535057245:web:88753c94800af2ecfcb0b4",
  measurementId: "G-7SD633TQ0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// set up google auth
const provider = new GoogleAuthProvider();
const auth = getAuth();


export {app, provider, auth, getRedirectResult, signInWithRedirect,  onAuthStateChanged}