import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Route contants
import * as ROUTES from './constants/routes';

// Components
import Home from './pages/Home';
import { AuthProvider } from './firebase/Auth';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <AuthProvider>
        <Router>
          <nav>
            <PrivateRoute exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          </nav>
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
