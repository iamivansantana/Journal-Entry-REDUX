import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoVZ7lH0YKZCCEyLnyWQkkBmMnR-Lq7Ak",
    authDomain: "react-app-journalapp-73481.firebaseapp.com",
    projectId: "react-app-journalapp-73481",
    storageBucket: "react-app-journalapp-73481.appspot.com",
    messagingSenderId: "12866299111",
    appId: "1:12866299111:web:6cf1cfdc830a518b49ee42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }