// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb254fN8XyQWVHk_tiOKk0PxKU0X-Wvu8",
  authDomain: "login-79863.firebaseapp.com",
  projectId: "login-79863",
  storageBucket: "login-79863.firebasestorage.app",
  messagingSenderId: "59481643221",
  appId: "1:59481643221:web:80be5cbccdbf9828f42a5c",
  measurementId: "G-NSQDLV00M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
