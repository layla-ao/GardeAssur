import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"

import Reclamation from "../reclamation/Reclamation"
import Boutique from "../services/Boutique"

const Pages = () => {
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
  )
}

export default Pages
