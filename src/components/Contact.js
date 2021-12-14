import "../styles/contact.css";
import Footer from "./global/Footer";
function Contact() {
  return (
    <div className="sections-padding">
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
                <p>James O'Brien</p>
                <p>Chief Marketing Officer</p>
                <p className="border-bottom">james@thinkingbox.com</p>
              </div>
            </div>
            <div className="staff">
              <h2>Press</h2>
              <div>
                <p>Farah Tozy</p>
                <p>Marketing Manager</p>
                <p className="border-bottom">farah@thinkingbox.com</p>
              </div>
            </div>
          </div>

          <div className="staff-section">
            <div className="staff">
              <h2>Careers</h2>
              <div>
                <p>Elisha Zagerman</p>
                <p>Senior Manager, Talent Acquisition</p>
                <p className="border-bottom">elisha@thinkingbox.com</p>
              </div>
            </div>
            <div className="staff">
              <h2>Hello</h2>
              <div>
                <p className="border-bottom">hello@thinkingbox.com</p>
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
              <button className="work-with" type="submit">
                <div className="line"></div> <div>Let's Talk</div>
              </button>
            </div>
          </div>
        </section>

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
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Contact;
