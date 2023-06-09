import React, {useRef, useState} from 'react';
import classes from '../../styles/form.module.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const ref = useRef ();
  const [success, setSuccess] = useState (null);
  const [loading, setLoading] = useState (false);

  const handleSubmit = e => {
    e.preventDefault ();
    setLoading (true);

    emailjs
      .sendForm (
        'service_t6tcche',
        'template_rcger2l',
        ref.current,
        'krXoXHq8uF6gFqcYY'
      )
      .then (
        result => {
          console.log (result.text);
          ~setSuccess (true);
          setLoading (false);
        },
        error => {
          console.log (error.text);
          setSuccess (false);
          setLoading (false);
        }
      );
  };
  return (
    <form className={`${classes.form}`} ref={ref} onSubmit={handleSubmit}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" name="user_name" pattern= {`^[A-Za-z0-9]{3,16}$`} required />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="message"
          placeholder="Message"
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        {loading
          ? <span>loading...</span>
          : <span style={{backgroundColor: 'transparent'}}>Send</span>}
      </button>
      <span style={{color: 'white', marginLeft: '20px'}}>
        {success && "Your message has been sent. We'll get back to you soon :)"}
      </span>
    </form>
  );
};

export default Form;
