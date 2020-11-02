import React from 'react';
import { H2, Span, Strong } from '../styleguide/Typography';
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
      <Span className="card__subheading big">{province}</Span>
      <div className="card__details">
        <div className="detail">
          <Strong>{temperature} °</Strong>
          <Span>Temperature</Span>
        </div>
        <div className="detail">
          <Strong>{rain}%</Strong>
          <Span>Rain probability</Span>
        </div>
      </div>
    </styles.Card>
  );
}
