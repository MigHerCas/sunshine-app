import React from 'react';
import * as styles from './styles';

// Icons
import TypescriptIcon from '../../../lib/Icons/typescript.svg';
import FirebaseIcon from '../../../lib/Icons/firebase.svg';
import ReactIcon from '../../../lib/Icons/react.svg';
import StyledComponentsIcon from '../../../lib/Icons/styled-components.svg';
import FigmaIcon from '../../../lib/Icons/figma.svg';
import CodeIcon from '../../../lib/Icons/vscode.svg';

import { H3 } from '../../styleguide/Typography';

export default function Footer(): JSX.Element {
  return (
    <styles.Footer className="border shadow">
      <div className="built-with__container">
        <TypescriptIcon />
        <FirebaseIcon />
        <ReactIcon />
        <H3 className="especial">BUILT WITH</H3>
        <StyledComponentsIcon />
        <FigmaIcon />
        <CodeIcon />
      </div>
    </styles.Footer>
  );
}
