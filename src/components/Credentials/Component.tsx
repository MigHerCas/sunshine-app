import React, { useEffect, useState } from 'react';
import { Button } from '../styleguide/Button';
import { Input } from '../styleguide/Input';
import { H2, Span } from '../styleguide/Typography';
import * as styles from './styles';
import firebase from 'firebase';

interface Props {
  auth: firebase.auth.Auth;
}

interface AuthProps {
  email: string;
  password: string;
}
export default function Credentials({ auth }: Props): JSX.Element {
  // Sign up handling
  const [signUpData, setSignUpData] = useState<AuthProps>({
    email: '',
    password: '',
  });

  // Sign in handling
  const [signInData, setSignInData] = useState<AuthProps>({
    email: '',
    password: '',
  });

  useEffect(() => {
    setSignInData(signInData);
  }, [signInData]);

  useEffect(() => {
    setSignUpData(signUpData);
  }, [signUpData]);

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  };

  const handleSignInWithEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = signInData;

    auth.signInWithEmailAndPassword(email, password);
  };

  const handleSignUpWithEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = signUpData;

    auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <styles.Credentials>
      <div className="credential shadow border round">
        <H2 className="neutral">Login</H2>
        <form onSubmit={handleSignInWithEmail}>
          <Input
            type="email"
            onChange={(e) =>
              setSignInData({ ...signInData, email: e.currentTarget.value })
            }
            name="email"
            id="signInEmail"
            placeholder="Email"
          />
          <Input
            onChange={(e) =>
              setSignInData({ ...signInData, password: e.currentTarget.value })
            }
            type="password"
            name="password"
            id="signInPassword"
            placeholder="Password"
          />
          <div className="form-actions login">
            <Button
              className="google"
              onClick={handleSignInWithGoogle}
            ></Button>
            <Button className="primary" type="submit"></Button>
          </div>
        </form>
      </div>
      <Span className="delimiter">OR</Span>
      <div className="credential shadow border round">
        <H2 className="neutral">Sign up</H2>
        <form onSubmit={handleSignUpWithEmail}>
          <Input
            type="email"
            name="email"
            id="signUpEmail"
            placeholder="Email"
            onChange={(e) =>
              setSignUpData({ ...signUpData, email: e.currentTarget.value })
            }
          />
          <Input
            type="password"
            name="password"
            id="signUpPassword"
            placeholder="Password"
            onChange={(e) =>
              setSignUpData({ ...signUpData, password: e.currentTarget.value })
            }
          />
          <div className="form-actions signup">
            <Button className="secondary"></Button>
          </div>
        </form>
      </div>
    </styles.Credentials>
  );
}
