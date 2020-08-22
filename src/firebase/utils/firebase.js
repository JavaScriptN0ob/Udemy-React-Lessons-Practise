import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC_5NthOX_R48M1JzWnlVByy3XY24Ci4Co",
  authDomain: "wayne-db.firebaseapp.com",
  databaseURL: "https://wayne-db.firebaseio.com",
  projectId: "wayne-db",
  storageBucket: "wayne-db.appspot.com",
  messagingSenderId: "161420641377",
  appId: "1:161420641377:web:c10dfa72697240a8319620",
  measurementId: "G-PV88T89HQZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;