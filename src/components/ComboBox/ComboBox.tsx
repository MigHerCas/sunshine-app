import React, { Dispatch, SetStateAction } from 'react';
import { EuiComboBox, EuiComboBoxOptionOption } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import * as styles from './styles';

interface Props {
  comboBoxData: EuiComboBoxOptionOption[];
  activeOptions: EuiComboBoxOptionOption[];
  setActiveOptions: Dispatch<SetStateAction<EuiComboBoxOptionOption[]>>;
}

export default function ComboBox({
  comboBoxData,
  activeOptions,
  setActiveOptions,
}: Props): JSX.Element {
  const onChangeHandler = (updatedOptions: EuiComboBoxOptionOption[]) => {
    setActiveOptions(updatedOptions);
  };

  return (
    <styles.ComboBox>
      <EuiComboBox
        options={comboBoxData}
        selectedOptions={activeOptions}
        onChange={onChangeHandler}
        isClearable
        fullWidth
        data-test-subj="searchedTowns"
      />
    </styles.ComboBox>
  );
}
