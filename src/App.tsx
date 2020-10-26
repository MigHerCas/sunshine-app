import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import { AuthProvider } from './firebase/auth';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={SignUp} /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
