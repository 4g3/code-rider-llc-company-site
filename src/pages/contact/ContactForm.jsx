import React from 'react';

const ContactForm = () =>
  (
    <div>
      <div className="field">
        <label className="label" htmlFor="name">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <div className="control has-icons-left has-icons-right">
         <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle" />
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="field">
        <label className="label" htmlFor="subject">Subject</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="msg">
            Message
        </label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox" htmlFor="checkbox">
            <input type="checkbox" />
                        I agree to the <a href="www.google.com">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="radio" htmlFor="radio">
            <input type="radio" name="question" />
                        Yes
          </label>
          <label className="radio" htmlFor="question">
            <input type="radio" name="question" />
                        No
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>
    </div>
  );

export default ContactForm;
