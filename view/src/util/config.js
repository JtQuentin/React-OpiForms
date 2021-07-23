// config.js

import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADpvWUnA0N-eGWJAuN2DyWJmC_JIatBIw",
  authDomain: "react-todoapp-efe9c.firebaseapp.com",
  databaseURL:
    "https://react-todoapp-efe9c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-todoapp-efe9c",
  storageBucket: "react-todoapp-efe9c.appspot.com",
  messagingSenderId: "689117758825",
  appId: "1:689117758825:web:7b95a7b5afc7997d9ee9f8",
};

firebase.initializeApp(config);

export default firebase;
