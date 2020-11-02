import React from 'react';
import { H2 } from '../styleguide/Typography';
import * as styles from './styles';

export default function Footer(): JSX.Element {
  return (
    <styles.Credentials>
      <div className="credential shadow border round">
        <H2 className="neutral">Login</H2>
        <form>
          <input
            className="text-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <div className="form-actions login">
            <button className="google"></button>
            <button className="primary"></button>
          </div>
          <input
            className="text-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </form>
      </div>
      <span className="delimiter">OR</span>
      <div className="credential shadow border round">
        <H2 className="neutral">Sign up</H2>
        <form>
          <input
            className="text-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <div className="form-actions signup">
            <button className="secondary"></button>
          </div>
          <input
            className="text-input"
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
