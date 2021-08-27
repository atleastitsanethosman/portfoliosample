import '../styles/styles.css'
import Nav from './Nav';
import Footer from './footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFile, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { fab } from'@fortawesome/free-brands-svg-icons';

library.add(fab, faFile, faEnvelopeSquare,)

export default function Main() {
  
  const [currentPage, setCurrentPage] = useState('') 
  
  const renderFrame = () => {
    if (currentPage === 'About') {
      return <About />
    }
    // if (currentPage === 'Portfolio') {
    //     return <Portfolio />
    // }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'Contact') {
        return <Contact />
    }
    return <About />
    }

  const pageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} pageChange={pageChange}/>
      {renderFrame()}
      <Footer />
    </div>
  );
}


