import "../../styles/commonStyles/footer.css";
import logo from "../../styles/imgs/LOGO.png";
function Footer() {
  return (
    <footer>
      <div className="sec-nav-container">
        <div className="sec-nav">
          <div>
            <div className="footer-links-container mouse-hover">
              <a href="/home">Home</a>
              <div className="border-expand"></div>
            </div>
            <div className="footer-links-container mouse-hover">
              <a href="/work">Work</a>
              <div className="border-expand"></div>
            </div>
            <div className="footer-links-container mouse-hover">
              <a href="/culture">Culture</a>
              <div className="border-expand"></div>
            </div>
            {/*<div className="footer-links-container mouse-hover">
              <a href="/careers">Careers</a>
              <div className="border-expand"></div>
  </div> */}
            <div className="footer-links-container mouse-hover">
              <a href="/contact">Contact</a>
              <div className="border-expand"></div>
            </div>
            {/* <div className="footer-links-container mouse-hover">
              <a href="/archive">Archive</a>
              <div className="border-expand"></div>
            </div> */}
          </div>
          <div>
            <div className="footer-links-container mouse-hover">
              <a href="/AntiSocial">AntiSocial</a>
              <div className="border-expand"></div>
            </div>
            {/*<div className="footer-links-container mouse-hover">
              <a href="/talknerdy">Talk Nerdy</a>
              <div className="border-expand"></div>
          </div>*/}
          </div>
        </div>

        <div>
          <a href="./contact">
            <div className="work-with mouse-hover">
              <div className="line"></div> <div>Work With Us</div>
            </div>
          </a>
          <div></div>
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
          Cheesecake 2021 <span className="small-dot"></span>{" "}
          <a className="mouse-hover" href="/terms-and-conditions">
            Terms And Conditions
          </a>{" "}
          <span className="small-dot"></span>{" "}
          <a className="mouse-hover" href="/privacy-policy">
            Privacy Policy
          </a>
        </span>
        <img src="" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
