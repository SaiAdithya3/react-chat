import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwicw52ymFbKd3C93pjAY_pgCKZZlJZaY",
  authDomain: "chat-c17e5.firebaseapp.com",
  projectId: "chat-c17e5",
  storageBucket: "chat-c17e5.appspot.com",
  messagingSenderId: "1071580928553",
  appId: "1:1071580928553:web:ad9e87778ffdaf9e9a9a38",
  measurementId: "G-LYX04BRLB8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();