import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="Movie__footer">
      <div className="Movie__footer__container">
        <div className="Footer__Title">
          <span>Contact</span>
        </div>
        <div className="Footer__Email">
          <span>Email</span>
          <a href="mailto:kimhm260@gmail.com?subject=feedback">
            <i class="far fa-envelope fa-2x" />
          </a>
        </div>
        <div className="Footer__Github">
          <span>Github</span>
          <a
            href="https://github.com/kimhm93/React-portfolio-movie-app"
            target="_blink"
          >
            <i class="fab fa-github-alt fa-2x" />
          </a>
        </div>
        <div className="Footer__Blog">
          <span>Blog</span>
          <a href="https://mongtak.tistory.com/" target="_blink">
            <i class="fas fa-blog fa-2x" />
          </a>
        </div>
        <div className="Footer__Info">KimHakMin Portfolio</div>
      </div>
    </footer>
  );
}

export default Footer;
