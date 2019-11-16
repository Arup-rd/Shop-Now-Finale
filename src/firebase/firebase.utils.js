import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyAW5XWWuGvQ7ql-d6dwcILBjDIQhcQzE9E",
    authDomain: "shop-now-2f5e0.firebaseapp.com",
    databaseURL: "https://shop-now-2f5e0.firebaseio.com",
    projectId: "shop-now-2f5e0",
    storageBucket: "shop-now-2f5e0.appspot.com",
    messagingSenderId: "5345276100",
    appId: "1:5345276100:web:6d71123c9f7de1b46d1991",
    measurementId: "G-ZWNDVFMGY3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
