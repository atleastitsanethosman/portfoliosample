import React from 'react';
import ReactDom from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useForm} from 'react-hook-form'
import{ init, sendForm } from 'emailjs-com';
init("user_5o4fYZ0JYcNmlg4LMm17k");

export default function Contact() {
    
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
  const onSubmit = (data, event) => { 
    sendForm('portfoliocontact', 'portfolio_contact', '#contact-form')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    })
    .then(event.target.reset());
  };
  
    return(
    <section className="contact">
      <div>
      <h3>Contact</h3>
      </div>
      <section className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <form id='contact-form'>
          {errors.name && <div className="warning"><span><FontAwesomeIcon icon={['fas', 'ban']} /></span> Name Required!</div>}
          <input type='text' {...register("name", {required: true, maxLength: 50})} name='name' placeholder='Name' />
          <br/>
          {errors.email && <div className="warning"><span><FontAwesomeIcon icon={['fas', 'ban']} /></span> Valid Email Required!</div>}
          <input type='email' {...register("email", {required: true, pattern: /^\S+@\S+\.\S+$/})} name='email' placeholder='Email' />
          <br/>
          {errors.message && <div className="warning"><span><FontAwesomeIcon icon={['fas', 'ban']} /></span> Message between 10 and 1500 Characters Required!</div>}
          <textarea {...register("message", {required: true, min:10, max: 1500})} name='message' placeholder='Message'/>
          <br/>
          <input type='submit' value='Send' />
        </form>
      </section>
    </section>
    )
}