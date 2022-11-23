// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVw9TEkhpEAoHJffL5m_yw8sJ_3q_ILcU",
    authDomain: "assignment-client-12.firebaseapp.com",
    projectId: "assignment-client-12",
    storageBucket: "assignment-client-12.appspot.com",
    messagingSenderId: "518809174365",
    appId: "1:518809174365:web:07c6315f06118aeffc68b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app