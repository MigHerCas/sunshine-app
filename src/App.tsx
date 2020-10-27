import React from 'react';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseConfig } from './firebase/config';

// Firebase hooks// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// Initialize firebase app
firebase.initializeApp(FirebaseConfig);

// Firebase global variables
const auth = firebase.auth();
// const firestore = firebase.firestore();

// Components
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';

function App(): JSX.Element {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut auth={auth} />
      </header>
      {console.log(user)}
      {/* <section>{user ? <ChatRoom /> <></> : <SignIn />}</section> */}
      <section>{user && <SignIn auth={auth} />}</section>
    </div>
  );
}

export default App;
