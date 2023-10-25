// Import the functions you need from the SDKs you need
import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB1w5j-Dl37LB9_so6q2nomR8F5TsWZXdU",
  authDomain: "vendedor2.firebaseapp.com",
  projectId: "vendedor2",
  storageBucket: "vendedor2.appspot.com",
  messagingSenderId: "649781083002",
  appId: "1:649781083002:web:47f7016cb8227f6fbcf4c3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();