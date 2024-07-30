// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOoLemb6i8ZMufbser7TYQjpqFq4RoIu8",
  authDomain: "buyusnow-7e7f4.firebaseapp.com",
  projectId: "buyusnow-7e7f4",
  storageBucket: "buyusnow-7e7f4.appspot.com",
  messagingSenderId: "567609710303",
  appId: "1:567609710303:web:2793f4b7d59e332bad7b6a",
  measurementId: "G-G6ZPL0642X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);