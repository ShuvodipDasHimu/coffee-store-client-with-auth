// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYDeu7nerFtQO4flOsGz1T3gNkZFuxEOY",
  authDomain: "coffee-store-app-5335f.firebaseapp.com",
  projectId: "coffee-store-app-5335f",
  storageBucket: "coffee-store-app-5335f.firebasestorage.app",
  messagingSenderId: "794570509104",
  appId: "1:794570509104:web:bc0d4169c07b7dbff216f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);