import React, { Component } from 'react';
import './Footer.css'; // Custom CSS for footer styling

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Courses</h4>
            <ul>
              <li><a href="#frontend">Front-End Development</a></li>
              <li><a href="#backend">Back-End Development</a></li>
              <li><a href="#fullstack">Full Stack Development</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AchieversIT. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
