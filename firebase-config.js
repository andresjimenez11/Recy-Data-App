// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDG_OanrDCjz1Y1ScMKKXMvTUTnuRxRZZY",
  authDomain: "recy-data-app.firebaseapp.com",
  projectId: "recy-data-app",
  storageBucket: "recy-data-app.firebasestorage.app",
  messagingSenderId: "42635884116",
  appId: "1:42635884116:web:c81efb95b9012eb2871fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//const db = getFirestore(app);

export default app;


