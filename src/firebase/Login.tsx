import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, RouterProps } from 'react-router';
import FirebaseApp from './Base';
import { AuthContext } from './Auth';
import { Link } from 'react-router-dom';

const Login = ({ history }: RouterProps) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        // Sign in with email and password (this is the difference with SignUp.tsx)
        await FirebaseApp.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        <Link to="/signup">
          <button type="button">Create new account</button>
        </Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
