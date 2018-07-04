import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Wrapper from '../components/Wrapper';

const Layout = () =>
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

export default Layout;
