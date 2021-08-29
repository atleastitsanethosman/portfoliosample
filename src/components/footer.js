import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = {}

export default function Footer() {
  
  return (
    
      <footer className="footer">
        <nav className="footer-nav">
        <ul>
          <a target="_blank" href="https://www.linkedin.com/in/ian-hennessey-b4310a38"> <li><span><FontAwesomeIcon icon={['fab', 'linkedin']} /></span> Linkedin</li> </a>
          <a target ="_blank" href="https://github.com/atleastitsanethosman"><li><span><FontAwesomeIcon icon={['fab', 'github']} /></span> GitHub</li></a>
          <a href="mailto:ian.hennessey@gmail.com"> <li><span><FontAwesomeIcon icon={['fas', 'envelope-square']} /></span> Email</li></a>
        </ul>
        </nav>
      </footer>
  );
}