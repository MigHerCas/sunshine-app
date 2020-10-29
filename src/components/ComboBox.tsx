import React, { useEffect, useState } from 'react';
import { EuiComboBox, EuiComboBoxOptionOption } from '@elastic/eui';

// Firebase hooks
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Types
import { Town } from '../types/types';

interface Props {
  searchOptions: EuiComboBoxOptionOption[];
  firestore: firebase.firestore.Firestore;
}

export default function ComboBox({
  searchOptions,
  firestore,
}: Props): JSX.Element {
  const searchesRef = firestore.collection('searches');
  const query = searchesRef.orderBy('nombre').limitToLast(25);
  const [values, loading] = useCollectionData<Town>(query);

  // Whole set of options
  const [options, setOptions] = useState<EuiComboBoxOptionOption[]>([]);

  // Selected options that the user can interact with
  const [selectedOptions, setSelected] = useState<EuiComboBoxOptionOption[]>(
    []
  );

  // Load search options when mounted
  useEffect(() => {
    setOptions(searchOptions);
  }, [searchOptions]);

  useEffect(() => {
    console.log(values);
  }, [loading]);

  // Handlers
  const onChangeHandler = (selectedOptions: EuiComboBoxOptionOption[]) => {
    setSelected(selectedOptions);
  };

  const onCreateOptionHandler = (
    searchValue: string,
    flattenedOptions: EuiComboBoxOptionOption[] = []
  ) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();
    if (!normalizedSearchValue) {
      return;
    }
    const newOption = {
      label: searchValue,
    };

    const optionExists = flattenedOptions.find(
      ({ label }: EuiComboBoxOptionOption) =>
        label.trim().toLowerCase() === normalizedSearchValue
    );

    // Create the option if it doesn't exist.
    if (!optionExists) {
      setOptions([...options, newOption]);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };

  return (
    <div>
      {/* <ul>
        {searches?.map(({ CODIGOINE, NOMBRE }) => (
          <li key={CODIGOINE}>{NOMBRE}</li>
        ))}
      </ul> */}
      <EuiComboBox
        placeholder="Select or create options"
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChangeHandler}
        onCreateOption={onCreateOptionHandler}
        isClearable={true}
        data-test-subj="demoComboBox"
      />
    </div>
  );
}
