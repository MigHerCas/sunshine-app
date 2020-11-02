import React from 'react';
import * as styles from './styles';

// Icons
import TypescriptIcon from '../Icons/typescript.svg';
import FirebaseIcon from '../Icons/firebase.svg';
import ReactIcon from '../Icons/react.svg';
import StyledComponentsIcon from '../Icons/styled-components.svg';
import FigmaIcon from '../Icons/figma.svg';
import CodeIcon from '../Icons/vscode.svg';

import { H3 } from '../../styleguide/Headings';

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
