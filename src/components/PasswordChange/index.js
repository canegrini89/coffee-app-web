import React, { useState } from "react";

import { withFirebase } from "../Firebase";

const PasswordChangeForm = ({ firebase }) => {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    try {
      await firebase.doPasswordUpdate(passwordOne);
    } catch (error) {
      setError(error);
    }

    event.preventDefault();
  };

  const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={(e) => setPasswordOne(e.target.value)}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={(e) => setPasswordTwo(e.target.value)}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default withFirebase(PasswordChangeForm);
