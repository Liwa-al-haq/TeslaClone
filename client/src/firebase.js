// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBAPTPrWywWR8g91TktgoAtBxh862XfwNs",

  authDomain: "teslaclone-f7987.firebaseapp.com",

  projectId: "teslaclone-f7987",

  storageBucket: "teslaclone-f7987.appspot.com",

  messagingSenderId: "380432284928",

  appId: "1:380432284928:web:abcdfa050d84b18f8607e5",

  measurementId: "G-LT1CS6VPY4"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()
