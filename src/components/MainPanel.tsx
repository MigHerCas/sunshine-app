import React from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';

interface Props {
  firestore: firebase.firestore.Firestore;
}

interface SearchProps {
  key: string;
  name: string;
}

export function MainPanel({ firestore }: Props): JSX.Element {
  const searchesRef = firestore.collection('searched');
  const query = searchesRef.orderBy('createdAt').limitToLast(10);

  const [searches] = useCollectionData<SearchProps>(query, { idField: 'id' });

  return (
    <>
      <main>
        {searches &&
          searches.map(({ key, name }) => <SearchItem key={key} name={name} />)}
      </main>
    </>
  );
}

function SearchItem({ key, name }: SearchProps) {
  return (
    <>
      <div>
        <p>Key: {key}</p>
        <p>Name: {name}</p>
      </div>
    </>
  );
}
