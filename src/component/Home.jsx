import { useState, React } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import data from './database/data.json';
import styles from './Home.module.css';

const Home = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.homeContainer}>
      <nav>
        <h1>
          <img className={styles.logo} src={data.data.logo} alt={data.data.projectName} />
        </h1>
        <button
          type="button"
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className={
          isNavExpanded ? 'nav-links expanded' : 'nav-links'
        }
        >
          <ul>
            <li>
              <Link to="/Project">PROJECTS</Link>
            </li>
            <li>
              <Link to="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className={styles.homeBody}>
        <div
          // style={{
          //   backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/cercleImg.png`})`,
          //   opacity: '3%',
          //   position: 'absolute',
          //   width: '650px',
          //   height: '650px',
          // }}
          className={styles.bgImage2}
        />
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
      <div
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/background.png`})`,
          opacity: '8%',
          position: 'absolute',
          width: '100%',
          height: '100%',
          bottom: '0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className={styles.bgImage}
      />
      <footer>
        <div className={styles.socialMedia}>
          <a href="prince" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="prince" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="prince" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className={styles.scroll}>
          <div className={styles.text}>Scroll</div>
          <div className={styles.footLine} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
