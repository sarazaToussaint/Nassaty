import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Contact = () => (
  <div>
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Project">PROJECTS</Link>
        </li>
      </ul>
    </nav>

    <di className="home-body">
      <h1>CONTACT</h1>
    </di>
  </div>
);

export default Contact;
