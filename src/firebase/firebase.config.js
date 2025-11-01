// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpOpRxYljyGEwe84zJmPw3K_QNShx6_Qg",
  authDomain: "recipe-book-85f5e.firebaseapp.com",
  projectId: "recipe-book-85f5e",
  storageBucket: "recipe-book-85f5e.firebasestorage.app",
  messagingSenderId: "355788501425",
  appId: "1:355788501425:web:8071851e04c224c5238d90",
  measurementId: "G-K7G8DYVHRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export default app;

