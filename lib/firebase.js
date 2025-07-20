import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi9kPjtfzoQAJBSDy88QtVE_vDth5MZls",
  authDomain: "nearbybites-a6c21.firebaseapp.com",
  projectId: "nearbybites-a6c21",
  storageBucket: "nearbybites-a6c21.firebasestorage.app",
  messagingSenderId: "1052720877778",
  appId: "1:1052720877778:web:413a5a3bf576fc76c95d0b",
  measurementId: "G-K9JH71DFHQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)