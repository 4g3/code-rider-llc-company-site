import React from 'react';
import Hero from '../components/Hero';

const About = () =>
  (
    <div>
      <Hero>
        <img src="/images/cover_photo.png" alt="Cover" />
      </Hero>
      <div className="container" style={{ marginTop: 30 }}>
        <div className="columns">
          <div className="column">
            <h1>Ride the wave!</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
              et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

export default About;
