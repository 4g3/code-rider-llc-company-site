import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Header from './main/Header';
import Footer from './main/Footer';
import Wrapper from './main/Wrapper';

const Main = () =>
  (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );

export default Main;
