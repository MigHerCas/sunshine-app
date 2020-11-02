import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

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

// Utils
import { convertDataToComboOption } from './utils/dataMapping';

// Types
import { EuiComboBoxOptionOption } from '@elastic/eui';
import { Town } from './types/types';

// Components
import ComboBox from './components/ComboBox';
import Header from './components/layout/Header/Component';
import Footer from './components/layout/Footer/Component';
import Credentials from './components/Credentials/Component';
import { CardsContainer } from './components/CardsContainer/styles';
import Card from './components/Card/Component';
import SignOut from './components/SignOut/Component';

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
    console.log('Values', values);
  }, [values]);

  useEffect(() => {
    searchesRef.add({
      activeOptions,
    });
  }, [setActiveOptions]);

  //  Data fetching API data fetch + converts it to type EuiComboBoxOptionOption[]
  useEffect(() => {
    // setLoading(true);

    // API
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<Town[]>) => {
        // setLoading(false);
        setDataFromApi(convertDataToComboOption(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <main className="app">
        {user ? (
          <>
            <section className="search-container">
              <input
                type="text"
                name="search"
                id="search"
                className="search-input round shadow border"
                placeholder="Search"
              />
            </section>

            <ComboBox
              comboBoxData={dataFromApi}
              activeOptions={activeOptions}
              setActiveOptions={setActiveOptions}
              searchesRef={searchesRef}
            />
            <CardsContainer>
              <Card town="" province="" temperature={1} rain={1} />
            </CardsContainer>
            <SignOut auth={auth} />
          </>
        ) : (
          <Credentials auth={auth} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
