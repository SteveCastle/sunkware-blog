import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import pn from '../img/pn.svg';


const Navbar = () => (
  <nav className="navbar is-transparent sticky">
    <div className="container">
      <div className="column is-10 is-offset-1">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Sunkware" style={{ width: '34px' }} />
          </Link>
          <a
            className="navbar-item"
            href="https://punknaturalism.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={pn} alt="Punk Naturalism: A nature blog." style={{ width: '34px' }} />
            </span>
          </a>         
        </div>
        <div className="navbar-start" />
        <div className="navbar-end" />
      </div>
    </div>
  </nav>
);

export default Navbar;
