import {getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1w_lVIbzhoDDOrGbZU6vWacFylwXKBng",
  authDomain: "login-athentication-29b2a.firebaseapp.com",
  projectId: "login-athentication-29b2a",
  storageBucket: "login-athentication-29b2a.appspot.com",
  messagingSenderId: "276393007479",
  appId: "1:276393007479:web:29424534c67e212bce2972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;