import { useState, React } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import data from './database/data.json';
import styles from './Home.module.css';
import classes from './Contact.module.css';

const Contact = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/background.png`})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        bottom: '0',
        opacity: '75%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={classes.mainContainer}
    >
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

        <div className={isNavExpanded ? 'nav-links expended' : 'nav-links'}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Project">PROJECT</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={classes.contactContainer}>
        <div className={classes.contactText}>
          <h2>CONTACT</h2>
          <p className={classes.paragrap}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Maiores voluptatibus excepturi eaque doloribus dignissimos
            doloremque, odit impedit aut laudantium reiciendis veritatis
            sit incidunt. Perspiciatis culpa cumque, ipsum eaque ill!
          </p>
          <div className={classes.address}>
            <h3>Address</h3>
            <span>Kigali, Gasabo, Kimironko KK 365 St</span>
            <h4>Phone</h4>
            <span>(+250)737826799</span>
            <h4>Email</h4>
            <span>prinheir9@gmail.com</span>
          </div>
        </div>
        <div className={classes.contactForm}>
          <h2>CONTACT FORM</h2>
          <form className={classes.contForm}>
            <input type="text" id="" name="nameOfUser" placeholder="Your name" />
            <input type="text" id="" name="phoneUser" placeholder="Your phone" />
            <input type="text" id="" name="emailOfUser" placeholder="Your email" />
            <textarea id="nassatyContact" placeholder="Your message" name="msgUser" rows="8" cols="22" />
            <button className="btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <footer>
        <div className={classes.socialMedia}>
          <a href="prince" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="prince" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="Prince" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className={classes.scroll}>
          <div className={classes.text}>Scroll</div>
          <div className={classes.footLine} />
        </div>
      </footer>
    </div>
  );
};
export default Contact;
