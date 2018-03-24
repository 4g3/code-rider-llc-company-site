import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props =>
  (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Code Rider LLC
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          {<Link className={window.location.pathname === '/about' ? 'is-active navbar-item' : 'navbar-item'} to="/about">About</Link>}
          {<Link className={window.location.pathname === '/projects' ? 'is-active navbar-item' : 'navbar-item'} to="/projects">Projects</Link>}
          {<Link className={window.location.pathname === '/skills' ? 'is-active navbar-item' : 'navbar-item'} to="/skills">Skills</Link>}
          {<Link className={window.location.pathname === '/contact' ? 'is-active navbar-item' : 'navbar-item'} to="/contact">Contact</Link>}
          <a className="navbar-item" href="https://code-rider-store.herokuapp.com">Store</a>
        </div>
      </div>
    </nav>
  );

export default Navbar;
