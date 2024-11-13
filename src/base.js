import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database"; // Firebase Realtime Database module

// Initialize Firebase using environment variables
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // The API key from .env
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // The Auth Domain from .env
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL, // The Database URL from .env
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is the default export
export default base;
