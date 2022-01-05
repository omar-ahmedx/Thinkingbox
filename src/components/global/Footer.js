import { NavLink } from "react-router-dom";
import "../../styles/commonStyles/footer.css";
import logo from "../../styles/imgs/LOGO.png";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="sec-nav-container">
        <div className="sec-nav">
          <div>
            <div className="footer-links-container mouse-hover">
              <NavLink to="/">Home</NavLink>
              <div className="border-expand"></div>
            </div>
            <div className="footer-links-container mouse-hover">
              <NavLink to="/work">Work</NavLink>
              <div className="border-expand"></div>
            </div>
            <div className="footer-links-container mouse-hover">
              <NavLink to="/culture">Culture</NavLink>
              <div className="border-expand"></div>
            </div>
            {/*<div className="footer-links-container mouse-hover">
              <NavLink to="/careers">Careers</NavLink>
              <div className="border-expand"></div>
  </div> */}
            <div className="footer-links-container mouse-hover">
              <NavLink to="/contact">Contact</NavLink>
              <div className="border-expand"></div>
            </div>
            {/* <div className="footer-links-container mouse-hover">
              <NavLink to="/archive">Archive</NavLink>
              <div className="border-expand"></div>
            </div> */}
          </div>
          <div>
            {/*<div className="footer-links-container mouse-hover">
              <NavLink to="/AntiSocial">AntiSocial</NavLink>
              <div className="border-expand"></div>
            </div>
            /*<div className="footer-links-container mouse-hover">
              <NavLink to="/talknerdy">Talk Nerdy</NavLink>
              <div className="border-expand"></div>
          </div>*/}
          </div>
        </div>

        <div>
          <NavLink to="/contact">
            <div className="work-with mouse-hover">
              <div className="line"></div> <div>Work With Us</div>
            </div>
          </NavLink>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/_cheesee_cake_/"
              className="mouse-hover"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/cheese-cake-6b6b55207/"
              className="mouse-hover"
            >
              <BsLinkedin />
            </a>
            <a href="https://pin.it/2104Ce2" className="mouse-hover">
              <BsPinterest />
            </a>
            <a
              href="https://twitter.com/cheeese_cake__"
              className="mouse-hover"
            >
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="loop-outer-container">
        <div className="loop-inner-container">
          <div>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
          </div>
          <div>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
          </div>
          <div>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
          </div>
          <div>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
            <span>cheesecake</span>
            <span className="line-logo">
              <img src={logo} alt="cheesecake" />
            </span>
          </div>
        </div>
      </div>

      <div className="privacy">
        <span>
          Cheesecake 2021{" "}
          {/*<span className="small-dot"></span>{" "}
           <NavLink className="mouse-hover" to="/terms-and-conditions">
            Terms And Conditions
          </NavLink>{" "}
          <span className="small-dot"></span>{" "}
          <a className="mouse-hover" href="/privacy-policy">
            Privacy Policy
        </a>*/}
        </span>
        <img src="" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
