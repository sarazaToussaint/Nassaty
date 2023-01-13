import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Project = () => (
  <div>
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <di className="home-body">
      <h1>PROJECTS</h1>
    </di>
  </div>
);

export default Project;
