import "../styles/contact.css";
import Footer from "./global/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Contact(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("nav").classList.add("animate-nav");
    if (document.querySelector(".slide-header")) {
      document.querySelector(".slide-header").classList.add("animate-header");
    }
    let list = document.querySelectorAll(".mouse-hover");
    list.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-dot").classList.add("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.add("eye-outline");
        props.delay(false);
      });
      item.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-dot").classList.remove("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
        props.delay(true);
      });
    });
  });
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <header className="contact-header">
        <div className="slide-header">
          <h1>
            <span className="scribble">
              Hello. Hej.
              <span className="scribble-text">Howdy.</span>
              <span className="scribble-container"></span>
            </span>
            <br />
          </h1>
          <h2>
            <span>
              <p>Could you be our newest friend?</p>
              <p>
                We certainly hope so. Don't hesitate to say hi and meet out
                team.
              </p>
            </span>
          </h2>
        </div>
      </header>
      <main>
        <section className="staff-container">
          <div className="staff-section">
            <div className="staff">
              <h2>New Business</h2>
              <div>
                <p>Stuti Singh</p>
                <p>Marketing Manager</p>
                <p className="border-bottom mouse-hover">
                  <a href="mailto:stuti@cheesecake.agency">
                    stuti@cheesecake.agency
                  </a>
                </p>
              </div>
            </div>
            <div className="staff">
              <h2>B2B collaboration</h2>
              <div>
                <p>Aman Parashar </p>
                <p>Chief Operating Officer</p>
                <p className="border-bottom mouse-hover">
                  <a href="mailto:Aman@cheesecake.agency">
                    Aman@cheesecake.agency
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="staff-section">
            <div className="staff">
              <h2>Careers</h2>
              <div>
                <p>Garima Singh </p>
                <p>Chief executive officer</p>
                <p className="border-bottom mouse-hover">
                  <a href="mailto:garima@cheesecake.agency">
                    garima@cheesecake.agency
                  </a>
                </p>
              </div>
            </div>
            <div className="staff">
              <h2>Hello</h2>
              <div>
                <p className="border-bottom mouse-hover">
                  <a href="mailto: hello@cheesecake.agency">
                    hello@cheesecake.agency
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2>Still Curious?</h2>
          <p>Need help saying hello, try our contact form</p>
          <div className="form-container">
            <form method="POST">
              <div className="row">
                <label>
                  <div>Email |</div>
                  <input type="email" placeholder="hello@youlooknice.com" />
                </label>
                <label>
                  <div>Subject |</div>
                  <input type="text" placeholder="tell us about your dream" />
                </label>
              </div>

              <div className="row">
                <label>
                  <div>First Name |</div>
                  <input type="text" placeholder="your given name" />
                </label>
                <label>
                  <div>Last Name |</div>
                  <input type="text" placeholder="your family name" />
                </label>
              </div>
              <label className="textarea-label">
                <div>Message | </div>
                <br />
                <textarea placeholder="We are excited to hear from you. Truly. It makes our day. Maybe, you need a website, or a social campaign; perhaps, it's a large museum installation, a super bowl spot or a vending machine that shoots lasers. Whatever the scenario, we are ready to make something amazing with you."></textarea>
              </label>
            </form>
            <div>
              <button className="work-with mouse-hover" type="submit">
                <div className="line"></div> <div>Let's Talk</div>
              </button>
            </div>
          </div>
        </section>
        {/*
        <section className="places-container">
          <div className="places row border">
            <div>LA</div>
            <div>
              <p>1370 North St. Andrews Place</p>
              <p>Los Angeles, CA, 90028</p>
              <p>United States</p>
              <p>206.661.7302</p>
              <p>info.la@thinkingbox.com</p>
            </div>
          </div>
          <div className="places row">
            <div>NYC</div>
            <div>
              <p>330 W 34th St.</p>
              <p>New York, NY, 10001</p>
              <p>United States</p>
              <p>917.653.5277</p>
              <p>info.nyc@thinkingbox.com</p>
            </div>
          </div>
          <div className="places row border">
            <div>SLC</div>
            <div>
              <p>252 S. Edison St.</p>
              <p>Salt Lake City, UT, 84111</p>
              <p>United States</p>
              <p>801.467.2207</p>
              <p>info.slc@thinkingbox.com</p>
            </div>
          </div>
          <div className="places row">
            <div>TOR</div>
            <div>
              <p>1st Floor, 33 Britain St.</p>
              <p>Toronto, ON, M5A 1R7</p>
              <p>Canada</p>
              <p>416.792.6368</p>
              <p>info.to@thinkingbox.com</p>
            </div>
          </div>
          <div className="places row border">
            <div>VAN</div>
            <div>
              <p>2nd Floor, 602 West Hastings St.</p>
              <p>Vancouver, BC, V6B 1P2</p>
              <p>Canada</p>
              <p>604.568.0601</p>
              <p>info.van@thinkingbox.com</p>
            </div>
          </div>
</section>*/}
      </main>
      <Footer />
    </motion.div>
  );
}
export default Contact;
