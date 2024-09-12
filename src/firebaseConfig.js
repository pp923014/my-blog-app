import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC1S4Z7vpHQ2NQykWgXQVjFtkjMtA0wYSI",
  authDomain: "blog-app-62563.firebaseapp.com",
  projectId: "blog-app-62563",
  storageBucket: "blog-app-62563.appspot.com",
  messagingSenderId: "751814158542",
  appId: "1:751814158542:web:0fc2c0765a8d9e06ea889f",
  measurementId: "G-5PZJL3EV9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC1S4Z7vpHQ2NQykWgXQVjFtkjMtA0wYSI",
//   authDomain: "blog-app-62563.firebaseapp.com",
//   projectId: "blog-app-62563",
//   storageBucket: "blog-app-62563.appspot.com",
//   messagingSenderId: "751814158542",
//   appId: "1:751814158542:web:0fc2c0765a8d9e06ea889f",
//   measurementId: "G-5PZJL3EV9B"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);