import React, { useEffect, useState } from 'react';
import FirebaseApp from './Base';

interface ContextProps {
  currentUser: any;
}

export const AuthContext = React.createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    FirebaseApp.auth().onAuthStateChanged((user: any) => {
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
