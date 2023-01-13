import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJvfOue_03LjyuIcxxfDYIg42_kFE2Mmc",
  authDomain: "netflix-fd2ce.firebaseapp.com",
  projectId: "netflix-fd2ce",
  storageBucket: "netflix-fd2ce.appspot.com",
  messagingSenderId: "929281323193",
  appId: "1:929281323193:web:f30788ed7af3cc5773ab68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
