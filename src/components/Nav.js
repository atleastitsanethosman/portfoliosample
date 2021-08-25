import React from 'react';
import ('../styles/styles.css')

export default function Nav() {
  
  return (
    <nav className="main-header-menu">
      <header class="header">
      <h1>Ian Hennessey</h1>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Applications</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      </header>
      <div class = "ianh">
        <h2>Portfolio</h2>
      </div>
    </nav>
  );
}
