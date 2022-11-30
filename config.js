import firebase from "firebase/app";
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_TQzjZTm7qR86eNIkxVW0c23RwZ3PHMI",
  authDomain: "projeto-71-f7edf.firebaseapp.com",
  projectId: "projeto-71-f7edf",
  storageBucket: "projeto-71-f7edf.appspot.com",
  messagingSenderId: "274269692860",
  appId: "1:274269692860:web:8492721d55be74c5f281b9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
