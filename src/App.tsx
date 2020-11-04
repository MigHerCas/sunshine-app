import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// Constants
import { API_URL_LIST, FIRESTORE_COLLECTION } from './constants/constants';

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
  const [loading, setLoading] = useState<boolean>(false);

  // Firebase authentication
  const [user] = useAuthState(auth);

  // Firestore storage
  const collection = firestore.collection(FIRESTORE_COLLECTION);
  const query = collection.orderBy('nombre').limit(3);

  const [values] = useCollectionData<Ciudad[]>(query);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);

  // Data fetching API data fetch + converts it to type EuiComboBoxOptionOption[]
  useEffect(() => {
    setLoading(true);

    // We check if api has been cosumed to improve performance
    const isApiConsumed = localStorage.getItem('apiCheck');
    if (isApiConsumed) return;

    // API
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<Town[]>) => {
        console.log('Api:');

        const mappedDataFromApi: Town[] = data.map(
          ({ CODIGOINE, CODPROV, NOMBRE, NOMBRE_PROVINCIA }) => {
            return { CODIGOINE, CODPROV, NOMBRE, NOMBRE_PROVINCIA };
          }
        );

        console.log('Mapped:', mappedDataFromApi);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Update API to firebase
    // collection.doc(user?.uid).set();
    console.log('Values: Empty');
  }, [values]);

  useEffect(() => {
    // Update API to firebase
    // collection.doc(user?.uid).set();

    // Firestore intiial fetch
    console.log('Query:');
    console.log('Values:', values);
    // setCiudades(values);
  }, []);

  useEffect(() => {
    console.log('ciudades dice: ', ciudades);
    // collection.add({
    //   ciudades,
    // });
  }, [ciudades]);

  const submitHandle = (event: any): void => {
    event.preventDefault();
    const nuevaCiudad = {
      nombre: event.currentTarget[0].value,
    };

    setCiudades([...ciudades, nuevaCiudad]);
  };

  return (
    <>
      <Credits />
      <Header />
      <Container>
        {loading && <p>loading</p>}
        {user ? (
          <>
            <form onSubmit={(e) => submitHandle(e)}>
              <input type="text" name="text" />
              <button type="submit">Submit</button>
            </form>
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
