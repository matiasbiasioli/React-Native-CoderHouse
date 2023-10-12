// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrPfeJWDlcUeVlxDUpFutVOIKMM0ikheM",
  authDomain: "react-native-coder-73d1a.firebaseapp.com",
  databaseURL: "https://react-native-coder-73d1a-default-rtdb.firebaseio.com",
  projectId: "react-native-coder-73d1a",
  storageBucket: "react-native-coder-73d1a.appspot.com",
  messagingSenderId: "401992596069",
  appId: "1:401992596069:web:e70745174e8241266d648c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);