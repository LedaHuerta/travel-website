import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <section className="subscription__footer">
        <p className="heading-subscrption__footer">
          Join the Adventure newsletter to receive our best vacation deals.
        </p>
        <p className="text-subscription__footer">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="input__footer"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/home">Testimonials</Link>
            <Link to="/home">Careers</Link>
            <Link to="/home">Investors</Link>
            <Link to="/home">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/home">Contact</Link>
            <Link to="/home">Support</Link>
            <Link to="/home">Destinations</Link>
            <Link to="/home">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/home">Submit Video</Link>
            <Link to="/home">Ambassadors</Link>
            <Link to="/home">Agency</Link>
            <Link to="/home">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/home">Instagram</Link>
            <Link to="/home">Facebook</Link>
            <Link to="/home">Youtube</Link>
            <Link to="/home">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/home" className="social-logo">
              Kalam
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Dev Leda Huerta © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/home"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/home"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/home"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/home"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/home"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
