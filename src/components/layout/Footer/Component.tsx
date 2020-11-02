import React from 'react';
import * as styles from './styles';

import TypescriptIcon from '../Icons/typescript.svg';
import FirebaseIcon from '../Icons/firebase.svg';
import ReactIcon from '../Icons/react.svg';
// TODO: Change into styled-components
import SassIcon from '../Icons/sass.svg';
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
        <SassIcon />
        <FigmaIcon />
        <CodeIcon />
      </div>
    </styles.Footer>
  );
}
