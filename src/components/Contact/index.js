/* eslint-disable no-unused-vars */
import React, { useState } from 'react';


// initialize the state
function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      // submit the form data
      function handleSubmit(e) {
          e.preventDefault();
          console.log(formState)
      }
    return (
        <section>
            <h1>Contact Me</h1>
            {/* sync the state */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name"/>    
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>
                </div>
                <button type="submit">submit</button>
            </form>
        </section>
    )
}

export default ContactForm