import React, { useEffect, useState } from 'react';
import { EuiComboBox, EuiComboBoxOptionOption } from '@elastic/eui';

interface Props {
  searchOptions: EuiComboBoxOptionOption[];
}

export default function ComboBox({ searchOptions }: Props): JSX.Element {
  const [options, setOptions] = useState<EuiComboBoxOptionOption[]>([]);

  const [selectedOptions, setSelected] = useState<EuiComboBoxOptionOption[]>(
    []
  );

  // Load search options when mounted
  useEffect(() => {
    setOptions(searchOptions);
  }, [searchOptions]);

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
    // Create the option if it doesn't exist.
    const optionExists = flattenedOptions.find(
      ({ label }: EuiComboBoxOptionOption) =>
        label.trim().toLowerCase() === normalizedSearchValue
    );

    if (!optionExists) {
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
      onChange={onChangeHandler}
      onCreateOption={onCreateOptionHandler}
      isClearable={true}
      data-test-subj="demoComboBox"
    />
  );
}
