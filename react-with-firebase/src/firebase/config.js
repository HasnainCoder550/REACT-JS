// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTs4zu0kmjjSg-5GWy5-J0dmR74M83wGk",
  authDomain: "react-with-firebase-b5949.firebaseapp.com",
  projectId: "react-with-firebase-b5949",
  storageBucket: "react-with-firebase-b5949.firebasestorage.app",
  messagingSenderId: "154761978984",
  appId: "1:154761978984:web:12a01c929d34f53f65c7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app