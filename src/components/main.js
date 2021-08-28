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
import { BrowserRouter as Router, Route } from 'react-router-dom';

library.add(fab, faFile, faEnvelopeSquare,)

export default function Main() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}