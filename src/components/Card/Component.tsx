import React from 'react';
import { H2 } from '../styleguide/Typography';
import * as styles from './styles';

interface Props {
  town: string;
  province: string;
  temperature: number;
  rain: number;
}

export default function Card({
  town,
  province,
  temperature,
  rain,
}: Props): JSX.Element {
  return (
    <styles.Card className="border shadow round centered">
      <H2 className="card__heading">{town}</H2>
      <span className="card__subheading big">{province}</span>
      <div className="card__details">
        <div className="detail">
          <strong>{temperature} °</strong>
          <span>Temperature</span>
        </div>
        <div className="detail">
          <strong>{rain}%</strong>
          <span>Rain probability</span>
        </div>
      </div>
    </styles.Card>
  );
}
