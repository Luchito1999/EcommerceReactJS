// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj3h-IQfh1ZEN53aW-WcnIMBJSbkPXjYk",
  authDomain: "lucho-store.firebaseapp.com",
  projectId: "lucho-store",
  storageBucket: "lucho-store.firebasestorage.app",
  messagingSenderId: "1021731196347",
  appId: "1:1021731196347:web:dc47dc15b693b4a886089e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);