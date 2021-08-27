import React from 'react';

const styles = {
  heroStyle: {
      backgroundImage: "url(/images/traversebay.png)"
  }
}

export default function Nav({currentPage, pageChange}) {
  
  return (
    <nav className="main-header-menu">
      <div class = "ianh" style={styles.heroStyle}></div>
      <header class="header">
      <h1>Ian Hennessey</h1>
      <nav>
        <ul>
          <li>
            <a href="/About"
            onClick={(event) => {
              event.preventDefault();
              pageChange('About')}}
            >About</a>
          </li>
          <li>
            <a href="/Portfolio"
            onClick={(event) => {
              event.preventDefault();
              pageChange('Portfolio')}}
            >Portfolio</a>
          </li>
          <li>
            <a href="/Resume"
            onClick={(event) => {
              event.preventDefault();
              pageChange('Resume')}}
            >Resume</a>
          </li>
          <li>
            <a href="/Contact"
            onClick={(event) => {
              event.preventDefault();
              pageChange('Contact')}}
            >Contact</a>
          </li>
        </ul>
      </nav>
     
      </header>
      
    </nav>
  );
}
