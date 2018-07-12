import React from 'react';

const ContactForm = () =>
  (
    <div>
      <form method="POST" action="https://formspree.io/hillegassdev@gmail.com">
      <div className="field">
        <label className="label" htmlFor="name">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Your Name" name="visitor_name" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Your Email Address" name="_replyto" />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope-o" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="subject">Subject</label>
        <div className="control">
          <div className="select">
            <select name="subject">
              <option>Let's Chat</option>
              <option>Sales Inquiry</option>
              <option>Support Request</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="message">
            Message
        </label>
        <div className="control">
          <textarea className="textarea" placeholder="Description of the request" name="message" />
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
      </form>
    </div>
  );

export default ContactForm;
