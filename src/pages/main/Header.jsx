import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleNav() {
    if (this.state.isToggleOn === true) {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));      
    }
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            4g3 LLC
          </Link>
          <div className={this.state.isToggleOn ? "navbar-burger burger is-active" : "navbar-burger burger"} data-target="navMenu" onClick={this.handleClick} role="button">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={this.state.isToggleOn ? "navbar-menu is-active" : "navbar-menu"} id="navMenu">
          <div className="navbar-end" >
            {<Link className={window.location.pathname === '/about' ? 'is-active navbar-item' : 'navbar-item'} to="/about" onClick={this.handleNav} >About</Link>}
            {<Link className={window.location.pathname === '/projects' ? 'is-active navbar-item' : 'navbar-item'} to="/projects" onClick={this.handleNav}>Previous Work</Link>}
            {<Link className={window.location.pathname === '/contact' ? 'is-active navbar-item' : 'navbar-item'} to="/contact" onClick={this.handleNav}>Contact</Link>}
            {/* <a className="navbar-item" href="https://code-rider-store.herokuapp.com">Store</a> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
