import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAllfz_dF_zA893_oI4q_zjbRXFkgETQyw",
	authDomain: "lab06-31f47.firebaseapp.com",
	projectId: "lab06-31f47",
	storageBucket: "lab06-31f47.appspot.com",
	messagingSenderId: "176754340763",
	appId: "1:176754340763:web:cc78e7f9aa54eff241e73e",
	measurementId: "G-0JH5WWD368"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
