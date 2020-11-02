import React from 'react';
import Credits from '../../Credits/Component';
import { H1 } from '../../styleguide/Typography';
import * as styles from './styles';

export default function Header(): JSX.Element {
  return (
    <styles.Header>
      <Credits />
      <div className="heading-wrapper centered">
        <H1>
          sunshine <span>app</span>
        </H1>
      </div>
    </styles.Header>
  );
}
