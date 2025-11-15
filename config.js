// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJglJqZQN5XSVGX0TiU5okB01vLFqLAWk",
  authDomain: "calculadora-b8f33.firebaseapp.com",
  databaseURL: "https://calculadora-b8f33-default-rtdb.firebaseio.com",
  projectId: "calculadora-b8f33",
  storageBucket: "calculadora-b8f33.firebasestorage.app",
  messagingSenderId: "551620137948",
  appId: "1:551620137948:web:53e28cb803202c43b5b519",
  measurementId: "G-B44J3TGTM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);