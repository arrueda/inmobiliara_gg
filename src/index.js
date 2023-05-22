import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-0V7nMxfw-LtVp7uq_-R7RylUu50WfkA",
  authDomain: "inmueble-gg.firebaseapp.com",
  projectId: "inmueble-gg",
  storageBucket: "inmueble-gg.appspot.com",
  messagingSenderId: "186569896552",
  appId: "1:186569896552:web:bdbe7a41a39a9b8a1201dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


