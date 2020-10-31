import React, { FormEvent, useState } from 'react';

function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameIsFocused, setNameIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [messageIsFocused, setMessageIsFocused] = useState(false);

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const handleSubmit = (event: FormEvent) => {
    alert(`yo we got this ${name}, ${email}, ${message}`)
    reset();
    event.preventDefault();
  }

  return (
    <div className="contact">
      <h2>Get in Touch With Me</h2>      
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label 
            htmlFor="name"
            className={`form-group__label ${nameIsFocused ? "focused" : ""}`}
          >
            Name
          </label>
          <input 
            type="text"
            className="form-group__input"
            value={name}
            onFocus={e => setNameIsFocused(true)}
            onBlur={e => setNameIsFocused(false)}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="exampleInputEmail1"
            className={`form-group__label ${emailIsFocused ? "focused" : ""}`}
          >
            Email address
          </label>
          <input 
            type="email"
            className="form-group__input"
            value={email}
            onFocus={e => setEmailIsFocused(true)}
            onBlur={e => setEmailIsFocused(false)}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label 
            htmlFor="message"
            className={`form-group__label ${messageIsFocused ? "focused" : ""}`}
          >
            Message
          </label>
          <textarea 
            className="form-group__textarea"
            rows={5}
            value={message}
            onFocus={e => setMessageIsFocused(true)}
            onBlur={e => setMessageIsFocused(false)}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
   </div>
  )
}

export default EmailForm;