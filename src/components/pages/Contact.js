import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useForm} from 'react-hook-form'

export default function Contact() {
    return(
    <section className="contact">
      <div>
      <h3>Contact</h3>
      </div>
      <section className="contact-form">
        <form id='contact-form'>
          <input type='text' name='user_name' placeholder='Name' />
          <br/>
          <input type='email' name='user_email' placeholder='Email' />
          <br/>
          <textarea name='message' placeholder='Message'/>
          <br/>
          <input type='submit' value='Send' />
        </form>
      </section>
    </section>
    )
}