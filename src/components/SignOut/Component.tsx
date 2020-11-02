import React from 'react';
import * as styles from './styles';

interface Props {
  auth: firebase.auth.Auth;
}

export default function SignOut({ auth }: Props): JSX.Element {
  // Sign out handling
  if (auth.currentUser) {
    return (
      <styles.SignOutButton onClick={() => auth.signOut()}>
        Sign Out
      </styles.SignOutButton>
    );
  } else {
    return <></>;
  }
}
