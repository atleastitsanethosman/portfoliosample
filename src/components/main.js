import '../styles/styles.css'
import Nav from './Nav';
import Footer from './footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFile, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { fab } from'@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons"
import { BrowserRouter as Router, Route } from 'react-router-dom';

library.add(fab, fas, faFile, faEnvelopeSquare,)

export default function Main() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path={process.env.PUBLIC_URL} component={About} />
        <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
        <Route exact path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
        <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Footer />
      </div>
    </Router>
  );
}