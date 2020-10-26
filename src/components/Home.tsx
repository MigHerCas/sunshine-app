import React from 'react';
import App from '../firebase/Base';

export default function Home(): React.ReactNode {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => App.auth().signOut()}>Sign out</button>
    </>
  );
}
