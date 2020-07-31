import React, { useState } from "react";
import FirebaseContext from "./context";
import firebase from "firebase";

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLoginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterUser = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  const handlePasswordReset = async (email) => {
    try {
      await firebase.auth.sendPasswordResetEmail(email);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePasswordUpdate = async (password) => {
    try {
      await firebase.auth.currentUser.updatePassword(password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        setUser,
        handleLoginUser,
        handleRegisterUser,
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
