import React, {useRef, useState} from 'react';
import classes from '../../styles/form.module.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const ref = useRef ();
  const [success, setSuccess] = useState (null);
  const [loading, setLoading] = useState (false);
  const [chat, setChat] = useState(false);

  const handleClick = () => {
    if(!chat){
      setChat(true)
    } else {
      setChat(false)
    }
  }

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
          setSuccess (true);
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
        <input type="text" placeholder="Your Name" name="user_name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '1rem',
          marginLeft: '10px',
          marginBottom: '30px'
        }}
      >
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
          onClick={handleClick}
        />
        <label
          className="custom-control-label"
          htmlFor="customCheck1"
          style={{color: 'white'}}
        >
          Remember me
        </label>
      </div>

      <button className="primary__btn" type="submit" disabled={!chat}>
        {loading ? <span>loading...</span> : <span style={{backgroundColor: 'transparent'}}>Send</span>}
      </button>
      <span style={{color: 'white', marginLeft: '20px'}}>
        {success && "Your message has been sent. We'll get back to you soon :)"}
      </span>
    </form>
  );
};

export default Form;
