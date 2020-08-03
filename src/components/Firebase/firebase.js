import React from "react";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import FirebaseContext from "./context";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const FirebaseProvider = ({ children }) => {
  app.initializeApp(config);

  /* Helper */

  const serverValue = app.database.ServerValue;
  const emailAuthProvider = app.auth.EmailAuthProvider;

  /* Firebase APIs */

  const auth = app.auth();
  const db = app.firestore();

  // *** Auth API ***

  const handleCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  const handleSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const handleSignOut = () => auth.signOut();

  const handlePasswordReset = (email) => auth.sendPasswordResetEmail(email);

  const handlePasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  const handleAuthUserListener = (next, fallback) =>
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        //   db.collection("users").doc(authUser.uid).update({
        //     email: authUser.email,
        //     password: authUser.password
        //   })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
      } else {
        fallback();
      }
    });

  // *** User API ***

  const user = (uid) => db.ref(`users/${uid}`);

  // const users = () => db.ref("users");

  //   // *** Message API ***

  //   message = uid => this.db.ref(`messages/${uid}`);

  //   messages = () => this.db.ref('messages');

  return (
    <FirebaseContext.Provider
      value={{
        serverValue,
        emailAuthProvider,
        auth,
        db,
        // user,
        // users,
        handleAuthUserListener,
        handleCreateUserWithEmailAndPassword,
        handleSignInWithEmailAndPassword,
        handleSignOut,
        handlePasswordReset,
        handlePasswordUpdate,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
