import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
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
          {<Link className={window.location.pathname === '/projects' ? 'is-active navbar-item' : 'navbar-item'} to="/projects">Previous Work</Link>}
          {<Link className={window.location.pathname === '/contact' ? 'is-active navbar-item' : 'navbar-item'} to="/contact">Contact</Link>}
          {/* <a className="navbar-item" href="https://code-rider-store.herokuapp.com">Store</a> */}
        </div>
      </div>
    </nav>
  );

export default Header;
