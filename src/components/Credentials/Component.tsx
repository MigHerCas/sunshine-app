import React from 'react';
import { Button } from '../styleguide/Button';
import { Input } from '../styleguide/Input';
import { H2, Span } from '../styleguide/Typography';
import * as styles from './styles';

export default function Footer(): JSX.Element {
  return (
    <styles.Credentials>
      <div className="credential shadow border round">
        <H2 className="neutral">Login</H2>
        <form>
          <Input type="email" name="email" id="email" placeholder="Email" />
          <div className="form-actions login">
            <button className="google"></button>
            <button className="primary"></button>
          </div>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </form>
      </div>
      <Span className="delimiter">OR</Span>
      <div className="credential shadow border round">
        <H2 className="neutral">Sign up</H2>
        <form>
          <Input type="email" name="email" id="email" placeholder="Email" />
          <div className="form-actions signup">
            <Button className="secondary"></Button>
          </div>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </form>
      </div>
    </styles.Credentials>
  );
}
