import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid className="footer-container"> 
      <div className="copyright">8BallQuotes®</div>
      <div className="socials">
        <ul>
          <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;