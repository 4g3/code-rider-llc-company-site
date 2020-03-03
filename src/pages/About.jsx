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
              <h1>Let's ride the wave of technology together! </h1>
              <br />
              <p>
              4g3 specializes in DevOps, SaaS and PaaS Application Development. 
              We have experience using Amazon Web Services (AWS), Google Cloud Platform (GCP), Heroku, ServiceNow, Workday and Salesforce.
              We have worked with clients ranging from small Non-Profits to Goverment Entities and Fortune 100 clients.
              Our team mainly specializes in Javascript (Node.js and React), Python, Ruby, Java and Apex development but also has experience developing native applications in iOS and Android.
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
