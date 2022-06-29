import React from 'react';
import { Link } from 'react-router-dom';
import { LogoGray as Logo, FacebookLogo, InstagramLogo, MailLogo } from './Logo';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-preheading'>
          Don't be shy
        </p>
        <p className='footer-subscription-heading'>
          Let us be your secret weapon.
        </p>
        <p className='footer-subscription-text'>
          Feed your curiosity, collaborate with us, let's transform concepts.
        </p>
        <div className='footer-subscription-button'>
            <a className='footer-subscription-button-text' href="mailto:inquiries@blinkcreativestudio.com">
                <div>Zoom or Coffee Date?</div>
            </a>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h4 className='footer-link-heading'>Say Hello</h4>
            <div className='footer-link-items-list'>
                <a href="mailto:inquiries@blinkcreativestudio.com">inquiries@blinkcreativestudio.com</a>
                <a href="tel:0949-933-7469">0949-933-7469</a>
                <a href="tel:0915-377-1777">0915-377-1777</a>
            </div>
          </div>
          <div className='footer-link-items'>
            <h4 className='footer-link-heading'>In the Blink Area?</h4>
            <div className='footer-link-items-list'>
                <a href="https://goo.gl/maps/VVzuwpsWNeo5p5yH6" target="_blank" rel="noreferrer">2F Left Wing, ES Plaza, Los Baños, Laguna</a>
                <a href="https://goo.gl/maps/VVzuwpsWNeo5p5yH6" target="_blank" rel="noreferrer">Monday-Saturday</a>
                <a href="https://goo.gl/maps/VVzuwpsWNeo5p5yH6" target="_blank" rel="noreferrer">8:00 am to 5:00 pm</a>
            </div>
          </div>
        </div>
      </div>

      <hr className='footer-hr-line'/>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <Logo />
            </Link>
            <small className='website-rights'>© 2021 Blink Creative Studio</small>
          </div>
          

          <div className='social-icons'>
            <a href="https://www.facebook.com/theblinkcreativestudio/" target="_blank" rel="noreferrer" aria-label="View our Facebook page.">
              <FacebookLogo />
            </a>
            <a href="https://www.instagram.com/theblinkcreativestudio/" target="_blank" rel="noreferrer" aria-label="View our Instagram page.">
              <InstagramLogo />
            </a>
            <a href="mailto:inquiries@blinkcreativestudio.com" target="_blank" rel="noreferrer" aria-label="Email us.">
              <MailLogo />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;