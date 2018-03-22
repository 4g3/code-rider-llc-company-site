import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

const Support = () =>
  (
    <div>
      <Container style={{ marginTop: 200 }}>
        <Row>
          <Col size="md-12">
            <p>
              Hello support
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );

export default Support;