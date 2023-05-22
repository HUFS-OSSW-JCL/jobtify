// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcf-YbtdNRtZldSCi5yWylPMRY9kq5VQM",
  authDomain: "jobtify-front.firebaseapp.com",
  projectId: "jobtify-front",
  storageBucket: "jobtify-front.appspot.com",
  messagingSenderId: "612267178184",
  appId: "1:612267178184:web:f0984b567c7591cfae4dfd",
  measurementId: "G-G9CGC1GBPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
