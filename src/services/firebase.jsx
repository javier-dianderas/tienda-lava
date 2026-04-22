// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm9tm2kqgdrzKGEhkYlsEmzMGT5JMuX6Q",
    authDomain: "tienda-lava.firebaseapp.com",
    projectId: "tienda-lava",
    storageBucket: "tienda-lava.firebasestorage.app",
    messagingSenderId: "22301465189",
    appId: "1:22301465189:web:16d5b2bee9aeec3837c48c",
    measurementId: "G-PW19TXBZ6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);