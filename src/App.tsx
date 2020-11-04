import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { EuiComboBoxOptionOption } from '@elastic/eui';

// Constants
import { API_URL_LIST } from './constants/constants';

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

import { FirebaseConfig } from './firebase/config';

// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';

// Initialize firebase app
firebase.initializeApp(FirebaseConfig);

// Firebase global variables
const auth = firebase.auth();

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

  const [dataFromApi, setDataFromApi] = useState<EuiComboBoxOptionOption[]>([]);
  const [activeOptions, setActiveOptions] = useState<EuiComboBoxOptionOption[]>(
    []
  );

  useEffect(() => {
    // API
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<Town[]>) => {
        setDataFromApi(convertDataToComboOption(data));
      })
      .catch((error) => console.log(error));

    // Localstorage fetch
    const localStorageData = localStorage.getItem('activeOptions');

    localStorageData && setActiveOptions(JSON.parse(localStorageData) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('activeOptions', JSON.stringify(activeOptions));
  }, [activeOptions]);

  return (
    <>
      <Credits />
      <Header />
      <Container>
        {user ? (
          <>
            {/**
             * @name ComboBox
             * @return {EuiComboBox}
             *
             * Read utils/note.md
             */}
            <ComboBox
              comboBoxData={dataFromApi}
              activeOptions={activeOptions}
              setActiveOptions={setActiveOptions}
            />

            <CardsContainer>
              {activeOptions.map(
                ({ key, label }, _) =>
                  key && <Card townName={label} key={_} provinceName={key} />
              )}
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
