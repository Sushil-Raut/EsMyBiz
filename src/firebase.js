import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBSFgIniVfnnlKe2GsZC0L4Fya792mXR7s",
  authDomain: "esmybizdatabase.firebaseapp.com",
  projectId: "esmybizdatabase",
  storageBucket: "esmybizdatabase.firebasestorage.app",
  messagingSenderId: "18728439452",
  appId: "1:18728439452:web:c3b21f1d67de4d1d226759"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };