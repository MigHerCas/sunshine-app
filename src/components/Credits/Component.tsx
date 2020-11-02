import React from 'react';
import { H3 } from '../styleguide/Typography';
import * as styles from './styles';

export default function Credits(): JSX.Element {
  return (
    <styles.Credits>
      <H3 className="bold">IOMED</H3>
      <H3 className="thin">MIGUEL HERNANZ</H3>
    </styles.Credits>
  );
}
