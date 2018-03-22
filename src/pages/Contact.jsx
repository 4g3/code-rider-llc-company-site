import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

const Contact = () =>
  (
    <div>
      <Hero>
        <img src='/images/cover_photo.png' />
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12" style={{ 'text-align': 'center', margin: '10px' }}>
            <h1>Ride the wave!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
              et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );

export default Contact;