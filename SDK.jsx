// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnSn6Q5_hx7WmlV7McmvBuWSMthfZSpMo",
    authDomain: "joblancer-52413.firebaseapp.com",
    projectId: "joblancer-52413",
    storageBucket: "joblancer-52413.appspot.com",
    messagingSenderId: "571467276964",
    appId: "1:571467276964:web:f48d0c8cd86104d87b7c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;