import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

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
import ComboBox from './components/ComboBox';

// Types
import { Town } from './types/types';
import { EuiComboBoxOptionOption } from '@elastic/eui';

interface AppStateProps {
  loading: boolean;
  searchOptions: EuiComboBoxOptionOption[];
}

function App(): JSX.Element {
  const [user] = useAuthState(auth);
  const [appState, setAppState] = useState<AppStateProps>({
    loading: false,
    searchOptions: [],
  });

  useEffect(() => {
    setAppState({ ...appState, loading: true });
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<Town[]>) => {
        /* We map our data array to convert it into a valid EuiComboBoxOptionOption
         array that ComboBox can process */
        const mappedOptions = data.map(
          ({ NOMBRE, CODIGOINE, CODPROV }: Town): EuiComboBoxOptionOption => {
            return {
              label: NOMBRE,
              key: CODIGOINE,
              value: CODPROV,
            };
          }
        );

        setAppState({
          loading: false,
          searchOptions: mappedOptions,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      <section>
        {user ? <MainPanel firestore={firestore} /> : <SignIn auth={auth} />}
        <ComboBox searchOptions={appState.searchOptions} />
      </section>
    </div>
  );
}

export default App;
