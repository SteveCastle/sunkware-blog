import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent sticky">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Sunkware" style={{ width: '30px' }} />
        </Link>
        <a
          className="navbar-item"
          href="https://github.com/SteveCastle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
      <div className="navbar-start" />
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
