import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCI2omawJM7qohSFcyMey1-YQ1KoDqeuOM",
    authDomain: "crwn-db-a9b7a.firebaseapp.com",
    projectId: "crwn-db-a9b7a",
    storageBucket: "crwn-db-a9b7a.appspot.com",
    messagingSenderId: "933159446784",
    appId: "1:933159446784:web:f733d97e386495a917abe5",
    measurementId: "G-1QHR2J5WZX"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;