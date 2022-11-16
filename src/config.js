import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAUiZmVmzployzRLmSxbQwvqK6Ln3NMHGg",
    authDomain: "spaceworkdb.firebaseapp.com",
    projectId: "spaceworkdb",
    storageBucket: "spaceworkdb.appspot.com",
    messagingSenderId: "566684368926",
    appId: "1:566684368926:web:e187bd632f4f68b9ccae0f",
    measurementId: "G-YH11WFX1W1"
  };

const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)
export {app,db}
