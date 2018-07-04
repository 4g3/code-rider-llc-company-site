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
          <input className="input" type="email" placeholder="Email input" />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope-o" />
          </span>
        </div>
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
        <label className="label" htmlFor="message">
            Message
        </label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea" />
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
