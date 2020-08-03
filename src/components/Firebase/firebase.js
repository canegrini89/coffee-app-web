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
  if (!app.apps.length) {
    app.initializeApp(config);
  }

  /* Helper */

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
        db.collection("venues")
          .doc(authUser.uid)
          .set({
            email: authUser.email,
            id: authUser.uid,
          })
          .then(function () {
            next(authUser);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      } else {
        fallback();
      }
    });

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        db,
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
