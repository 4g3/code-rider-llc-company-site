import React from 'react';
import PropTypes from 'prop-types';

const Hero = props => (
  <section className="hero is-light is-small">
    <div className="hero-body">
      <div className="container has-text-centered">
        {props.children}
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Hero;
