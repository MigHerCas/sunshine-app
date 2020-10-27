import React from 'react';
import firebase from 'firebase';

interface Props {
  auth: any;
}

export function SignIn({ auth }: Props): JSX.Element {
  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleSignInWithEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target.elements);

    // const { email, password } = event.target.elements;

    // auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSignInWithEmail}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
}
