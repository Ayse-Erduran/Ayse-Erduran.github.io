// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js"
import {FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID} from "./firebase-config.js"


const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);   

const loginButton = document.getElementById("login-button");
loginButton?.addEventListener("click", () => signIn());

const resetButton = document.getElementById("reset-button");
resetButton?.addEventListener("click", () => resetPassword());


const signUpButton = document.getElementById("signup-button");
signUpButton?.addEventListener("click", () => signUp());

function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            localStorage.setItem('verifiedUser', true);
            navigateToPage("unspeakables");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ERRORCODE: ", errorCode);
            console.log("ERRORMESSAGE:", errorMessage);
        });  
}   

function navigateToPage(page) {
    const oldUrlArr = window.location.href.split("/");
    const newUrl = oldUrlArr.slice(0, oldUrlArr.length - 1).join("/");
    window.location.href = newUrl + "/" + page;
}

function resetPassword() {
    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
        console.log("EMAIL SENT");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR:", errorMessage);
    });
}

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigateToPage("unspeakables");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });            
}  

