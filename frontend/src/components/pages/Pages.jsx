import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Reclamation from "../reclamation/Reclamation";
import Boutique from "../services/Boutique";

function Pages() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Effectue une requête GET à votre backend pour récupérer des données
    axios.get("http://localhost:3001/admin")
      .then(response => {
        // Met à jour l'état avec les données reçues du backend
        setData(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/boutique' component={Boutique} />
          <Route exact path='/reclamation' component={Reclamation} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
