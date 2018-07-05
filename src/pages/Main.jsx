import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Header from './main/Header';
import Footer from './main/Footer';
import Content from './main/Content';

const Main = () =>
  (
    <Router>
      <div>
        <Header />
        <Content>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Portfolio} />
        </Content>
        <Footer />
      </div>
    </Router>
  );

export default Main;
