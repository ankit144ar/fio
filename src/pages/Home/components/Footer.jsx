import React from "react";
import "../Home.css";
import { NavLink } from "react-router-dom";
import { IoFlower } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-info">
          <NavLink className="not-a-link" to="/">
            {" "}
            <h1 className="footer-header">
              Fiore
              <IoFlower />
            </h1>{" "}
          </NavLink>
          <p>
            {" "}
            <i>Make someone feel special today!</i>{" "}
          </p>
        </div>

        <div>
          <h3>Contact us</h3>
          <div className="contact-links">
            <a
              className="footer-link"
              href="https://github.com/ankit144ar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Github
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/ankit-roy-791330152/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-text">
        {" "}
        @developed by{" "}
        <a
          className="footer-link"
          href="https://bhumikawebsite.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          bhumika
        </a>
      </div>
    </div>
  );
};

export default Footer;
