// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-app-web.firebaseapp.com",
    projectId: "mern-blog-app-web",
    storageBucket: "mern-blog-app-web.appspot.com",
    messagingSenderId: "812937887510",
    appId: "1:812937887510:web:9d80db8a9f48df434bda37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);