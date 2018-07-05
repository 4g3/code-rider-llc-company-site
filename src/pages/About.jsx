import React from 'react';
import Hero from './about/Hero';

const About = () =>
  (
    <div>
      <Hero>
        <img src="/images/cover_photo.png" alt="Cover" />
      </Hero>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="columns">
          <div className="column">
            <h1>Let's ride the wave of technology together! </h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p>
              Code Rider specializes in DevOps, SaaS and PaaS Application Development. 
              We have experience using Amazon Web Services (AWS), Google Cloud Platform (GCP), Heroku, ServiceNow, Workday and Salesforce.
              We have worked with clients ranging from small Non-Profits to Goverment Entities and Fortune 100 clients.
              Our team mainly specializes in Javascript (Node.js and React), Python, Ruby, Java and Apex development but also has experience developing native applications in iOS and Android.
              We would love to help you to implement your idea, drive digital transformation, manage your systems or solve your technology problems. 
              Please reach out on the <a href='/Contact'>Contact</a> page to start a discussion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

export default About;
