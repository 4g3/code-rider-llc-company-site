import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Support from './pages/Support';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

const App = () =>
  (
    <Router>
      <div>
        <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Portfolio} />
            <Route path="/support" component={Support} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );

export default App;
