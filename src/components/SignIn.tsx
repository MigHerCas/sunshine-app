import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

interface Props {
  auth: any;
}

interface SignInProps {
  email: string;
  password: string;
}

export function SignIn({ auth }: Props): JSX.Element {
  const [signInData, setSignInData] = useState<SignInProps>({
    email: '',
    password: '',
  });

  useEffect(() => {
    setSignInData(signInData);
  }, [signInData]);

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleSignInWithEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = signInData;
    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSignInWithEmail}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setSignInData({ ...signInData, email: e.currentTarget.value })
            }
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setSignInData({ ...signInData, password: e.currentTarget.value })
            }
          />
        </label>
        <button type="submit">Log in</button>
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
}
