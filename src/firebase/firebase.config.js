// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7R5CoXqQRIrZYMN78_jr1m5mgzemklXk",
  authDomain: "react-auth-practice-30170.firebaseapp.com",
  projectId: "react-auth-practice-30170",
  storageBucket: "react-auth-practice-30170.appspot.com",
  messagingSenderId: "154842709390",
  appId: "1:154842709390:web:3253e6aad4dfd7032178df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;