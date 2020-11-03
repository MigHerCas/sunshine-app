import React, { useEffect, useState } from 'react';
// import axios, { AxiosResponse } from 'axios';

// Constants
// import { API_URL_LIST } from './constants/constants';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { FirebaseConfig } from './firebase/config';

// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Initialize firebase app
// firebase.initializeApp(FirebaseConfig);
firebase.initializeApp({
  apiKey: 'AIzaSyD7CHIT0VpArf16ZJDf8rsvyzQQmVLYJt4',
  authDomain: 'sunshineapp-725c4.firebaseapp.com',
  databaseURL: 'https://sunshineapp-725c4.firebaseio.com',
  projectId: 'sunshineapp-725c4',
  storageBucket: 'sunshineapp-725c4.appspot.com',
  messagingSenderId: '251229924882',
  appId: '1:251229924882:web:f97d0e270ccac7fb9cb2cb',
  measurementId: 'G-P506GB2BHS',
});

// Firebase global variables
const auth = firebase.auth();
const firestore = firebase.firestore();
firebase.firestore().settings({ experimentalForceLongPolling: true });

// Utils

// Types
import { Town } from './types/types';

// Components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Credentials from './components/Credentials/Credentials';
import { CardsContainer } from './components/CardsContainer/styles';
import Card from './components/Card/Card';
import SignOut from './components/SignOut/SignOut';
import { Container } from './components/layout/Container/styles';
import { Credits } from './components/Credits/styles';

interface Ciudad {
  nombre: string;
}

function App(): JSX.Element {
  // Firebase authentication
  const [user] = useAuthState(auth);

  // Firestore storage
  const searchesRef = firestore.collection('searches');
  const query = searchesRef.orderBy('ciudad').limit(3);
  const [values] = useCollectionData<Town>(query, { idField: 'id' });

  // const [loading, setLoading] = useState<boolean>(false);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);

  useEffect(() => {
    // Firestore intiial fetch
    values && setCiudades(ciudades);
  }, [values]);

  return (
    <>
      <Credits />
      <Header />
      <Container>
        {user ? (
          <>
            <CardsContainer>
              {ciudades.map(({ nombre }, index) => {
                return (
                  <Card
                    key={index}
                    town={nombre}
                    province=""
                    temperature={1}
                    rain={1}
                  />
                );
              })}
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
