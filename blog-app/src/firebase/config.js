import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDklmbQ5lwk0C7hjn9AvuFrRJb2vKJhXGw",
  authDomain: "blog-application-d2077.firebaseapp.com",
  projectId: "blog-application-d2077",
  storageBucket: "blog-application-d2077.firebasestorage.app",
  messagingSenderId: "823455603938",
  appId: "1:823455603938:web:febec1e96e90a34af992bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)