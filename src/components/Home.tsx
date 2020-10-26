import React from 'react';
import '../styles/App.scss';

export default function Home(): JSX.Element {
  return (
    <div className="App">
      <main className="main-container">
        <div>
          <form>
            <h1>Log in</h1>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </p>
            <p>
              <button type="submit">Log in</button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
