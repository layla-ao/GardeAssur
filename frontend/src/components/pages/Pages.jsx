import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../common/header/Header";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Reclamation from "../reclamation/Reclamation";
import Boutique from "../services/Boutique";
import Assurance from "../assurance/Assurance";
import Login from "../login/login"; // Assurez-vous que ce chemin est correct
import Signup from "../signup/Signup"; // Assurez-vous que ce chemin est correct

function Pages() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/boutique' component={Boutique} />
        <Route exact path='/reclamation' component={Reclamation} />
        <Route exact path='/assurance' component={Assurance} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Pages;
