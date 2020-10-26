import React from 'react';
import App from '../firebase/Base';

export default function Home(): JSX.Element {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => App.auth().signOut()}>Sign out</button>
    </>
  );
}
