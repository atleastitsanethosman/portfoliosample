import React from 'react';
import { Link } from 'react-router-dom';

const headerImage = process.env.PUBLIC_URL + "/images/traversebay.png"

const styles = {
  heroStyle: {
      backgroundImage: `url(${headerImage})`
  }
}

export default function Nav() {
  
  return (
    <nav className="main-header-menu">
      <div className="ianh" style={styles.heroStyle}></div>
      <header className="header">
        <h1>Ian Hennessey</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    </nav>
  );
}
