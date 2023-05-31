// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtF7GWi4KN-SOF7w8o_X2jYsTqRsHsrR0",
  authDomain: "jobtify-jcl.firebaseapp.com",
  projectId: "jobtify-jcl",
  storageBucket: "jobtify-jcl.appspot.com",
  messagingSenderId: "999175889444",
  appId: "1:999175889444:web:bc4d095d66d77f027e6eb1",
  measurementId: "G-KV7JJ6401V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
export default app;
