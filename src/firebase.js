// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrDdzS4AMgpqY28O-d3v2Xwv3UiVjsnOg",
  authDomain: "tesla-74978.firebaseapp.com",
  projectId: "tesla-74978",
  storageBucket: "tesla-74978.appspot.com",
  messagingSenderId: "468523073295",
  appId: "1:468523073295:web:dfeb0ca8acfbee2fc0487a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()