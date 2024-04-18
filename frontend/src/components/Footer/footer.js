import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec contact">
            <h4>Contact Us</h4>
            <ul className="info">
              <li>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span><a href="https://goo.gl/maps/KKfbwyZz5by9DrgN7" target="_blank">Boston, MA</a></span>
              </li>
              <li>
                <span>
                  <i class="fas fa-phone-alt"></i>
                </span>
                {/* <span>+1 (857) 222-6884</span> */}
                
                <i class="bi bi-phone"></i> <a href="tel:+1(617)935-8885">+1(617)935-8885 </a>
              </li>
              <li>
                <span>
                  <i class="fas fa-envelope"></i>
                </span>
                {/* <span>contact@glamour.com</span> */}
                <i class="bi bi-envelope"></i> <a href="mailto:contact@example.com">Contactus@glamour.com</a>
              </li>
              {/* <li>
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span>119/2, moratuwa</span>
                </li> */}
            </ul>
          </div>

          <div className="sec aboutus">
            <h4>About Us</h4>
            <p>
            We believe makeup should be fun, accessible, and empowering, not intimidating or exclusionary. That's why we offer a diverse range of high-quality products, expert advice, and a supportive community, all designed to help you express yourself with confidence.
            </p>

            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/accounts/login/">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://music.youtube.com/">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          {}
        </div>
      </footer>
    </>
  );
};

export default Footer;
