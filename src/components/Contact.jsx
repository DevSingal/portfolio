import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const ContactUs = () => {
  const form = useRef();


  // sending email to my email using email.js
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cmhg9oa', 'template_ykwtcbr', form.current, '3L4kMhewtYxir66wj')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message Sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          toast.error("Some Error occured!")
      });
  };

  return (
    <>
    <form className="contact" ref={form} onSubmit={sendEmail}>
    <h2>Send Me a Message</h2>
      
      <input type="text" name="user_name" placeholder='Enter your name' required />
      <input type="email" name="user_email" placeholder='Enter your email' required />
      <textarea name="message" placeholder='Enter your message for me' required />
      <input className='submit' type="submit" value="Send" />
    </form>

    </>
  );
};