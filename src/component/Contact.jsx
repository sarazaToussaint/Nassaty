import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import data from './database/data.json';
import styles from './Home.module.css';

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

    <di className="home-body contact-container">
      <div className="contact-text">
        <h2>CONTACT</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Maiores voluptatibus excepturi eaque doloribus dignissimos
          doloremque, odit impedit aut laudantium reiciendis veritatis
          sit incidunt. Perspiciatis culpa cumque, ratione ipsum eaque illo!
        </p>
        <div>
          <h3>Address</h3>
          <span>Kigali, Gasabo, Kimironko KK 365 St</span>
          <h4>Phone</h4>
          <span>(+250)737826799</span>
          <h4>Email</h4>
          <span>prinheir9@gmail.com</span>
        </div>
      </div>
      <div className="contact-form">
        <h2>CONTACT FORM</h2>
        <form className="cont-form">
          <input type="text" id="" name="nameOfUser" placeholder="Your name" />
          <br />
          <input type="text" id="" name="aboutUser" placeholder="Your phone" />
          <br />
          <input type="text" id="" name="aboutUser" placeholder="Your email" />
          <br />
          <textarea id="nassatyContact" placeholder="Your message" name="nassatyform" rows="4" cols="50" />
          <button type="submit">Save</button>
        </form>
      </div>
    </di>
  </div>
);

export default Contact;
