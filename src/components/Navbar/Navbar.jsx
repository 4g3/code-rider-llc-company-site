import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props =>
  (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Placeholder
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className={window.location.pathname === '/about' ? 'active' : ''}>
            {<Link className="navbar-brand" to="/about">About</Link>}
          </li>
          <li className={window.location.pathname === '/projects' ? 'active' : ''}>
            {<Link className="navbar-brand" to="/projects">Projects</Link>}
          </li>
          <li className={window.location.pathname === '/skills' ? 'active' : ''}>
            {<Link className="navbar-brand" to="/skills">Skills</Link>}
          </li>
        </ul>
      </div>
    </nav>
  );

export default Navbar;
