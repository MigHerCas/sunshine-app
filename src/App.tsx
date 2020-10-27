import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Constants
import { API_URL_LIST } from './constants/constants';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseConfig } from './firebase/config';

// Firebase hooks// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';

// Initialize firebase app
firebase.initializeApp(FirebaseConfig);

// Firebase global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

// Components
import { SignIn } from './components/SignIn';
import { MainPanel } from './components/MainPanel';

interface AppStateProps {
  loading: boolean;
  data: null | any;
}

function App(): JSX.Element {
  const [user] = useAuthState(auth);
  const [appState, setAppState] = useState<AppStateProps>({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setAppState({ ...appState, loading: true });
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }) => {
        setAppState({ loading: false, data: data });
      })
      .catch((error) => console.log(error));
  }, [setAppState]);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      <section>
        {user ? <MainPanel firestore={firestore} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
