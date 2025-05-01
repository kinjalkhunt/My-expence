// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATh2-fyld59VXhHiFBSZL5U1jLSyMzZZw",
  authDomain: "authentication-9dc82.firebaseapp.com",
  projectId: "authentication-9dc82",
  storageBucket: "authentication-9dc82.firebasestorage.app",
  messagingSenderId: "948467877302",
  appId: "1:948467877302:web:8d1c580a9685f3abf96d17",
  measurementId: "G-7X3SW1MF54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
