import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import data from './database/data.json';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.homeContainer}>
    <nav>
      <h1>
        <img className={styles.logo} src={data.data.logo} alt={data.data.projectName} />
      </h1>
      <ul>
        <li>
          <Link to="/Project">PROJECTS</Link>
        </li>
        <li>
          <Link to="/Contact">CONTACT</Link>
        </li>
      </ul>
    </nav>

    <section className="home-body">
      <div className="side-left">
        <div className="left-line" />
        <div>
          <img className={styles.left} src={data.data.sideImg} alt={data.data.projectName} />
        </div>
        <div className="left-line" />
      </div>
      <div className="name-body">
        <h1>{data.data.projectName}</h1>
      </div>
      <div className="side-right">
        <div className="right-line" />
        <div>
          <img className={styles.right} src={data.data.sideImg} alt={data.data.projectName} />
        </div>
        <div className="right-line" />
      </div>
    </section>
    <footer>
      <div className="social-media">
        <i><FaFacebookF /></i>
        <i><FaTwitter /></i>
        <i><FaInstagram /></i>
      </div>
      <div className="scroll">
        <div className="text">Scroll</div>
        <div className="foot-line" />
      </div>
    </footer>
  </div>
);

export default Home;
