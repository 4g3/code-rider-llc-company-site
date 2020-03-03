import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './about/Hero';

const About = () =>
  (
    <div>
      <Hero>
        <img src="/images/cover_photo.png" alt="Cover" />
      </Hero>
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-mobile is-centered">
            <div className="column is-offset-one-half">
              <h1>Forge (4g3) the best tooling and approach to cost, security and performance efficency in the cloud!</h1>
              <br />
              <p>
              We have experience using Amazon Web Services (AWS), Google Cloud Platform (GCP), Heroku, ServiceNow, Workday and Salesforce.
              We have worked with clients ranging from small non-profits to government entities and Fortune 100 clients.
              We would love to help you to implement your idea, drive digital transformation, manage your systems or solve your technology problems. 
              Please reach out on the {<Link to="/contact">Contact</Link>} page to start a discussion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default About;
