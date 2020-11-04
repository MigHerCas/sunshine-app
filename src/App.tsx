import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { EuiComboBoxOptionOption } from '@elastic/eui';

// Constants
import { API_URL_LIST } from './constants/constants';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseConfig } from './firebase/config';

// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Initialize firebase app
firebase.initializeApp(FirebaseConfig);

// Firebase global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

firebase.firestore().settings({ experimentalForceLongPolling: true });

// Utils
import { convertDataToComboOption } from './utils/dataMapping';

// Types
import { Town } from './types/types';

// Components
import ComboBox from './components/ComboBox/ComboBox';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Credentials from './components/Credentials/Credentials';
import { CardsContainer } from './components/CardsContainer/styles';
import Card from './components/Card/Card';
import SignOut from './components/SignOut/SignOut';
import { Container } from './components/layout/Container/styles';
import { Credits } from './components/Credits/styles';

function App(): JSX.Element {
  // Firebase authentication
  const [user] = useAuthState(auth);

  // Firestore storage
  const searchesRef = firestore.collection('searches');
  const query = searchesRef.orderBy('NOMBRE').limit(3);
  const [values] = useCollectionData<Town>(query, { idField: 'id' });

  // const [loading, setLoading] = useState<boolean>(false);
  const [dataFromApi, setDataFromApi] = useState<EuiComboBoxOptionOption[]>([]);
  const [activeOptions, setActiveOptions] = useState<EuiComboBoxOptionOption[]>(
    []
  );

  useEffect(() => {
    // Firestore intiial fetch
    // We need to convert from CollectionData into EuiComboBoxOptionOption[]
    values && setActiveOptions(convertDataToComboOption(values));
  }, [values]);

  useEffect(() => {
    // API
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<Town[]>) => {
        console.log('Api fetch');
        setDataFromApi(convertDataToComboOption(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Credits />
      <Header />
      <Container>
        {user ? (
          <>
            <ComboBox
              comboBoxData={dataFromApi}
              activeOptions={activeOptions}
              setActiveOptions={setActiveOptions}
              searchesRef={searchesRef}
            />

            <CardsContainer>
              <Card
                town="Barcelona"
                province="Cataluña"
                temperature={1}
                rain={1}
              />
            </CardsContainer>
            <SignOut auth={auth} />
          </>
        ) : (
          <Credentials auth={auth} />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
