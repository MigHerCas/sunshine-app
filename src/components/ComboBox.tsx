import React, { useState } from 'react';
import { EuiComboBox, EuiComboBoxOptionOption } from '@elastic/eui';
import { staticOptions } from '../utils/staticOptions';

export default function ComboBox(): JSX.Element {
  const [options, setOptions] = useState<EuiComboBoxOptionOption[]>(
    staticOptions
  );

  const [selectedOptions, setSelected] = useState<EuiComboBoxOptionOption[]>([
    options[2],
    options[4],
  ]);

  const onChange = (selectedOptions: EuiComboBoxOptionOption[]) => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (
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

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        (option: EuiComboBoxOptionOption) =>
          option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      setOptions([...options, newOption]);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };

  return (
    <EuiComboBox
      placeholder="Select or create options"
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
      isClearable={true}
      data-test-subj="demoComboBox"
    />
  );
}
