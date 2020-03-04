import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './about/Hero';

const About = () =>
  (
    <div>
      <Hero>
        <img src="/images/4g3_cover.png" alt="Cover" />
      </Hero>
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-mobile is-centered">
            <div className="column is-offset-one-half">
              <h1>Forge (4g3) the best tooling and approaches to cost, security and performance efficiency in the cloud!</h1>
              <br />
              <p>
              We have over a decade of experience using Amazon Web Services (AWS), Google Cloud Platform (GCP), Azure, Heroku and Salesforce.
              We have helped clients ranging from small non-profits to government entities and fortune 100 companies to reduce costs and improve their security posture.
              We would love to help you to solve a problem, implement an idea or drive digital transformation. 
              Please reach out on the {<Link to="/contact">Contact</Link>} page to start a discussion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default About;
