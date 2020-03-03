import React from 'react';

const footer = {
  textAlign: 'center',
  minHeight: '100px',
  background: '#FFF',
  position: 'relative',
};

const Footer = () =>
  (
    <footer style={footer}>
      <p>Made with <i className="fa fa-heart" aria-hidden="true" style={{ color: 'red' }} /> by <a href="/">in the 4g3</a></p>
    </footer>
  );

export default Footer;
