import React, { Dispatch, SetStateAction } from 'react';
import { EuiComboBox, EuiComboBoxOptionOption } from '@elastic/eui';

interface Props {
  comboBoxData: EuiComboBoxOptionOption[];
  activeOptions: EuiComboBoxOptionOption[];
  setActiveOptions: Dispatch<SetStateAction<EuiComboBoxOptionOption[]>>;
  searchesRef: firebase.firestore.CollectionReference<
    firebase.firestore.DocumentData
  >;
}

export default function ComboBox({
  comboBoxData,
  activeOptions,
  setActiveOptions,
  searchesRef,
}: Props): JSX.Element {
  const onChangeHandler = async (updatedOptions: EuiComboBoxOptionOption[]) => {
    // Stores selected options into firestore db
    console.log(updatedOptions);
    console.log(searchesRef);

    setActiveOptions(updatedOptions);
  };

  return (
    <div>
      <EuiComboBox
        options={comboBoxData}
        selectedOptions={activeOptions}
        onChange={onChangeHandler}
        isClearable={true}
        data-test-subj="searchedTowns"
      />
      {activeOptions && (
        <ul>
          {activeOptions.map(({ label, key, value }) => {
            <li>
              <span>Label: {label}</span>
              <span>Key: {key}</span>
              <span>value: {value}</span>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
}
