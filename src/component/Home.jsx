import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import data from './database/data.json';
import styles from './Home.module.css';

const Home = () => (
  <div
    style={{
      backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/background.png`})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: '8%',
    }}
    className={styles.homeContainer}
  >
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

    <section className={styles.homeBody}>
      <div className={styles.sideLeft}>
        <div className={styles.leftLine} />
        <div>
          <img className={styles.left} src={data.data.sideImg} alt={data.data.projectName} />
        </div>
        <div className={styles.leftLine} />
      </div>
      <div className={styles.nameBody}>
        <h1>{data.data.projectName}</h1>
      </div>
      <div className={styles.sideRight}>
        <div className={styles.rightLine} />
        <div>
          <img className={styles.right} src={data.data.sideImg} alt={data.data.projectName} />
        </div>
        <div className={styles.rightLine} />
      </div>
    </section>
    <footer>
      <div className={styles.socialMedia}>
        <i><FaFacebookF /></i>
        <i><FaTwitter /></i>
        <i><FaInstagram /></i>
      </div>
      <div className={styles.scroll}>
        <div className={styles.text}>Scroll</div>
        <div className={styles.footLine} />
      </div>
    </footer>
  </div>
);

export default Home;
