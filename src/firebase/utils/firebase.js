import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCNw-xTkeguo27kuBi-71cTV9CqCKt7gFc",
  authDomain: "crown-db-adb96.firebaseapp.com",
  databaseURL: "https://crown-db-adb96.firebaseio.com",
  projectId: "crown-db-adb96",
  storageBucket: "crown-db-adb96.appspot.com",
  messagingSenderId: "802699380931",
  appId: "1:802699380931:web:0b0c1f8577ebf1cef0fa76",
  measurementId: "G-DF4VXJ3HKL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;