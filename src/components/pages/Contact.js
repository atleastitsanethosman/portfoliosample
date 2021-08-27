import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Contact() {
    return(
    <section className="contact">
      <h3>Contact</h3>
      <section>
          <ul>
            <a target="_blank" href="https://www.linkedin.com/in/ian-hennessey-b4310a38"> <li><span><FontAwesomeIcon icon={['fab', 'linkedin']} /></span> Linkedin</li> </a>
            <a target ="_blank" href="https://github.com/atleastitsanethosman"><li><span><FontAwesomeIcon icon={['fab', 'github']} /></span> GitHub</li></a>
            <a href="mailto:ian.hennessey@gmail.com"> <li><span><FontAwesomeIcon icon={['fas', 'envelope-square']} /></span> Email</li></a>
          </ul>
      </section>
    </section>
    )
}