// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLUZSzjQcZaRqE55X6VUTL_s9poyab-Uo",
  authDomain: "dragon-news-4179e.firebaseapp.com",
  projectId: "dragon-news-4179e",
  storageBucket: "dragon-news-4179e.firebasestorage.app",
  messagingSenderId: "660789888135",
  appId: "1:660789888135:web:a5a1561e67291e80906422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;