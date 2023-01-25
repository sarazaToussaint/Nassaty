import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import data from './database/data.json';
import styles from './Home.module.css';

const Project = () => (
  <div>
    <nav>
      <h1>
        <img className={styles.logo} src={data.data.logo} alt={data.data.projectName} />
      </h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
      </ul>
    </nav>

    <di className="home-body">
      <h1>In development</h1>
    </di>
  </div>
);

export default Project;
