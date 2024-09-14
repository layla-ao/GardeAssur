// App.js (composant parent)
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from '../signup/Signup';
import Login from '../login/login';
import Pages from '../pages/Pages';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Fonction de gestion de la connexion réussie
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login'>
          {loggedIn ? <Redirect to="/pages" /> : <Login onLoginSuccess={handleLoginSuccess} />}
        </Route>
        <Route path='/pages'>{loggedIn ? <Pages /> : <Redirect to="/login" />}</Route>
        <Redirect from='/' to='/login' />
      </Switch>
    </Router>
  );
}

export default App;
