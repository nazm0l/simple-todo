// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7c8Yc0Tzevdpn8D4NHfCIgxnxfaiwAh8",
  authDomain: "simple-todo-3e5e4.firebaseapp.com",
  projectId: "simple-todo-3e5e4",
  storageBucket: "simple-todo-3e5e4.appspot.com",
  messagingSenderId: "279697062657",
  appId: "1:279697062657:web:1e2328c31f842c93d3f900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;