import "../styles/contact.css";
import Footer from "./global/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m6seu3s",
        "template_qdlax6n",
        form.current,
        "user_KuuaQcc7aQYck7voeam20"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = " ";
    });
    document.querySelector("textarea").value = " ";

    document.querySelector("main").style.opacity = 0.2;
    document.querySelector("header").style.opacity = 0.2;
    document.querySelector("footer").style.opacity = 0.2;
    document.querySelector(".message-sent").style.display = "block";
  };

  const closeText = () => {
    document.querySelector("main").style.opacity = 1;
    document.querySelector("header").style.opacity = 1;
    document.querySelector("footer").style.opacity = 1;
    document.querySelector(".message-sent").style.display = "none";
  };
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <div className="message-sent">
        <span className="text-close mouse-hover" onClick={closeText}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect
              className="first-line-transition"
              x="20"
              y="30"
              width="65"
              height="7"
            ></rect>
            <rect
              className="sec-line-transition"
              y="50"
              width="65"
              height="7"
            ></rect>
          </svg>
        </span>
        <h2>Thank You</h2>
        <p>We can't wait to read your message and will be in touch soon</p>
      </div>
      <header className="contact-header">
        <div className="slide-header">
          <h1>
            <span className="scribble">
              Hello! Hola!
              <span className="scribble-text"> Howdy!</span>
              <span className="scribble-container"></span>
            </span>
            <br />
          </h1>
          <h2>
            <span>
              <p>Could you be our new friend?</p>
              <p>
                We certainly hope so! Don't hesitate to say hi and meet our
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
                <p>Shivam Pandey</p>
                <p>SEO</p>
                <p className="border-bottom mouse-hover">
                  <a href="mailto:shivam@cheesecake.agency">
                    shivam@cheesecake.agency
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <label>
                  <div>Email |</div>
                  <input
                    required="True"
                    name="user_email"
                    type="email"
                    placeholder="hello@youlooknice.com"
                  />
                </label>
                <label>
                  <div>Subject |</div>
                  <input
                    required="True"
                    name="subject"
                    type="text"
                    placeholder="tell us about your dream"
                  />
                </label>
              </div>

              <div className="row">
                <label>
                  <div>First Name |</div>
                  <input
                    required="True"
                    name="fisrt_name"
                    type="text"
                    placeholder="your given name"
                  />
                </label>
                <label>
                  <div>Last Name |</div>
                  <input
                    required="True"
                    name="last_name"
                    type="text"
                    placeholder="your family name"
                  />
                </label>
              </div>
              <label className="textarea-label">
                <div>Message | </div>
                <br />
                <textarea
                  required="True"
                  name="message"
                  placeholder="We are excited to hear from you. Truly. It makes our day. Maybe, you need a website, or a social campaign; the scenario, we are ready to make something amazing with you."
                ></textarea>
              </label>
              <div>
                <button className="work-with" type="submit">
                  <div className="line"></div> <div>Let's Talk</div>
                </button>
              </div>
            </form>
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
