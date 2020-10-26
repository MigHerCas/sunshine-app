import React, { useCallback } from 'react';
import { RouterProps, withRouter } from 'react-router';
import FirebaseApp from '../firebase/Base';

const SignUp = ({ history }: RouterProps) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseApp.auth().createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        // Successfully signed up -> redirect to /
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
