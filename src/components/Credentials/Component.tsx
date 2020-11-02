import React, { useEffect, useState } from 'react';
import { Button } from '../styleguide/Button';
import { Input } from '../styleguide/Input';
import { H2, Span } from '../styleguide/Typography';
import * as styles from './styles';
import firebase from 'firebase';

interface Props {
  auth: firebase.auth.Auth;
}

interface SignInProps {
  email: string;
  password: string;
}
export default function Credentials({ auth }: Props): JSX.Element {
  // Sign in handling
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
            id="email"
            placeholder="Email"
          />
          <div className="form-actions login">
            <button className="google" onClick={handleSignInWithGoogle}>
              Google
            </button>
            <button className="primary" type="submit">
              Submit
            </button>
          </div>
          <Input
            onChange={(e) =>
              setSignInData({ ...signInData, password: e.currentTarget.value })
            }
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </form>
      </div>
      <Span className="delimiter">OR</Span>
      <div className="credential shadow border round">
        <H2 className="neutral">Sign up</H2>
        <form>
          <Input type="email" name="email" id="email" placeholder="Email" />
          <div className="form-actions signup">
            <Button className="secondary"></Button>
          </div>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </form>
      </div>
    </styles.Credentials>
  );
}
