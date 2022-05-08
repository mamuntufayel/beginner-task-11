// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyBfWGIXPnnZD8IDkqlRQXGLG5lBl312QZk",
  authDomain: "hi-fi-electronics-352e3.firebaseapp.com",
  projectId: "hi-fi-electronics-352e3",
  storageBucket: "hi-fi-electronics-352e3.appspot.com",
  messagingSenderId: "365579197202",
  appId: "1:365579197202:web:5804a5f61b470919e831cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
