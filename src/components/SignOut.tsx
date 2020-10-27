import React from 'react';

interface Props {
  auth: any;
}

export function SignOut({ auth }: Props): JSX.Element | null {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}
