import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // Usar la instancia existente
  }

const db = firebase.firestore();

  export default{
    app: firebase.app(),
    db,

  };
  