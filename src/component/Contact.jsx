import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import data from './database/data.json';
import styles from './Home.module.css';
import classes from './Contact.module.css';

const Contact = () => (
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
          <Link to="/Project">PROJECT</Link>
        </li>
      </ul>
    </nav>

    <div className={classes.contactContainer}>
      <div className={classes.contactText}>
        <h2>CONTACT</h2>
        <p className={classes.paragrap}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Maiores voluptatibus excepturi eaque doloribus dignissimos
          doloremque, odit impedit aut laudantium reiciendis veritatis
          sit incidunt. Perspiciatis culpa cumque, ratione ipsum eaque illo!
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
          <input type="text" id="" name="emailUser" placeholder="Your email" />
          <textarea id="nassatyContact" placeholder="Your message" name="msgUser" rows="8" cols="22" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
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

export default Contact;
