import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/compat/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyBIZeNjmiD-tvwsbU8neTJ_69KOYc-r2Ao",
  authDomain: "taskmanagement-7c7cb.firebaseapp.com",
  projectId: "taskmanagement-7c7cb",
  storageBucket: "taskmanagement-7c7cb.appspot.com",
  messagingSenderId: "310468518208",
  appId: "1:310468518208:web:4180aed3082571bfb41aa5",
  measurementId: "G-85QCCJC9N4"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
