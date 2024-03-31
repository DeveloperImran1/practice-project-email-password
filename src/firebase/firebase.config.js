// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Po-CwBgyDLfTDXKaYOjsdda_4pqFvVk",
  authDomain: "user-email-password-auth-f95f7.firebaseapp.com",
  projectId: "user-email-password-auth-f95f7",
  storageBucket: "user-email-password-auth-f95f7.appspot.com",
  messagingSenderId: "172583438307",
  appId: "1:172583438307:web:9d594439b35df46f8602d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app); 
export default auth;