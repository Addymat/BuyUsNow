// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxsvjmwplL13EWKAj66m7K2bMEX-tC_Mw",
  authDomain: "buyusnow-92dd3.firebaseapp.com",
  projectId: "buyusnow-92dd3",
  storageBucket: "buyusnow-92dd3.appspot.com",
  messagingSenderId: "980245414961",
  appId: "1:980245414961:web:0ea86c0023bfe64ed5c110",
  measurementId: "G-LM770MPNX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);