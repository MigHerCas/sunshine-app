import { EuiComboBoxOptionOption } from '@elastic/eui';
import { Town } from '../types/types';

/**
 * @name convertDataToComboOption
 * @param  {Town[]} data
 * @return {EuiComboBoxOptionOption[]}
 *
 * Converts data consumed from the API into valid options for EuiComboBox component
 * (type <EuiComboBoxOptionOption>).
 */
export function convertDataToComboOption(
  data: Town[]
): EuiComboBoxOptionOption[] {
  const mappedOptions: EuiComboBoxOptionOption[] = [];

  data.map(({ NOMBRE, NOMBRE_PROVINCIA }: Town): void => {
    mappedOptions.push({
      label: NOMBRE,
      key: NOMBRE_PROVINCIA,
    });
  });

  return mappedOptions;
}
