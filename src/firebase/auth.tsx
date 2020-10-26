import React, { useEffect, useState } from 'react';
import app from './base.js';

export const AuthContext = React.createContext({});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
