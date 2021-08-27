import React from 'react';


export default function Contact() {
    return(
    <section class="contact" id="contact">
      <h3>Contact</h3>
      <section>
          <ul>
            <a target="_blank" href="https://www.linkedin.com/in/ian-hennessey-b4310a38"> <li> <span class="fab fa-linkedin"></span> Linkedin</li> </a>
            <a target ="_blank" href="https://github.com/atleastitsanethosman"><li><span class='fab fa-github'></span> GitHub</li></a>
            <a target='_blank' href="./assets/Images/20210726wd - Resume_Ian.Hennessey (MI).pdf"><li><span class="far fa-file"></span>Resume</li></a>
            <a href="mailto:ian.hennessey@gmail.com"> <li><span class="fas fa-envelope-square"></span> Email</li></a>
          </ul>
      </section>
    </section>
    )
}